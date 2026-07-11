import React from 'react';
import { Network } from 'lucide-react';

interface Aspect {
  p1: string;
  p2: string;
  type: string;
  orb: number;
  deg: number;
  is_major: boolean;
}

interface AspectsTableProps {
  aspects: Aspect[];
}

export default function AspectsTable({ aspects }: AspectsTableProps) {
  // Take only the major aspects for the UI dashboard to prevent clutter
  const majorAspects = aspects.filter(a => a.is_major).slice(0, 10);

  const getAspectColor = (type: string) => {
    switch (type) {
      case 'trine':
      case 'sextile':
        return 'text-green-400';
      case 'square':
      case 'opposition':
        return 'text-red-400';
      case 'conjunction':
        return 'text-electric-blue';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="glass-panel rounded-xl overflow-hidden border border-white/10 mt-8">
      <div className="bg-white/5 p-4 border-b border-white/10 flex items-center gap-2">
        <Network className="w-5 h-5 text-saffron" />
        <h3 className="text-xl font-bold text-saffron">Major Aspects</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-300">
          <thead className="text-xs uppercase bg-black/40 text-gray-400">
            <tr>
              <th className="px-6 py-3">Planet 1</th>
              <th className="px-6 py-3">Aspect</th>
              <th className="px-6 py-3">Planet 2</th>
              <th className="px-6 py-3">Orb</th>
            </tr>
          </thead>
          <tbody>
            {majorAspects.length > 0 ? (
              majorAspects.map((aspect, index) => (
                <tr key={index} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${index % 2 === 0 ? 'bg-transparent' : 'bg-black/20'}`}>
                  <td className="px-6 py-4 font-medium text-white capitalize">{aspect.p1.replace('_', ' ')}</td>
                  <td className={`px-6 py-4 font-bold capitalize ${getAspectColor(aspect.type)}`}>{aspect.type}</td>
                  <td className="px-6 py-4 font-medium text-white capitalize">{aspect.p2.replace('_', ' ')}</td>
                  <td className="px-6 py-4">{aspect.orb.toFixed(2)}°</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-gray-500 italic">No major aspects found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
