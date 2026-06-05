import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start space-x-6 md:order-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:contacto@ejemplo.com" className="text-zinc-500 hover:text-zinc-300 transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <Image 
                src="/images/logo_app.png" 
                alt="PobaPlus Logo" 
                width={32} 
                height={32} 
                className="rounded-lg"
              />
              <p className="text-base text-zinc-300 font-semibold">PobaPlus Case Study</p>
            </div>
            <p className="text-center md:text-left text-sm text-zinc-500">
              &copy; {new Date().getFullYear()} Creado para demostración técnica. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
