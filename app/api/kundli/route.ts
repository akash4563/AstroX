import { NextRequest, NextResponse } from 'next/server';

interface KundliRequestPayload {
  name: string;
  gender: string;
  dob: string; // YYYY-MM-DD
  tob: string; // HH:MM
  location: {
    city: string;
    lat: number;
    lon: number;
    timezone: number;
  };
}

export async function POST(req: NextRequest) {
  try {
    const body: KundliRequestPayload = await req.json();

    if (!body.name || !body.dob || !body.tob || !body.location) {
      return NextResponse.json(
        { error: 'Missing required fields (name, dob, tob, location)' },
        { status: 400 }
      );
    }

    const FREE_ASTRO_API_KEY = process.env.FREE_ASTRO_API_KEY;

    if (!FREE_ASTRO_API_KEY) {
      console.error("[Kundli API Proxy] Server configuration error: FREE_ASTRO_API_KEY is missing.");
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    console.log(`[Kundli API] Calling FreeAstroAPI for ${body.name}...`);

    // Parse Date and Time
    const [year, month, day] = body.dob.split('-').map(Number);
    const [hour, minute] = body.tob.split(':').map(Number);

    const payload = {
        name: body.name,
        year,
        month,
        day,
        hour,
        minute,
        city: body.location.city,
        lat: body.location.lat,
        lng: body.location.lon,
        tz_str: 'AUTO',
        house_system: 'placidus',
        include_features: ['lilith', 'chiron'],
        zodiac_type: 'tropical'
    };

    const response = await fetch('https://api.freeastroapi.com/api/v1/natal/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': FREE_ASTRO_API_KEY
      },
      body: JSON.stringify(payload)
    });

    const astroData = await response.json();

    if (!response.ok) {
      console.error("FreeAstroAPI error:", astroData);
      return NextResponse.json({ error: 'Failed to generate Chart from external API' }, { status: response.status });
    }

    // Forward the exact JSON response requested by the user for comprehensive rendering
    const mappedData = {
      status: 'success',
      message: 'Chart generated successfully from FreeAstroAPI',
      data: astroData // The UI components will map this directly
    };

    return NextResponse.json(mappedData, { status: 200 });

  } catch (error) {
    console.error('[Kundli API Proxy] Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
