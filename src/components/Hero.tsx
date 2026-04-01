import React from "react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-16">
      <div className="max-w-6xl w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-neutral-900 animate-pulse" />
            <span className="text-sm text-neutral-500 tracking-widest uppercase">Available for work</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-neutral-900 tracking-tight leading-tight mb-6">
            Stefanus Thobi<br />Sinaga
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed mb-12 max-w-xl font-['Source_Serif_4'] italic">
            Software Engineer crafting thoughtful digital experiences with clean code and purposeful design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => scrollTo("projects")} className="bg-neutral-900 text-white rounded-md px-6 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors">
              View Projects
            </button>
            <button onClick={() => scrollTo("contact")} className="border border-neutral-200 bg-white rounded-md px-6 py-3 text-sm hover:bg-neutral-50 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
        <div className="mt-24 flex items-center gap-2 text-neutral-400">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}