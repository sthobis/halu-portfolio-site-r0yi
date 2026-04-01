import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <span className="text-xs text-neutral-400 tracking-widest uppercase">01 — About</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mt-4">About Me</h2>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-6">
              <p className="text-neutral-500 leading-relaxed text-lg font-['Source_Serif_4']">
                I'm Stefanus Thobi Sinaga, a software engineer passionate about building products that are both technically sound and delightful to use. With experience spanning frontend development, full-stack engineering, and developer tooling, I approach every project with a focus on simplicity and impact.
              </p>
              <p className="text-neutral-500 leading-relaxed text-lg font-['Source_Serif_4']">
                I believe in writing code that is maintainable, performant, and accessible. Whether it's architecting a complex web application or experimenting with LLM-powered tools, I strive to push boundaries while keeping the user experience at the center of every decision.
              </p>
              <p className="text-neutral-500 leading-relaxed text-lg font-['Source_Serif_4']">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, or thinking about how software can solve real-world problems more elegantly.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-neutral-900">5+</p>
                <p className="text-sm text-neutral-400 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-neutral-900">10+</p>
                <p className="text-sm text-neutral-400 mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-neutral-900">∞</p>
                <p className="text-sm text-neutral-400 mt-1">Curiosity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}