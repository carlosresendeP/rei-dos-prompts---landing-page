import React from 'react';
import { Crown } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 text-white opacity-80">
          <Crown size={24} className="text-gold-500" />
          <span className="font-bold text-xl">REI DOS PROMPTS</span>
        </div>
        <p className="text-slate-500 text-sm mb-8">
          © {new Date().getFullYear()} Rei dos Prompts. Todos os direitos reservados.
        </p>
        <p className="text-slate-700 text-xs max-w-xl mx-auto">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
        </p>
      </div>
    </footer>
  );
};