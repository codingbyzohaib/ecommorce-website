import { Link } from "react-router-dom";

function Home() {
  const featuredWatches = [
    {
      id: 1,
      name: "Classic Black Watch",
      price: 14999,
      image:
        "https://kwcwatches.com/cdn/shop/files/mu_1_e633d6ee-146c-4083-a507-96729f1943ab.webp?v=1780015936&width=1200",
    },
    {
      id: 2,
      name: "Elegant Gold Watch",
      price: 19999,
      image:
        "https://kwcwatches.com/cdn/shop/files/3_cfc3bbd0-c92d-40df-b16d-b44d7259921d.webp?v=1786435400&width=1200",
    },
    {
      id: 3,
      name: "Modern Silver Watch",
      price: 17999,
      image:
        "https://kwcwatches.com/cdn/shop/files/1_e4df86fd-fc36-497f-af74-e034b9d95d54.webp?v=1786014838&width=1200",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <section className="bg-black text-white min-h-[680px] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-yellow-400 font-bold tracking-[4px] uppercase">
                AWAN WATCH STORE
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-5">
                Time That
                <span className="text-yellow-400">
                  {" "}Defines You.
                </span>
              </h1>

              <p className="text-gray-300 text-lg leading-8 mt-6 max-w-xl">
                Discover stylish and premium watches designed
                for confidence, elegance and everyday life.
                Find the perfect timepiece for your style.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">
                <Link
                  to="/watches"
                  className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 hover:scale-105 transition duration-300 shadow-lg"
                >
                  Shop Watches →
                </Link>

                <Link
                  to="/about"
                  className="border border-gray-600 px-8 py-4 rounded-xl font-semibold hover:border-yellow-400 hover:text-yellow-400 transition duration-300"
                >
                  About Us
                </Link>
              </div>

              <div className="flex flex-wrap gap-10 mt-12">
                <div>
                  <p className="text-2xl font-bold">
                    Premium
                  </p>

                  <p className="text-gray-400 text-sm mt-1">
                    Watch Collection
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold">
                    COD
                  </p>

                  <p className="text-gray-400 text-sm mt-1">
                    Available
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold">
                    Pakistan
                  </p>

                  <p className="text-gray-400 text-sm mt-1">
                    Delivery
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85"
                alt="Premium Watch"
                className="w-full h-[520px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 flex items-center gap-5 border border-gray-100">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-yellow-100 flex items-center justify-center text-2xl">
                🚚
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Fast Delivery
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Delivery available across Pakistan.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 flex items-center gap-5 border border-gray-100">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-yellow-100 flex items-center justify-center text-2xl">
                🛡️
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Quality Guaranteed
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Carefully selected quality watches.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 flex items-center gap-5 border border-gray-100">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-yellow-100 flex items-center justify-center text-2xl">
                💵
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Cash on Delivery
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Pay when your order arrives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-12">
            <div>
              <p className="text-yellow-500 font-bold tracking-widest">
                OUR COLLECTION
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-3">
                Featured Watches
              </h2>

              <p className="text-gray-500 mt-3">
                Explore some of our popular timepieces.
              </p>
            </div>

            <Link
              to="/watches"
              className="font-bold text-gray-700 hover:text-yellow-500 transition"
            >
              View All Watches →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWatches.map((watch) => (
              <div
                key={watch.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="overflow-hidden bg-gray-100">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm text-yellow-500 font-bold uppercase tracking-wide">
                    Premium Watch
                  </p>

                  <h3 className="text-xl font-bold mt-2">
                    {watch.name}
                  </h3>

                  <div className="flex justify-between items-center mt-5">
                    <p className="text-xl font-bold">
                      Rs. {watch.price.toLocaleString()}
                    </p>

                    <Link
                      to={`/product/${watch.id}`}
                      className="bg-black text-yellow-400 px-5 py-2.5 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition duration-300"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-black text-white rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <p className="text-yellow-400 font-bold tracking-widest">
                  AWAN WATCH STORE
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mt-4">
                  Your Style.
                  <br />
                  <span className="text-yellow-400">
                    Your Time.
                  </span>
                </h2>

                <p className="text-gray-400 mt-5 leading-7 max-w-lg">
                  A watch is more than just time. It is a
                  reflection of your personality, confidence
                  and style.
                </p>

                <Link
                  to="/watches"
                  className="w-fit mt-8 bg-yellow-400 text-black px-7 py-3 rounded-xl font-bold hover:bg-yellow-300 transition duration-300"
                >
                  Explore Watches →
                </Link>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1000&q=85"
                  alt="Awan Watch Store Collection"
                  className="w-full h-full min-h-[350px] object-cover"
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
              AWAN WATCH STORE
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Why Shop With Us?
            </h2>

            <p className="text-gray-500 mt-4">
              Simple shopping, quality watches and reliable service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-yellow-100 flex items-center justify-center text-3xl">
                ⌚
              </div>

              <h3 className="text-xl font-bold mt-5">
                Stylish Watches
              </h3>

              <p className="text-gray-500 mt-3 leading-6">
                Modern and elegant watches selected for
                different styles and occasions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-yellow-100 flex items-center justify-center text-3xl">
                📦
              </div>

              <h3 className="text-xl font-bold mt-5">
                Easy Ordering
              </h3>

              <p className="text-gray-500 mt-3 leading-6">
                Choose your favorite watch and order it
                easily through our website.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-yellow-100 flex items-center justify-center text-3xl">
                💬
              </div>

              <h3 className="text-xl font-bold mt-5">
                Customer Support
              </h3>

              <p className="text-gray-500 mt-3 leading-6">
                Have a question? Contact us and we will
                be happy to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-yellow-400 rounded-3xl p-10 md:p-14 text-center">
            <p className="font-bold tracking-widest">
              NEED HELP?
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Have Questions About Our Watches?
            </h2>

            <p className="text-gray-800 mt-4 max-w-2xl mx-auto">
              Contact Awan Watch Store for product information,
              orders or any other questions.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                to="/contact"
                className="bg-black text-yellow-400 px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition"
              >
                Contact Us →
              </Link>

              <a
                href="tel:03294201923"
                className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
              >
                📞 Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-bold">
                Awan
                <span className="text-yellow-400">
                  Watch
                </span>
                Store
              </h2>

              <p className="text-gray-400 mt-4 leading-7">
                Premium watches for every moment.
                Discover a timepiece that matches your
                style and personality.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Quick Links
              </h3>

              <div className="flex flex-col gap-3 mt-5">
                <Link
                  to="/"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Home
                </Link>

                <Link
                  to="/watches"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Watches
                </Link>

                <Link
                  to="/about"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  About Us
                </Link>

                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Contact Us
              </h3>

              <div className="text-gray-400 mt-5 space-y-3">
                <p>📍 Sargodha, Pakistan</p>
                <p>📞 03294201923</p>
                <p>📞 03175704019</p>
                <p>✉️ zohaibawan6986@gmail.com</p>
                <p>📷 @z0haib_malik_09</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 Awan Watch Store. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;