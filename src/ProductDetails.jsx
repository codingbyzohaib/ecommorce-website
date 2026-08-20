import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);

  const watches = [
    {
      id: 1,
      name: "Classic Black Watch",
      price: 14999,
      category: "Luxury",
      description:
        "A timeless black watch designed for people who appreciate classic style, premium finishing and everyday comfort.",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 2,
      name: "Elegant Gold Watch",
      price: 19999,
      category: "Premium",
      description:
        "An elegant gold watch with a premium appearance that adds a sophisticated touch to both formal and casual outfits.",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 3,
      name: "Modern Silver Watch",
      price: 17999,
      category: "Classic",
      description:
        "A modern silver watch featuring a clean design and versatile look, perfect for everyday wear.",
      image:
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 4,
      name: "Luxury Steel Watch",
      price: 24999,
      category: "Luxury",
      description:
        "A premium steel watch with a bold and luxurious design made for customers who want a strong statement piece.",
      image:
        "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 5,
      name: "Premium Black Watch",
      price: 21999,
      category: "Premium",
      description:
        "A premium black watch with a stylish appearance and comfortable design for everyday and special occasions.",
      image:
        "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 6,
      name: "Minimalist Watch",
      price: 12999,
      category: "Casual",
      description:
        "A minimalist watch with a simple and clean design, perfect for daily use and casual outfits.",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
      ],
    },
  ];

  const product = watches.find((watch) => watch.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            Product Not Found
          </h1>

          <button
            onClick={() => navigate("/watches")}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition"
          >
            Back to Watches
          </button>
        </div>
      </div>
    );
  }

  const currentImage = selectedImage || product.image;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate("/watches")}
          className="mb-8 text-gray-600 hover:text-black transition font-medium"
        >
          ← Back to Watches
        </button>

        <div className="bg-white rounded-3xl shadow-sm p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="grid grid-cols-4 gap-3 mt-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`rounded-xl overflow-hidden border-2 ${
                    currentImage === img
                      ? "border-yellow-400"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-yellow-500 font-semibold uppercase tracking-wide">
              {product.category}
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              {product.name}
            </h1>

            <p className="text-3xl font-bold text-gray-900 mt-6">
              Rs. {product.price.toLocaleString()}
            </p>

            <div className="h-px bg-gray-200 my-7"></div>

            <p className="text-gray-600 leading-7 text-lg">
              {product.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold">
                  🚚 Fast Delivery
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Across Pakistan
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold">
                  🛡️ Quality Guaranteed
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Carefully selected
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold">
                  💵 Cash on Delivery
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Pay when delivered
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold">
                  🔒 Secure Order
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Safe shopping experience
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={handleAddToCart}
                className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition duration-300 shadow-md"
              >
                🛒 Add to Cart
              </button>

              <button
                onClick={() => navigate("/watches")}
                className="w-full bg-black text-yellow-500 border border-yellow-500 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-500 hover:text-black transition duration-300"
              >
                Continue Shopping →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;