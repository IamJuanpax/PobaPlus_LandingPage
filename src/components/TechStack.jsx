import { Smartphone, Database, MapPin } from 'lucide-react';

const technologies = [
  {
    title: 'Mobile: React Native + Expo',
    description: 'Desarrollo multiplataforma de alto rendimiento con compilación EAS y optimización de bundles (.aab) para una experiencia nativa fluida.',
    icon: Smartphone,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20'
  },
  {
    title: 'Backend & Auth: Firebase',
    description: 'Arquitectura Serverless con Firestore para datos en tiempo real, reglas de seguridad robustas por roles y Storage para adjuntos médicos.',
    icon: Database,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20'
  },
  {
    title: 'Features Core: Geolocalización',
    description: 'Geolocalización nativa y validación de distancias (geofencing de 400m) para control de asistencia y generación dinámica de PDFs en el dispositivo.',
    icon: MapPin,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20'
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
          Arquitectura y <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Stack Tecnológico</span>
        </h2>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
          Un ecosistema moderno diseñado para escalar, priorizando la seguridad de los datos médicos y la fiabilidad en tiempo real.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div 
              key={index}
              className="group relative rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900 hover:border-zinc-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
              
              <div className={`inline-flex p-3 rounded-xl ${tech.bg} ${tech.border} border mb-6`}>
                <Icon className={`w-6 h-6 ${tech.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">{tech.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {tech.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
