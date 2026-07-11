import React from 'react';

interface Planet {
  name: string;
  house: number;
  sign: string;
  pos: number;
  abs_pos: number;
  retrograde: boolean;
}

interface PlanetaryTableProps {
  planets: Planet[];
}

export default function PlanetaryTable({ planets }: PlanetaryTableProps) {
  return (
    <div className="glass-panel rounded-xl overflow-hidden border border-white/10 mt-8">
      <div className="bg-white/5 p-4 border-b border-white/10">
        <h3 className="text-xl font-bold text-electric-blue">Planetary Positions</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-300">
          <thead className="text-xs uppercase bg-black/40 text-gray-400">
            <tr>
              <th className="px-6 py-3">Planet</th>
              <th className="px-6 py-3">Sign</th>
              <th className="px-6 py-3">House</th>
              <th className="px-6 py-3">Position</th>
            </tr>
          </thead>
          <tbody>
            {planets.map((planet, index) => (
              <tr key={planet.name} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${index % 2 === 0 ? 'bg-transparent' : 'bg-black/20'}`}>
                <td className="px-6 py-4 font-medium text-white">
                  {planet.name} {planet.retrograde && <span className="text-xs text-red-400 ml-1">(Rx)</span>}
                </td>
                <td className="px-6 py-4">{planet.sign}</td>
                <td className="px-6 py-4">{planet.house}</td>
                <td className="px-6 py-4">{planet.pos?.toFixed(2)}°</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
