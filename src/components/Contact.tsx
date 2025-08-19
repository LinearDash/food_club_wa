"use client";

import { useState } from "react";

const Contact = () => {
  // Form submission state - tracks loading and success
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form submission - simulates sending (no actual API call)
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay for better UX
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      e.currentTarget.reset();
    }, 1000);
  }

  // Success state - shows after form submission
  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-background-alt px-4 text-gray-900 scroll-mt-24">
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
    <section id="contact" className="relative py-20 px-4 text-gray-900 scroll-mt-24">
      {/* Decorative background with secondary green accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/10 via-background-alt to-white" />

      {/* Section heading */}
      <h2 className="text-3xl font-bold text-center mb-3 text-primary">Get In Touch</h2>

      {/* Section description */}
      <p className="text-center text-gray-600 mb-10">Questions, catering, or collabs? Drop us a line and we&apos;ll get back to you.</p>

      <div className="max-w-3xl mx-auto">
        {/* Contact information display */}
        <div className="mb-6 text-center text-sm text-gray-700 space-y-2">
          <p>
            <span className="font-medium">📍 Address:</span> 29A Ewart Street, Midvale WA 6056
          </p>
          <p>
            <span className="font-medium">📞 Phone:</span> <a href="tel:0430067850" className="text-primary hover:underline">0430 067 850</a>
          </p>
          <p>
            <span className="font-medium">📧 Email:</span> <a href="mailto:foodclubwa2023@gmail.com" className="text-primary hover:underline">foodclubwa2023@gmail.com</a>
          </p>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur rounded-xl border border-primary/10 shadow p-5 sm:p-6 space-y-4">
          {/* Name and Email row - side by side on desktop, stacked on mobile */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
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
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>

          {/* Phone and Subject row - side by side on desktop, stacked on mobile */}
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
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
              <select
                id="subject"
                name="subject"
                className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/40"
                defaultValue="general"
              >
                <option value="general">General Question</option>
                <option value="catering">Catering / Events</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
          </div>

          {/* Message textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell us what you're after..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
            ></textarea>
            <p className="mt-1 text-xs text-gray-500">We usually respond within 1 business day.</p>
          </div>

          {/* Form footer - checkbox and submit button */}
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