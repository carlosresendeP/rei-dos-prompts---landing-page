import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="bg-slate-900 border border-gold-500/30 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(234,179,8,0.1)] text-center max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500">
          
          <div className="inline-block bg-gold-500 text-slate-900 font-bold px-4 py-1 rounded-full text-sm mb-6">
            OFERTA POR TEMPO LIMITADO
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-2">Acesso Completo</h2>
          <p className="text-slate-400 mb-8">Torne-se o Rei dos Prompts hoje.</p>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-slate-500 text-lg line-through">R$ 47,00</span>
            <span className="text-6xl font-black text-white">9,97</span>
            <span className="text-gold-500 font-bold text-xl self-end mb-2">BRL</span>
          </div>

          <ul className="text-left space-y-4 mb-10 max-w-xs mx-auto">
            <li className="flex items-center gap-3 text-slate-300">
              <div className="bg-green-500/20 p-1 rounded-full text-green-500"><Check size={16} /></div>
              <span>12 Módulos Completos</span>
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <div className="bg-green-500/20 p-1 rounded-full text-green-500"><Check size={16} /></div>
              <span>Templates Prontos para Copiar</span>
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <div className="bg-green-500/20 p-1 rounded-full text-green-500"><Check size={16} /></div>
              <span>Guia de VEO3 & Vídeos Virais</span>
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <div className="bg-green-500/20 p-1 rounded-full text-green-500"><Check size={16} /></div>
              <span>Acesso Vitalício</span>
            </li>
          </ul>

          <a href="https://pay.kiwify.com.br/xDVLf8E" target="_blank" rel="noopener noreferrer">
            <Button fullWidth pulse className="text-xl">
              COMPRAR AGORA
            </Button>
          </a>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-slate-500 text-xs">
            <ShieldCheck size={14} />
            <span>Pagamento 100% Seguro via Kiwify</span>
          </div>
        </div>
      </div>
    </section>
  );
};