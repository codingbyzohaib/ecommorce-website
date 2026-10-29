import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-white text-gray-900">
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-yellow-400 font-bold tracking-[4px] uppercase">
            Get In Touch
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-5">
            Contact{" "}
            <span className="text-yellow-400">
              Awan Watch Store
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg leading-8">
            Have a question about our watches or your order?
            Contact us and our team will be happy to help.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-yellow-500 font-bold tracking-widest">
                CONTACT INFORMATION
              </p>

              <h2 className="text-4xl font-bold mt-3">
                We'd Love To Hear From You
              </h2>

              <p className="text-gray-500 mt-5 leading-8 max-w-lg">
                Whether you need help choosing a watch, have a question
                about an order, or simply want to know more about our
                collection, feel free to contact Awan Watch Store.
              </p>

              <div className="space-y-4 mt-10">
                <div className="flex items-center gap-5 bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-yellow-300 hover:shadow-sm transition">
                  <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-2xl shrink-0">
                    📍
                  </div>

                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Sargodha, Pakistan
                    </p>
                  </div>
                </div>

                

               

                <div className="flex items-center gap-5 bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-yellow-300 hover:shadow-sm transition">
                  <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-2xl shrink-0">
                    ✉️
                  </div>

                  <div>
                    <h3 className="font-bold">Email</h3>

                    <a
                      href="mailto:zohaibawan6986@gmail.com"
                      className="text-gray-500 text-sm mt-1 block hover:text-yellow-500 transition"
                    >
                      zohaibawan6986@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-yellow-300 hover:shadow-sm transition">
                  <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-2xl shrink-0">
                    📸
                  </div>

                  <div>
                    <h3 className="font-bold">Instagram</h3>

                    <a
                      href="https://instagram.com/z0haib_malik_09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 text-sm mt-1 block hover:text-yellow-500 transition"
                    >
                      @z0haib_malik_09
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-yellow-300 hover:shadow-sm transition">
                  <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-2xl shrink-0">
                    👍
                  </div>

                  <div>
                    <h3 className="font-bold">Facebook</h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Malik Zohaib
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm">
              <div className="mb-8">
                <p className="text-yellow-500 font-bold tracking-widest">
                  SEND MESSAGE
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  Let's Talk
                </h2>

                <p className="text-gray-500 mt-2">
                  Fill out the form and we'll get back to you.
                </p>
              </div>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-xl mb-6">
                  <p className="font-semibold">
                    Message Sent Successfully! ✓
                  </p>

                  <p className="text-sm mt-1">
                    Thank you for contacting Awan Watch Store.
                  </p>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label className="block font-semibold mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    rows="6"
                    required
                    className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-black transition duration-300"
                >
                  Send Message →
                </button>
              </form>

              <div className="mt-7 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">
                  🔒 Your information is kept private and secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-black text-white rounded-3xl p-10 md:p-14 text-center">
            <p className="text-yellow-400 font-bold tracking-widest">
              AWAN WATCH STORE
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Find Your Perfect Watch
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Explore our collection and discover a timepiece
              that matches your style.
            </p>

            <a
              href="/watches"
              className="inline-block mt-8 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
            >
              Shop Watches →
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h2 className="text-2xl font-bold">
                Awan Watch Store
              </h2>

              <p className="text-gray-400 mt-4 leading-7">
                Premium watches for every moment.
                Discover a timepiece that matches your
                style and personality.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Quick Links
              </h3>

              <div className="flex flex-col gap-3 mt-4">
                <a
                  href="/"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Home
                </a>

                <a
                  href="/watches"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Watches
                </a>

                <a
                  href="/about"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  About
                </a>

                <a
                  href="/contact"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Contact Us
              </h3>

              <div className="text-gray-400 mt-4 space-y-3">
                <p>📍 Sargodha, Pakistan</p>
                <p>📞 03294201923</p>
                <p>💬 03175704019</p>
                <p>✉️ zohaibawan6986@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 Awan Watch Store. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;