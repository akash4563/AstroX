import { NextRequest, NextResponse } from 'next/server';

// Placeholder type for the incoming request payload
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

    // Basic validation
    if (!body.name || !body.dob || !body.tob || !body.location) {
      return NextResponse.json(
        { error: 'Missing required fields (name, dob, tob, location)' },
        { status: 400 }
      );
    }

    // This is where you would configure your actual B2B Astrology API details
    const ASTRO_API_URL = process.env.ASTRO_API_URL || 'https://api.placeholder-astrology.com/v1/kundli';
    const ASTRO_API_KEY = process.env.ASTRO_API_KEY || 'dummy_key';

    // Log the action (in a real app, this might go to a logging service)
    console.log(`[Kundli API Proxy] Forwarding request for ${body.name}`);

    // Mocking the API response for now since we are in MVP phase
    // In production, you would use fetch() here to call the real API:
    /*
    const response = await fetch(ASTRO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ASTRO_API_KEY}`,
      },
      body: JSON.stringify({
        day: parseInt(body.dob.split('-')[2]),
        month: parseInt(body.dob.split('-')[1]),
        year: parseInt(body.dob.split('-')[0]),
        hour: parseInt(body.tob.split(':')[0]),
        min: parseInt(body.tob.split(':')[1]),
        lat: body.location.lat,
        lon: body.location.lon,
        tzone: body.location.timezone,
      }),
    });
    const data = await response.json();
    */

    // Simulate network delay for the anime loading state
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock payload representing what a B2B API might return
    const mockResponse = {
      status: 'success',
      message: 'Kundli generated successfully',
      data: {
        ascendant: 'Leo',
        moonSign: 'Aries',
        planets: [
          { name: 'Sun', house: 1, sign: 'Leo', degree: 15.4 },
          { name: 'Moon', house: 9, sign: 'Aries', degree: 22.1 },
          { name: 'Mars', house: 7, sign: 'Aquarius', degree: 5.8 },
          // ... other planets
        ],
        doshas: {
          manglik: false,
          kalsarp: true,
        },
      },
    };

    return NextResponse.json(mockResponse, { status: 200 });
  } catch (error) {
    console.error('[Kundli API Proxy] Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
