import React from "react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "HTML", "CSS"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Vue.js", "Svelte", "Framer Motion"]
  },
  {
    title: "Backend & Infra",
    skills: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "Vercel"]
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "CI/CD", "Testing", "Agile", "REST APIs", "GraphQL"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <span className="text-xs text-neutral-400 tracking-widest uppercase">03 — Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mt-4">Technical Skills</h2>
            <p className="text-neutral-500 mt-4 leading-relaxed">Technologies and tools I work with regularly to build reliable, scalable software.</p>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skillCategories.map((category) => (
                <div key={category.title} className="bg-white rounded-lg border border-neutral-100 p-6">
                  <h3 className="text-sm font-semibold text-neutral-900 tracking-wide uppercase mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-3 py-1.5 border border-neutral-200 text-neutral-600 rounded-md hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}