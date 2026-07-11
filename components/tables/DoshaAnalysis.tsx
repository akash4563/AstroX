import React from 'react';
import { ShieldAlert, ShieldCheck } from 'lucide-react';

interface DoshaAnalysisProps {
  doshas: {
    manglik: boolean;
    kalsarp: boolean;
  };
}

export default function DoshaAnalysis({ doshas }: DoshaAnalysisProps) {
  return (
    <div className="glass-panel rounded-xl overflow-hidden border border-white/10 mt-8 p-6">
      <h3 className="text-xl font-bold text-saffron mb-4">Dosha Analysis</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Manglik Dosha */}
        <div className={`p-4 rounded-lg border flex items-start gap-4 ${doshas.manglik ? 'bg-red-900/20 border-red-500/50' : 'bg-green-900/20 border-green-500/50'}`}>
          {doshas.manglik ? <ShieldAlert className="text-red-500 w-6 h-6 flex-shrink-0" /> : <ShieldCheck className="text-green-500 w-6 h-6 flex-shrink-0" />}
          <div>
            <h4 className={`font-bold ${doshas.manglik ? 'text-red-400' : 'text-green-400'}`}>Manglik Dosha</h4>
            <p className="text-sm text-gray-400 mt-1">
              {doshas.manglik
                ? "Mars is positioned such that it creates a Manglik Dosha in your chart. Remedies may be advised."
                : "No Manglik Dosha detected. Mars is favorably positioned."}
            </p>
          </div>
        </div>

        {/* Kalsarp Dosha */}
        <div className={`p-4 rounded-lg border flex items-start gap-4 ${doshas.kalsarp ? 'bg-red-900/20 border-red-500/50' : 'bg-green-900/20 border-green-500/50'}`}>
          {doshas.kalsarp ? <ShieldAlert className="text-red-500 w-6 h-6 flex-shrink-0" /> : <ShieldCheck className="text-green-500 w-6 h-6 flex-shrink-0" />}
          <div>
            <h4 className={`font-bold ${doshas.kalsarp ? 'text-red-400' : 'text-green-400'}`}>Kalsarp Dosha</h4>
            <p className="text-sm text-gray-400 mt-1">
              {doshas.kalsarp
                ? "All planets are hemmed between Rahu and Ketu, indicating Kalsarp Dosha."
                : "No Kalsarp Dosha detected in your chart."}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
