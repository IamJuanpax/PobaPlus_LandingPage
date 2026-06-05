"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo se maneja la privacidad de los datos médicos?",
    answer: "Utilizamos Firebase Firestore con Reglas de Seguridad granulares (Security Rules) que aseguran que sólo el paciente y el médico asignado puedan leer los documentos. Además, los datos sensibles en reposo están encriptados por defecto por Google Cloud."
  },
  {
    question: "¿La aplicación está optimizada para tablets y celulares de baja gama?",
    answer: "Sí. React Native nos permite unificar la base de código pero utilizamos componentes condicionales y estilos responsivos para adaptar la UI a tablets. Además, el bundle se optimiza (.aab) para reducir la carga de memoria en dispositivos antiguos."
  },
  {
    question: "¿Cómo funciona el sistema de roles entre Administradores y Profesionales?",
    answer: "Implementamos Custom Claims en Firebase Auth. Al iniciar sesión, el token JWT del usuario dicta su rol. La UI en React Native condicionalmente renderiza los paneles de administración y las reglas de Firestore bloquean cualquier escritura no autorizada a nivel servidor."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-24 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
          Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Frecuentes</span>
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`rounded-2xl border transition-colors duration-300 ${isOpen ? 'bg-zinc-900/80 border-cyan-500/50' : 'bg-zinc-900/30 border-zinc-800 hover:border-zinc-700'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-medium text-zinc-100">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-zinc-400 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6 px-6' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-zinc-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
