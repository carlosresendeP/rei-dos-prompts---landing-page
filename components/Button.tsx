import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  pulse?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  pulse = false,
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2";
  
  const variants = {
    // Mantendo dourado para CTA principal mas com brilho ajustado
    primary: "bg-gradient-to-r from-gold-500 to-gold-600 text-slate-900 border border-gold-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]",
    // Secundário agora é Índigo/Roxo para combinar com a identidade
    secondary: "bg-brand-900/40 backdrop-blur-md text-white hover:bg-brand-800/60 border border-brand-500/30 hover:border-brand-500/60",
    outline: "bg-transparent border-2 border-brand-500 text-brand-400 hover:bg-brand-500/10"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";
  const pulseClass = pulse ? "animate-pulse-slow" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${pulseClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};