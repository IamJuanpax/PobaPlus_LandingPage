import { CheckCircle2 } from 'lucide-react';

const challenges = [
  {
    title: "Geolocalización Eficiente en Background",
    problem: "Garantizar la presencia del profesional en el lugar de atención sin comprometer drásticamente el rendimiento de la batería del dispositivo.",
    solution: "Implementación de geofencing optimizado mediante reglas de restricción de distancia (400 metros) directamente validadas contra las coordenadas de Firestore, minimizando los pings al GPS."
  },
  {
    title: "Generación de Reportes Médicos Offline-First",
    problem: "Necesidad de generar reportes médicos limpios y exportables sin depender de microservicios externos o conectividad constante.",
    solution: "Uso de plantillas HTML inyectadas con datos de la sesión y compiladas a formato PDF de forma nativa desde el dispositivo, permitiendo compartir instantáneamente."
  }
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="scroll-mt-24 relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
      
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
            Caso de Estudio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
            Desafíos Técnicos y Resoluciones
          </h2>
          <p className="text-zinc-400 text-lg">
            La construcción de PobaPlus requirió soluciones de ingeniería que balancean el rendimiento nativo con reglas de negocio estrictas.
          </p>
        </div>
        
        <div className="lg:col-span-7 space-y-6">
          {challenges.map((challenge, index) => (
            <div key={index} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-6 sm:p-8">
              <h3 className="text-xl font-bold text-zinc-100 mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                {challenge.title}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">El Reto</h4>
                  <p className="text-sm sm:text-base text-zinc-300">{challenge.problem}</p>
                </div>
                
                <div className="pl-4 border-l-2 border-cyan-500/30">
                  <h4 className="text-xs font-bold text-cyan-500 uppercase tracking-wider mb-1">La Solución</h4>
                  <p className="text-sm sm:text-base text-zinc-300">{challenge.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
