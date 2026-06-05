import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-cyan-500 mr-2 animate-pulse"></span>
              Gestión Médica Inteligente
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
              <span className="block text-zinc-50">La evolución en la</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mt-2">
                salud digital
              </span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto lg:mx-0">
              PobaPlus revoluciona la gestión médica y el seguimiento de pacientes en tiempo real. 
              Diseñada para profesionales de la salud con tecnología de vanguardia.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#download" className="inline-flex justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-4 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40">
                <Download className="w-5 h-5" />
                Descargar App
              </a>
              <a href="#case-study" className="inline-flex justify-center items-center gap-2 rounded-xl bg-zinc-900 border border-zinc-800 px-8 py-4 text-sm font-semibold text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-800 hover:text-white">
                Ver Caso de Estudio
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right Column: Mockup */}
          <div className="relative mx-auto w-full max-w-[300px] lg:max-w-[350px]">
            {/* Glow effect behind mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/20 blur-[100px] rounded-full"></div>
            
            {/* Phone Frame Mockup */}
            <div className="relative rounded-[2.5rem] border-[8px] border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden aspect-[9/19] ring-1 ring-zinc-700/50 transform transition-transform duration-500 hover:-translate-y-2">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-zinc-800 rounded-b-3xl w-1/2 mx-auto z-20"></div>
              
              <Image 
                src="/images/1.jpeg" 
                alt="PobaPlus App Interface" 
                fill
                className="object-cover z-10"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
