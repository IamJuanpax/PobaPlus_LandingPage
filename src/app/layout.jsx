import './globals.css'

export const metadata = {
  title: 'Mobile Health Application | Gestión Médica',
  description: 'La evolución en la gestión médica y el seguimiento de pacientes en tiempo real',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col font-sans bg-zinc-950 text-zinc-50">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  )
}
