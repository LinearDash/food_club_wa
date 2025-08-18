const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white px-4 text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">Get In Touch 📞</h2>
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-2">📍 Find us at: Lakeside, Pokhara</p>
        <p className="mb-8">📧 Email: hello@tastywheels.com</p>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          ></textarea>
          <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/90">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;