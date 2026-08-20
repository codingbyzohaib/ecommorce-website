import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

function Watches({ addToCart }) {
  const navigate = useNavigate();

  const watches = [
    {
      id: 1,
      name: "Classic Black Watch",
      price: 14999,
      category: "Luxury",
      image:
        "https://kwcwatches.com/cdn/shop/files/7_5d19c99d-7cde-409a-a6cd-6a14e83c5889.webp?v=1780026657&width=832",
      images: [
        "https://kwcwatches.com/cdn/shop/files/5_d56491de-2922-41d1-ace9-914ef4a67712.webp?v=1779827211&width=352",
        "https://kwcwatches.com/cdn/shop/files/BLACK_f4c6f3d8-4a24-451e-9893-9449063bad41.webp?v=1779546915&width=352",
        "https://kwcwatches.com/cdn/shop/files/4_e7ace3d7-0c56-4971-ae2b-b8d5ce709f7e.webp?v=1784819509&width=832",
        "https://kwcwatches.com/cdn/shop/files/BLACK.webp?v=1779527729&width=352",
      ],
    },
    {
      id: 2,
      name: "Elegant Gold Watch",
      price: 19999,
      category: "Premium",
      image:
        "https://kwcwatches.com/cdn/shop/files/mu_2_22075bd6-cf03-461c-85b3-fdfd4b9c3d4d.webp?v=1780015765&width=1200",
      images: [
        "https://kwcwatches.com/cdn/shop/files/2_35db9142-f263-46cd-b73d-470b78ebe06b.webp?v=1779827211&width=1200",
        "https://kwcwatches.com/cdn/shop/files/1_00487a93-9170-4b96-a793-18bfa6284f5c.webp?v=1779827211&width=1200",
        "https://kwcwatches.com/cdn/shop/files/4_abcb7a12-a9b7-4314-853c-f3844914bdc1.webp?v=1779827211&width=1200",
        "https://kwcwatches.com/cdn/shop/files/5_d56491de-2922-41d1-ace9-914ef4a67712.webp?v=1779827211&width=1200",
      ],
    },
    {
      id: 3,
      name: "Modern Silver Watch",
      price: 17999,
      category: "Classic",
      image:
        "https://kwcwatches.com/cdn/shop/files/2_423c766b-bd7f-4588-a869-e5748001b25a.webp?v=1784809005&width=1200",
      images: [
        "https://kwcwatches.com/cdn/shop/files/2_35db9142-f263-46cd-b73d-470b78ebe06b.webp?v=1779827211&width=1200",
        "https://kwcwatches.com/cdn/shop/files/4_abcb7a12-a9b7-4314-853c-f3844914bdc1.webp?v=1779827211&width=1200",
        "https://kwcwatches.com/cdn/shop/files/5_d56491de-2922-41d1-ace9-914ef4a67712.webp?v=1779827211&width=352",
        "https://kwcwatches.com/cdn/shop/files/1_00487a93-9170-4b96-a793-18bfa6284f5c.webp?v=1779827211&width=1200",
      ],
    },
    {
      id: 4,
      name: "Luxury Steel Watch",
      price: 24999,
      category: "Luxury",
      image:
        "https://kwcwatches.com/cdn/shop/files/1_2a319973-95e1-4241-b21a-c83ff2ac6bee.webp?v=1786016817&width=1200",
      images: [
        "https://kwcwatches.com/cdn/shop/files/2_445fbda1-e017-4bb5-a804-b9fe9191851d.webp?v=1786016817&width=1200",
        "https://kwcwatches.com/cdn/shop/files/3_b162f022-eaf7-48b1-904f-26d64452f462.webp?v=1786016817&width=1200",
        "https://kwcwatches.com/cdn/shop/files/2_445fbda1-e017-4bb5-a804-b9fe9191851d.webp?v=1786016817&width=1200",
        "https://kwcwatches.com/cdn/shop/files/3_b162f022-eaf7-48b1-904f-26d64452f462.webp?v=1786016817&width=1200",
      ],
    },
    {
      id: 5,
      name: "Premium Black Watch",
      price: 21999,
      category: "Premium",
      image:
        "https://kwcwatches.com/cdn/shop/files/1_cd3aadc3-b0a4-4e90-9422-6a303d780f21.webp?v=1785769907&width=1200",
      images: [
        "https://kwcwatches.com/cdn/shop/files/4_10c1765c-c152-4d28-b56c-410914353302.webp?v=1785769908&width=1200",
        "https://kwcwatches.com/cdn/shop/files/5_eab14a1a-1bb5-461a-92a4-7000853c4d6d.webp?v=1785769908&width=1200",
        "https://kwcwatches.com/cdn/shop/files/6_c40269d0-0e3a-4c61-ab31-9ee58107389e.webp?v=1785769907&width=1200",
        "https://kwcwatches.com/cdn/shop/files/1_cd3aadc3-b0a4-4e90-9422-6a303d780f21.webp?v=1785769907&width=1200",
      ],
    },
    {
      id: 6,
      name: "Minimalist Watch",
      price: 12999,
      category: "Casual",
      image:
        "https://kwcwatches.com/cdn/shop/files/mu_1_e633d6ee-146c-4083-a507-96729f1943ab.webp?v=1780015936&width=1200",
      images: [
        "https://kwcwatches.com/cdn/shop/files/1_896d18dd-ec4a-45aa-83f2-7a7c8f40b1ea.webp?v=1779852354&width=1200",
        "https://kwcwatches.com/cdn/shop/files/5_c142d291-8731-4c28-a43e-59d67fc4bb68.webp?v=1779852354&width=1200",
        "https://kwcwatches.com/cdn/shop/files/2_131fc4ab-6082-41b3-b449-6e7c65bb683d.webp?v=1779852354&width=1200",
        "https://kwcwatches.com/cdn/shop/files/3_ca0450f3-ec6e-480d-909c-fe27291eca02.webp?v=1779852354&width=1200",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-yellow-500 font-semibold">
            OUR COLLECTION
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Premium Watches
          </h1>

          <p className="text-gray-500 mt-4">
            Explore our collection of stylish and premium watches.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {watches.map((watch) => (
            <ProductCard
              key={watch.id}
              image={watch.image}
              images={watch.images}
              name={watch.name}
              price={watch.price}
              category={watch.category}
              onAddToCart={() => addToCart(watch)}
              onViewDetails={() => navigate(`/product/${watch.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watches;