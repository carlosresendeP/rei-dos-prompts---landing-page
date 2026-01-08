import React from "react";
import { Hero } from "./components/Hero";
import { VideoSection } from "./components/VideoSection";
import { Modules } from "./components/Modules";
import { Comparison } from "./components/Comparison";
import { Audience } from "./components/Audience";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-dark-950 overflow-x-hidden">
      <Hero />
      <VideoSection />
      <Comparison />
      <Audience />
      <Modules />

      {/* Short CTA Intermission */}
      <section className="py-20 bg-gradient-to-r from-brand-900 to-brand-800 border-y border-brand-500/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-black text-white mb-4 uppercase drop-shadow-md">
            Você não é mais um usuário de IA
          </h2>
          <p className="text-brand-100 font-medium max-w-2xl mx-auto mb-8 text-lg">
            Você está prestes a se tornar o Rei dos Prompts. Você comanda. Você
            cria. Você domina.
          </p>
          <a
            href="#pricing"
            className="inline-block bg-white text-brand-900 font-black py-4 px-10 rounded-xl hover:bg-brand-50 transition-all shadow-[0_0_25px_rgba(255,255,255,0.3)] transform hover:scale-105"
          >
            Garantir Minha Vaga no Trono
          </a>
        </div>
      </section>

      <Pricing />
      <Footer />
    </main>
  );
}

export default App;
