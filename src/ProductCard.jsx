import { useState } from "react";

function ProductCard({
  image,
  images,
  name,
  price,
  category,
  onAddToCart,
  onViewDetails,
}) {
  const [mainImage, setMainImage] = useState(image);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={mainImage}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-2 rounded-full shadow-sm">
            {category}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 px-4 pt-4">
        {images?.map((img, index) => (
          <button
            key={index}
            onClick={() => setMainImage(img)}
            className={`overflow-hidden rounded-lg border-2 transition duration-200 ${
              mainImage === img
                ? "border-yellow-400"
                : "border-gray-100 hover:border-yellow-300"
            }`}
          >
            <img
              src={img}
              alt={`${name} ${index + 1}`}
              className="w-full h-14 object-cover"
            />
          </button>
        ))}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900">
          {name}
        </h3>

        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">
              Price
            </p>

            <p className="text-xl font-bold text-gray-900 mt-1">
              Rs. {Number(price).toLocaleString()}
            </p>
          </div>

          <button
            onClick={onAddToCart}
            className="bg-black text-white px-4 py-2.5 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            Add to Cart
          </button>
        </div>

        <button
          onClick={onViewDetails}
          className="mt-4 w-full py-3 rounded-xl border-2 border-gray-900 bg-white text-gray-900 font-bold hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all duration-300"
        >
          View Details
          <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;