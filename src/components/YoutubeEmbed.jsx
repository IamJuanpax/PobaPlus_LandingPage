export default function YoutubeEmbed() {
  const getYouTubeID = (url) => {
    if (!url) return "dQw4w9WgXcQ"; // Fallback placeholder
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : "dQw4w9WgXcQ";
  };

  const videoId = getYouTubeID(process.env.NEXT_PUBLIC_YOUTUBE_URL);

  return (
    <section className="scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
          Demostración <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">En Vivo</span>
        </h2>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
          Mirá cómo fluye la interacción real de la aplicación en este breve recorrido técnico.
        </p>
      </div>

      <div className="max-w-4xl mx-auto rounded-3xl p-2 bg-zinc-900 border border-zinc-800 shadow-2xl shadow-cyan-500/10">
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-950">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`}
            title="App Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
