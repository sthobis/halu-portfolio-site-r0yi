import React from "react";

export default function Contact() {
  const [formData, setFormData] = React.useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <span className="text-xs text-neutral-400 tracking-widest uppercase">04 — Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mt-4">Let's Talk</h2>
            <p className="text-neutral-500 mt-4 leading-relaxed">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-400"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" /></svg>
                <span className="text-sm text-neutral-500">hello@sthobis.com</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-400"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                <span className="text-sm text-neutral-500">sthobis.com</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-8">
            {submitted ? (
              <div className="bg-white rounded-lg border border-neutral-100 p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Message Sent</h3>
                <p className="text-neutral-500 text-sm">Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-neutral-100 p-8 md:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full border border-neutral-200 rounded-md px-3 py-2.5 text-sm bg-white focus:ring-1 focus:ring-neutral-400 focus:outline-none transition-shadow"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full border border-neutral-200 rounded-md px-3 py-2.5 text-sm bg-white focus:ring-1 focus:ring-neutral-400 focus:outline-none transition-shadow"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project or just say hello..."
                    className="w-full border border-neutral-200 rounded-md px-3 py-2.5 text-sm bg-white focus:ring-1 focus:ring-neutral-400 focus:outline-none transition-shadow resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-neutral-900 text-white rounded-md px-6 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors w-full sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}