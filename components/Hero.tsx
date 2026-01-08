import React, { useEffect } from "react";
import { Crown, CheckCircle2, PlayCircle } from "lucide-react";
import { Button } from "./Button";
import video1 from "/video1.mp4";
import video2 from "/video2.mp4";


export const Hero: React.FC = () => {
  useEffect(() => {
    console.log("🎥 Video path:", video1);
  }, []);

  const handleVideoError = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    console.error("❌ Erro ao carregar vídeo:", e);
  };

  const handleVideoLoad = () => {
    console.log("✅ Vídeo carregado com sucesso!");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 px-4">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/30 rounded-full px-4 py-1 text-brand-100 font-semibold text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(79,70,229,0.3)]">
            <Crown size={16} className="text-gold-400" />
            <span className="text-gold-100">O Manual de quem manda na IA</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight text-white tracking-tight drop-shadow-lg">
            REI DOS{" "}
            <span className="text-yellow-400">
              PROMPTS
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            O Guia Definitivo para criar prompts cinematográficos, vídeos virais
            e usar a Inteligência Artificial para gerar lucro real.
            <span className="block mt-2 text-brand-100 font-semibold">
              Pare de pedir, comece a comandar.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a href="#pricing" className="contents">
              <Button pulse className="shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                QUERO DOMINAR A IA
              </Button>
            </a>
            <a href="#modules" className="contents">
              <Button variant="secondary">Ver Conteúdo</Button>
            </a>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-400" />
              <span>Falas Naturais (BR)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-400" />
              <span>Otimizado para VEO3</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-400" />
              <span>Vídeos Virais</span>
            </div>
          </div>
        </div>

        {/* Video / Visual Mockup Area */}
        <div className="relative h-[600px] flex items-center justify-center order-1 lg:order-2 perspective-1000">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-brand-600 blur-[100px] opacity-20 animate-pulse-slow"></div>

          {/* Secondary Phone (Background) */}
          <div className="absolute right-0 lg:right-10 scale-90 opacity-60 transform translate-x-10 translate-y-10 rotate-12 z-0 border-[8px] border-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] w-[280px] bg-black">
            {/* PLACEHOLDER VIDEO 2 - Substitua pelo seu arquivo de vídeo */}
            <video
              className="w-full h-full object-cover opacity-70"
              autoPlay
              loop
              muted
              playsInline
              onError={handleVideoError}
              onLoadedData={handleVideoLoad}
              poster="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
            >
              <source src={video1} type="video/mp4" className="w-full h-full object-cover opacity-70"/>
            </video>
            <div className="absolute inset-0 bg-indigo-900/30 mix-blend-overlay"></div>
          </div>

          {/* Primary Phone (Foreground) */}
          <div className="relative z-10 transform -rotate-6 hover:rotate-0 transition-transform duration-500 ease-out">
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl flex flex-col">
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-950 relative">
                {/* VIDEO PLAYER - PLACEHOLDER 1 */}
                {/* Substitua o src abaixo pelo link do seu vídeo principal */}
                <video
                  className="w-full h-full object-cover rounded-[2rem]"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onError={handleVideoError}
                  onLoadedData={handleVideoLoad}
                >
                  <source src={video2} type="video/mp4" className="w-full h-full object-cover opacity-70 rounded-[2rem]" />
                  Seu navegador não suporta vídeos.
                </video>

                {/* Overlay UI Elements to look like a social app */}
                <div className="absolute top-4 left-0 right-0 px-6 flex justify-between items-center z-20">
                  <div className="bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">
                    VEO 3
                  </div>
                  <div className="bg-red-500/80 w-2 h-2 rounded-full animate-pulse"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gold-400 to-brand-500 p-[2px]">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                        <Crown size={14} className="text-white" />
                      </div>
                    </div>
                    <span className="text-white font-semibold text-sm">
                      @Cbitzero
                    </span>
                  </div>
                  <p className="text-white/80 text-xs line-clamp-2">
                    Olha a diferença que um prompt profissional faz! 🚀 #IA
                    #Marketing
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Element: Quality Badge */}
          {/* <div className="absolute -bottom-4 right-10 lg:right-32 z-20 bg-slate-900/90 backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-brand-500/30 flex items-center gap-4 animate-bounce">
            <div className="bg-brand-500/20 p-3 rounded-full text-brand-400">
              <PlayCircle
                size={24}
                fill="currentColor"
                className="text-brand-500"
              />
            </div>
            <div>
              <p className="text-xs text-brand-200 uppercase tracking-wide font-bold">
                Resultado Real
              </p>
              <p className="font-bold text-white text-sm">Gerado com IA</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
