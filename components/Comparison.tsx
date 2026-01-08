import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 relative border-y border-brand-900/50">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            A Diferença Entre <span className="text-red-500">Amador</span> e <span className="text-green-500">Profissional</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            99% das pessoas usam a IA como um motor de busca. O Rei dos Prompts usa como um funcionário de elite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Weak Prompt */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 relative group hover:border-red-500/40 transition-colors">
            <div className="absolute top-4 right-4 text-red-500 opacity-50 group-hover:opacity-100 transition-opacity">
              <XCircle size={32} />
            </div>
            <h3 className="text-xl font-bold text-red-400 mb-4">❌ Prompt Fraco</h3>
            <div className="bg-red-500/5 border border-red-500/10 p-4 rounded-lg text-slate-300 font-mono text-sm mb-4">
              "Crie um vídeo de marketing."
            </div>
            <p className="text-slate-500 text-sm">
              Vago, sem direção, sem contexto. A IA vai gerar algo genérico e inútil que todo mundo já viu.
            </p>
          </div>

          {/* Strong Prompt */}
          <div className="bg-brand-900/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 relative shadow-[0_0_30px_rgba(34,197,94,0.1)]">
            <div className="absolute top-4 right-4 text-green-500">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-xl font-bold text-green-400 mb-4">✅ Prompt Rei</h3>
            <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg text-green-100 font-mono text-sm mb-4">
              "Você é um diretor criativo especializado em vídeos virais para TikTok. Crie um roteiro de 30 segundos para promover um curso de fotografia, com tom inspirador, usando storytelling emocional..."
            </div>
            <p className="text-slate-300 text-sm">
              Específico, estruturado, com expectativas claras. O resultado é um conteúdo que vende.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};