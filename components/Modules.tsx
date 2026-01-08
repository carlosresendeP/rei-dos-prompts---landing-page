import React from 'react';
import { 
  BrainCircuit, 
  Clapperboard, 
  MessageCircle, 
  Video, 
  Smartphone, 
  Users, 
  Code, 
  Layers, 
  AlertTriangle, 
  DollarSign,
  BookOpen,
  Zap
} from 'lucide-react';
import { ModuleItem } from '../types';

const modules: ModuleItem[] = [
  {
    id: 1,
    title: "Fundamentos Essenciais",
    description: "O que são prompts e por que 99% das pessoas usam errado. Aprenda a mentalidade do Rei.",
    icon: BookOpen
  },
  {
    id: 2,
    title: "Entendendo o Cérebro da IA",
    description: "Tokens, contexto e como a IA realmente 'pensa' para gerar respostas precisas.",
    icon: BrainCircuit
  },
  {
    id: 3,
    title: "Estrutura do Prompt Perfeito",
    description: "Contexto, Papel, Objetivo, Restrições e Formato. A anatomia que não falha.",
    icon: Layers
  },
  {
    id: 4,
    title: "Pensamento de Diretor",
    description: "Crie prompts cinematográficos: ângulos, iluminação, movimento e emoção.",
    icon: Clapperboard
  },
  {
    id: 5,
    title: "Falas Naturais em Português",
    description: "Como fazer a IA falar gírias, ter ritmo e soar como um brasileiro real.",
    icon: MessageCircle
  },
  {
    id: 6,
    title: "Otimizados para VEO3",
    description: "Clareza visual e especificidade técnica para a ferramenta de vídeo mais poderosa.",
    icon: Video
  },
  {
    id: 7,
    title: "Vídeos Virais (TikTok/Reels)",
    description: "A ciência dos 3 segundos iniciais e estruturas de retenção máxima.",
    icon: Smartphone
  },
  {
    id: 8,
    title: "Prompts UGC",
    description: "User Generated Content que vende sem parecer anúncio. Aumente conversões.",
    icon: Users
  },
  {
    id: 9,
    title: "Para Devs e Programadores",
    description: "Gere código limpo, scripts e automações com especificidade técnica.",
    icon: Code
  },
  {
    id: 10,
    title: "Arsenal de Templates",
    description: "Templates prontos para colar e adaptar. Economize horas de trabalho.",
    icon: Zap
  },
  {
    id: 11,
    title: "Erros e Ética",
    description: "O que NÃO fazer, direitos autorais e como manter a criatividade humana.",
    icon: AlertTriangle
  },
  {
    id: 12,
    title: "Como Ganhar Dinheiro",
    description: "Serviços, consultorias e como cobrar R$ 500 por vídeo de 30s.",
    icon: DollarSign
  },
];

export const Modules: React.FC = () => {
  return (
    <section id="modules" className="py-24 bg-dark-950 relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-400 font-bold tracking-widest uppercase text-sm bg-brand-900/30 px-3 py-1 rounded-full border border-brand-500/20">Conteúdo Programático</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4">
            O Que Você Vai <span className="text-yellow-400">Dominar</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div key={module.id} className="glass-card p-6 rounded-2xl hover:bg-brand-900/40 transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-brand-500/10 border border-brand-500/20 p-3 rounded-xl text-brand-400 group-hover:text-white group-hover:bg-brand-500 transition-colors shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                  {module.icon && <module.icon size={24} />}
                </div>
                <span className="text-brand-300/50 font-mono text-xs border border-brand-500/10 px-2 py-1 rounded">MOD {module.id}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-200 transition-colors">
                {module.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};