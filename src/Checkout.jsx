import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart, placeOrder }) {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
  });

  const [error, setError] = useState("");

  const total = cart.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  const totalItems = cart.reduce((sum, product) => {
    return sum + product.quantity;
  }, 0);

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !customer.name.trim() ||
      !customer.phone.trim() ||
      !customer.city.trim() ||
      !customer.address.trim()
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (customer.phone.length < 11) {
      setError("Please enter a valid phone number.");
      return;
    }

    placeOrder(customer);
    navigate("/order-success");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-10 text-center max-w-md w-full">
          <div className="w-20 h-20 mx-auto rounded-full bg-yellow-100 flex items-center justify-center text-4xl">
            🛒
          </div>

          <h1 className="text-3xl font-bold mt-6">
            Your Cart Is Empty
          </h1>

          <p className="text-gray-500 mt-3 leading-6">
            Add some watches to your cart before proceeding
            to checkout.
          </p>

          <button
            onClick={() => navigate("/watches")}
            className="w-full mt-7 bg-black text-yellow-400 border border-yellow-400 py-3.5 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            Browse Watches →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-yellow-500 font-bold tracking-[3px] uppercase">
            Awan Watch Store
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Checkout
          </h1>

          <p className="text-gray-500 mt-3">
            Enter your delivery details to complete your order.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-7 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-2xl">
                  📦
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    Delivery Information
                  </h2>

                  <p className="text-gray-500 text-sm mt-1">
                    Where should we deliver your watch?
                  </p>
                </div>
              </div>

              {error && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-5 py-4 rounded-xl text-sm font-medium">
                  {error}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={customer.phone}
                    onChange={handleChange}
                    placeholder="03XXXXXXXXX"
                    maxLength="11"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    City *
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={customer.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Complete Address *
                  </label>

                  <textarea
                    name="address"
                    value={customer.address}
                    onChange={handleChange}
                    placeholder="House number, street, area, landmark..."
                    rows="5"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-10 pt-8">
                <h2 className="text-2xl font-bold">
                  Payment Method
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Select your preferred payment method.
                </p>

                <div className="mt-5 border-2 border-yellow-400 bg-yellow-50 rounded-2xl p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center text-2xl">
                      💵
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-lg">
                        Cash on Delivery
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        Pay when your order arrives at your doorstep.
                      </p>
                    </div>

                    <div className="w-5 h-5 rounded-full bg-yellow-500 border-4 border-white shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-7 sticky top-6">
              <h2 className="text-2xl font-bold">
                Order Summary
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                {totalItems} item{totalItems > 1 ? "s" : ""} in your order
              </p>

              <div className="mt-7 space-y-5">
                {cart.map((product) => (
                  <div
                    key={product.id}
                    className="flex gap-4"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-xl border border-gray-100"
                    />

                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold truncate">
                        {product.name}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Quantity: {product.quantity}
                      </p>

                      <p className="text-yellow-500 font-bold mt-1">
                        Rs.{" "}
                        {(
                          product.price * product.quantity
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 mt-7 pt-5 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Items
                  </span>

                  <span className="font-semibold">
                    {totalItems}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Delivery
                  </span>

                  <span className="text-green-600 font-semibold">
                    Free
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-5 flex justify-between items-center">
                  <span className="text-xl font-bold">
                    Total
                  </span>

                  <span className="text-xl font-bold">
                    Rs. {total.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-7 bg-black text-yellow-400 border border-black py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition duration-300"
              >
                Place Order →
              </button>

              <p className="text-center text-gray-400 text-sm mt-4">
                🔒 Secure Order • Cash on Delivery
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;