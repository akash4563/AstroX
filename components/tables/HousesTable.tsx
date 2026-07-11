import React from 'react';
import { Home } from 'lucide-react';

interface House {
  house: number;
  sign: string;
  degree_cusp: number;
}

interface HousesTableProps {
  houses: House[];
}

export default function HousesTable({ houses }: HousesTableProps) {
  return (
    <div className="glass-panel rounded-xl overflow-hidden border border-white/10 mt-8">
      <div className="bg-white/5 p-4 border-b border-white/10 flex items-center gap-2">
        <Home className="w-5 h-5 text-electric-blue" />
        <h3 className="text-xl font-bold text-electric-blue">House Cusps</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-300">
          <thead className="text-xs uppercase bg-black/40 text-gray-400">
            <tr>
              <th className="px-6 py-3">House</th>
              <th className="px-6 py-3">Sign</th>
              <th className="px-6 py-3">Degree</th>
            </tr>
          </thead>
          <tbody>
            {houses?.map((house, index) => (
              <tr key={house.house} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${index % 2 === 0 ? 'bg-transparent' : 'bg-black/20'}`}>
                <td className="px-6 py-4 font-bold text-saffron">{house.house}</td>
                <td className="px-6 py-4 text-white font-medium">{house.sign}</td>
                <td className="px-6 py-4">{house.degree_cusp?.toFixed(2)}°</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
