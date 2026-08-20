import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-2xl md:text-3xl font-bold tracking-tight"
          >
            Awan<span className="text-yellow-400">Watch</span>Store
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="font-medium hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/watches"
              className="font-medium hover:text-yellow-400 transition duration-300"
            >
              Watches
            </Link>

            <Link
              to="/about"
              className="font-medium hover:text-yellow-400 transition duration-300"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="font-medium hover:text-yellow-400 transition duration-300"
            >
              Contact
            </Link>
          </div>

          <Link
            to="/cart"
            className="hidden md:flex items-center gap-2 bg-yellow-400 text-black px-5 py-2.5 rounded-xl font-bold hover:bg-yellow-300 transition duration-300"
          >
            🛒 Cart

            <span className="bg-black text-yellow-400 min-w-6 h-6 px-1 rounded-full flex items-center justify-center text-sm">
              {cartCount}
            </span>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-yellow-400 text-3xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-5 border-t border-gray-800 pt-5">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="py-2 font-medium hover:text-yellow-400 transition"
              >
                Home
              </Link>

              <Link
                to="/watches"
                onClick={() => setMenuOpen(false)}
                className="py-2 font-medium hover:text-yellow-400 transition"
              >
                Watches
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="py-2 font-medium hover:text-yellow-400 transition"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="py-2 font-medium hover:text-yellow-400 transition"
              >
                Contact
              </Link>

              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="mt-2 bg-yellow-400 text-black px-5 py-3 rounded-xl font-bold text-center hover:bg-yellow-300 transition"
              >
                🛒 Cart ({cartCount})
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;