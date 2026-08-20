import { Link } from "react-router-dom";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  const total = cart.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  const totalItems = cart.reduce((sum, product) => {
    return sum + product.quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-yellow-500 font-bold tracking-widest">
            AWAN WATCH STORE
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
            Shopping Cart
          </h1>

          <p className="text-gray-500 mt-3">
            Review your selected watches before checkout.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-sm p-12 text-center border border-gray-100">
            <div className="text-7xl">🛒</div>

            <h2 className="text-2xl font-bold mt-6 text-gray-900">
              Your Cart Is Empty
            </h2>

            <p className="text-gray-500 mt-3">
              You haven't added any watches to your cart yet.
            </p>

            <Link
              to="/watches"
              className="inline-block mt-7 bg-black text-yellow-400 px-8 py-3 rounded-xl font-bold border border-yellow-500 hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              Browse Watches
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-yellow-400 transition duration-300"
                >
                  <div className="flex flex-col sm:flex-row gap-5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full sm:w-32 h-32 object-cover rounded-xl"
                    />

                    <div className="flex-1">
                      <p className="text-sm text-yellow-500 font-semibold">
                        {product.category}
                      </p>

                      <h2 className="text-xl font-bold mt-1 text-gray-900">
                        {product.name}
                      </h2>

                      <p className="text-gray-500 mt-2">
                        Rs. {product.price.toLocaleString()}
                      </p>

                      <div className="flex items-center gap-3 mt-5">
                        <span className="text-sm font-semibold">
                          Quantity:
                        </span>

                        <button
                          onClick={() =>
                            decreaseQuantity(product.id)
                          }
                          className="w-9 h-9 bg-gray-100 rounded-lg font-bold hover:bg-yellow-400 hover:text-black transition"
                        >
                          −
                        </button>

                        <span className="w-8 text-center font-bold">
                          {product.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(product.id)
                          }
                          className="w-9 h-9 bg-black text-yellow-400 rounded-lg font-bold hover:bg-yellow-400 hover:text-black transition"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="sm:text-right flex sm:block items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">
                          Subtotal
                        </p>

                        <p className="text-xl font-bold mt-1 text-gray-900">
                          Rs.{" "}
                          {(
                            product.price * product.quantity
                          ).toLocaleString()}
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          removeFromCart(product.id)
                        }
                        className="text-red-500 text-sm mt-3 hover:text-red-700 transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <Link
                to="/watches"
                className="inline-block text-gray-600 font-semibold hover:text-yellow-500 transition"
              >
                ← Continue Shopping
              </Link>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-sm p-7 sticky top-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">
                  Order Summary
                </h2>

                <div className="border-t mt-6 pt-5 space-y-4">
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

                    <span className="font-semibold text-green-600">
                      Free
                    </span>
                  </div>

                  <div className="border-t pt-5 flex justify-between">
                    <span className="text-xl font-bold">
                      Total
                    </span>

                    <span className="text-xl font-bold text-gray-900">
                      Rs. {total.toLocaleString()}
                    </span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="block w-full mt-7 bg-yellow-500 text-black py-4 rounded-xl font-bold text-center hover:bg-yellow-400 transition duration-300 shadow-md"
                >
                  Proceed to Checkout →
                </Link>

                <p className="text-center text-gray-400 text-sm mt-4">
                  Secure checkout • Cash on Delivery
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;