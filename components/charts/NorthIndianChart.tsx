import React from 'react';

interface Planet {
  name: string;
  house: number;
}

interface NorthIndianChartProps {
  ascendant: string;
  planets: Planet[];
}

export default function NorthIndianChart({ ascendant, planets }: NorthIndianChartProps) {
  return (
    <div className="w-full max-w-md mx-auto aspect-square relative glass-panel rounded-xl p-4 border border-saffron/30">
      <h3 className="text-center text-saffron font-bold mb-2">North Indian Chart (Diamond)</h3>
      <div className="w-full h-full relative">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-electric-blue stroke-[0.5] fill-none">
          {/* Outer Box */}
          <rect x="5" y="5" width="90" height="90" />
          {/* Diagonals */}
          <line x1="5" y1="5" x2="95" y2="95" />
          <line x1="95" y1="5" x2="5" y2="95" />
          {/* Inner Diamond */}
          <line x1="50" y1="5" x2="95" y2="50" />
          <line x1="95" y1="50" x2="50" y2="95" />
          <line x1="50" y1="95" x2="5" y2="50" />
          <line x1="5" y1="50" x2="50" y2="5" />
        </svg>

        {/* Placeholder for planet rendering - in a full app, calculate exact x/y for each house region */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="text-center">
             <span className="text-xs text-gray-400">Asc: {ascendant}</span>
             <div className="flex flex-wrap justify-center gap-1 mt-1 max-w-[60%]">
               {planets?.map(p => (
                 <span key={p.name} className="text-[10px] bg-white/10 px-1 rounded text-white">{p.name.substring(0,2)}</span>
               ))}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
