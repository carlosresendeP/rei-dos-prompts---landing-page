import React from 'react';
import { Rocket, Video, Terminal, Briefcase } from 'lucide-react';

export const Audience: React.FC = () => {
  const list = [
    { icon: Rocket, title: "Iniciantes", desc: "Que querem começar do zero da maneira certa." },
    { icon: Video, title: "Creators & Marketers", desc: "Que precisam de conteúdo viral e copy persuasiva." },
    { icon: Terminal, title: "Programadores", desc: "Que querem codar mais rápido e melhor." },
    { icon: Briefcase, title: "Profissionais", desc: "Que querem vender serviços de IA e lucrar alto." },
  ];

  return (
    <section className="py-20 bg-slate-950 border-y border-slate-900">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white mb-12">Para Quem é Este Ebook?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {list.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-gold-500 mb-4 group-hover:border-gold-500 transition-colors">
                <item.icon size={28} />
              </div>
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};