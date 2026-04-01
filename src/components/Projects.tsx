import React from "react";

interface Project {
  title: string;
  url: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
}

const projects: Project[] = [
  {
    title: "Halu",
    url: "halu.sthobis.com",
    description: "LLM Site Builder",
    longDescription: "An AI-powered site builder that uses large language models to generate complete websites from natural language descriptions. Simply describe what you want, and Halu creates it — from layout to content to styling.",
    tech: ["LLM", "React", "TypeScript", "AI", "Full-Stack"],
    image: "https://picsum.photos/seed/halu/800/600"
  },
  {
    title: "Portfolio",
    url: "sthobis.com",
    description: "Personal Portfolio Site",
    longDescription: "A minimal, thoughtfully designed personal portfolio showcasing my work and journey as a software engineer. Built with modern web technologies and a focus on performance and clean aesthetics.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    image: "https://picsum.photos/seed/portfolio/800/600"
  }
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-xs text-neutral-400 tracking-widest uppercase">02 — Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mt-4">Selected Projects</h2>
          <p className="text-neutral-500 mt-4 max-w-lg">A selection of projects I've built, ranging from AI-powered tools to personal experiments.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={`https://${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden transition-all duration-300 hover:border-neutral-400">
                <div className="relative overflow-hidden aspect-[4/3] bg-neutral-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-neutral-900/90 flex items-center justify-center p-8 transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}>
                    <div className="text-center">
                      <p className="text-white/90 text-sm leading-relaxed font-['Source_Serif_4'] max-w-sm">{project.longDescription}</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-white text-sm font-medium">
                        <span>Visit Site</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors">{project.title}</h3>
                      <p className="text-sm text-neutral-400 mt-0.5">{project.description}</p>
                    </div>
                    <span className="text-xs text-neutral-400 font-mono mt-1">{project.url}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 bg-neutral-100 text-neutral-500 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}