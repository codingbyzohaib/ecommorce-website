function About() {
  return (
    <div className="bg-white text-gray-900">
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-yellow-400 font-bold tracking-[4px] uppercase">
            AWAN WATCH STORE
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-5">
            Time. Style.{" "}
            <span className="text-yellow-400">
              Confidence.
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg leading-8">
            Discover stylish and premium watches designed for
            people who value quality, confidence and timeless style.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-yellow-500 font-bold tracking-widest">
                OUR STORY
              </p>

              <h2 className="text-4xl font-bold mt-3 leading-tight">
                More Than Just A Watch
              </h2>

              <p className="text-gray-600 mt-6 leading-8">
                Awan Watch Store was created with a simple idea:
                everyone deserves a watch that looks great, feels
                reliable and matches their personality.
              </p>

              <p className="text-gray-600 mt-4 leading-8">
                From classic designs to modern timepieces, we
                carefully select watches that combine style,
                quality and everyday functionality.
              </p>

              <p className="text-gray-600 mt-4 leading-8">
                Our goal is to provide stylish watches with a
                simple and reliable shopping experience across Pakistan.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <img
                  src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=85"
                  alt="Awan Watch Store Premium Watch"
                  className="w-full h-[480px] object-cover rounded-3xl border border-gray-200 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-yellow-500 font-bold tracking-widest">
              OUR VALUES
            </p>

            <h2 className="text-4xl font-bold mt-3">
              What We Stand For
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Quality, style and trust are the foundation of
              Awan Watch Store.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-100 flex items-center justify-center text-3xl">
                ⌚
              </div>

              <h3 className="text-xl font-bold mt-5">
                Quality
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                We focus on watches that offer excellent quality
                and lasting value.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-100 flex items-center justify-center text-3xl">
                ✨
              </div>

              <h3 className="text-xl font-bold mt-5">
                Style
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                Classic and modern designs for different styles
                and occasions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-100 flex items-center justify-center text-3xl">
                🤝
              </div>

              <h3 className="text-xl font-bold mt-5">
                Trust
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                Customer satisfaction and reliable service
                are our priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-yellow-400">
                500+
              </h3>

              <p className="text-gray-400 mt-2">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">
                50+
              </h3>

              <p className="text-gray-400 mt-2">
                Watch Designs
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">
                100%
              </h3>

              <p className="text-gray-400 mt-2">
                Customer Focus
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-yellow-500 font-bold tracking-widest">
            AWAN WATCH STORE
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Find Your Perfect Watch
          </h2>

          <p className="text-gray-500 mt-4 leading-7">
            Explore our collection and discover a timepiece
            that matches your style and personality.
          </p>

          <a
            href="/watches"
            className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 hover:text-black transition"
          >
            Explore Watches →
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;