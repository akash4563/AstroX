import React from 'react';

interface Planet {
  name: string;
  sign: string;
}

interface SouthIndianChartProps {
  planets: Planet[];
}

export default function SouthIndianChart({ planets }: SouthIndianChartProps) {
  // Zodiac signs in fixed positions (starting Pisces top-left, going clockwise)
  const signs = [
    'Pisces', 'Aries', 'Taurus', 'Gemini',
    'Aquarius', 'Cancer',
    'Capricorn', 'Leo',
    'Sagittarius', 'Scorpio', 'Libra', 'Virgo'
  ];

  const gridOrder = [
    0, 1, 2, 3,
    11, -1, -1, 4,
    10, -1, -1, 5,
    9, 8, 7, 6
  ];

  return (
    <div className="w-full max-w-md mx-auto aspect-square relative glass-panel rounded-xl p-4 border border-saffron/30 mt-4 md:mt-0">
      <h3 className="text-center text-saffron font-bold mb-2">South Indian Chart (Square)</h3>
      <div className="grid grid-cols-4 grid-rows-4 w-full h-[calc(100%-2rem)] border-2 border-electric-blue">
        {gridOrder.map((signIndex, i) => {
          if (signIndex === -1) {
             return <div key={i} className={`border border-electric-blue/30 ${i === 5 ? 'col-span-2 row-span-2 flex items-center justify-center text-gray-500/50 italic' : 'hidden'}`}>
                {i === 5 && 'Rasi Chart'}
             </div>;
          }

          const signName = signs[signIndex];
          const signPlanets = planets.filter(p => p.sign === signName);

          return (
            <div key={i} className="border border-electric-blue/50 p-1 flex flex-col relative overflow-hidden">
              <span className="text-[9px] text-gray-500 absolute bottom-1 right-1">{signName.substring(0,3)}</span>
              <div className="flex flex-wrap gap-[2px]">
                {signPlanets.map(p => (
                  <span key={p.name} className="text-[10px] text-white font-semibold leading-none">{p.name.substring(0,2)}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
