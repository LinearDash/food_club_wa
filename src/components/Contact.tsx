"use client";

import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      e.currentTarget.reset();
    }, 1000);
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white px-4 text-gray-900 scroll-mt-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Thank You!</h2>
          <p className="text-lg text-gray-700 mb-8">
            Your message has been received. We&apos;ll get back to you soon!
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/90"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white px-4 text-gray-900 scroll-mt-24">
      <h2 className="text-3xl font-bold text-center mb-3 text-primary">Get In Touch</h2>
      <p className="text-center text-gray-600 mb-10">Questions, catering, or collabs? Drop us a line and we&apos;ll get back to you.</p>
      <div className="max-w-3xl mx-auto">
        {/* Info */}
        <div className="mb-6 text-center text-sm text-gray-700">
          <p className="mb-1">📍 29A Ewart Street, Midvale WA 6056</p>
          <p className="mb-1">📞 0430 067 850</p>
          <p>📧 foodclubwa2023@gmail.com</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-primary/10 shadow-sm p-5 sm:p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone (optional)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                pattern="[0-9+\-\s()]{7,}"
                placeholder="+61 400 000 000"
                autoComplete="tel"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
              <select
                id="subject"
                name="subject"
                className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                defaultValue="general"
              >
                <option value="general">General Question</option>
                <option value="catering">Catering / Events</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell us what you're after..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            ></textarea>
            <p className="mt-1 text-xs text-gray-500">We usually respond within 1 business day.</p>
          </div>

          <div className="flex items-center justify-between gap-4">
            <label className="inline-flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
              Subscribe to updates and pop-up alerts
            </label>
            <button type="submit" disabled={isSubmitting} className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/90 disabled:opacity-70">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;