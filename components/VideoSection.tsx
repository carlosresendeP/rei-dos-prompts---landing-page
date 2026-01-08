import React, { useState } from "react";
import { Play, Sparkles } from "lucide-react";
import video1 from "/video1.mp4";

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    const videoElement = document.getElementById(
      "main-video"
    ) as HTMLVideoElement;
    if (videoElement) {
      videoElement.play();
    }
  };

  return (
    <section className="relative py-20 lg:py-32 px-4 overflow-hidden bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/30 rounded-full px-5 py-2 text-brand-100 font-semibold text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(79,70,229,0.3)] mb-4">
            <Sparkles size={16} className="text-gold-400" />
            <span className="text-gold-100">Veja o Poder em Ação</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white tracking-tight">
            Transforme{" "}
            <span className="text-yellow-400">
              Ideias em Realidade
            </span>
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Descubra como o Rei dos Prompts pode revolucionar a forma como você
            cria conteúdo com Inteligência Artificial
          </p>
        </div>

        {/* Video Container */}
        <div className="relative group max-w-2xl mx-auto">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 via-purple-600 to-gold-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

          {/* Video Wrapper */}
          <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-500/20 shadow-2xl">
            {/* Video Element */}
            <div className="relative aspect-video w-full bg-black">
              <video
                id="main-video"
                className="w-full h-full object-cover"
                controls={isPlaying}
                playsInline
                poster="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
              >
                <source
                  src={video1}
                  type="video/mp4"
                />
                Seu navegador não suporta vídeos.
              </video>

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:bg-black/30">
                  <button
                    onClick={handlePlayClick}
                    className="group/btn relative"
                    aria-label="Reproduzir vídeo"
                  >
                    {/* Outer Glow Ring */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-purple-500 rounded-full blur-2xl opacity-50 group-hover/btn:opacity-75 transition-opacity scale-150 animate-pulse" />

                    {/* Play Button */}
                    <div className="relative bg-gradient-to-br from-brand-500 to-brand-600 rounded-full p-8 shadow-2xl transform group-hover/btn:scale-110 transition-transform duration-300 border-4 border-white/20">
                      <Play
                        size={48}
                        className="text-white fill-white translate-x-1"
                      />
                    </div>

                    {/* Pulse Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-brand-400 animate-ping opacity-20" />
                  </button>
                </div>
              )}
            </div>

            {/* Video Info Bar */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4 border-t border-brand-500/20">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center">
                    <Sparkles size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">
                      Demonstração Exclusiva
                    </h3>
                    {/* <p className="text-slate-400 text-xs">
                      Veja resultados reais de alunos
                    </p> */}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span>Ao vivo</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">HD Quality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-400/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-600/20 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          {/* <p className="text-slate-400 text-sm mb-4">
            Mais de <span className="text-brand-400 font-bold">1.000+</span>{" "}
            alunos já dominam a IA
          </p> */}
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 text-white font-bold px-8 py-4 rounded-xl hover:from-brand-500 hover:to-brand-400 transition-all duration-300 shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] transform hover:scale-105"
          >
            <Sparkles size={20} />
            Quero Começar Agora
          </a>
        </div>
      </div>
    </section>
  );
};
