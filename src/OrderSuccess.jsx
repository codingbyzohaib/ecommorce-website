import { Link } from "react-router-dom";

function OrderSuccess({ order }) {
  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl shadow-sm p-10 text-center max-w-md w-full">
          <div className="text-6xl">
            📦
          </div>

          <h1 className="text-3xl font-bold mt-5">
            No Order Found
          </h1>

          <p className="text-gray-500 mt-3">
            Please place an order first.
          </p>

          <Link
            to="/watches"
            className="inline-block mt-7 bg-black text-yellow-400 border border-yellow-500 px-8 py-3 rounded-xl font-bold hover:bg-yellow-500 hover:text-black transition duration-300"
          >
            Browse Watches →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 text-center">
          <div className="mx-auto w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center">
            <span className="text-5xl">
              ✓
            </span>
          </div>

          <p className="text-yellow-500 font-bold tracking-widest mt-7">
            AWAN WATCH STORE
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Order Confirmed!
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Thank you for shopping with Awan Watch Store.
          </p>

          <div className="mt-7 inline-block bg-gray-50 rounded-xl px-6 py-4">
            <p className="text-sm text-gray-500">
              Order Number
            </p>

            <p className="text-xl font-bold mt-1">
              {order.orderNumber}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7">
          <div className="bg-white rounded-2xl shadow-sm p-7">
            <h2 className="text-2xl font-bold mb-6">
              Delivery Details
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400">
                  Name
                </p>

                <p className="font-semibold mt-1">
                  {order.customer.name}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Phone
                </p>

                <p className="font-semibold mt-1">
                  {order.customer.phone}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  City
                </p>

                <p className="font-semibold mt-1">
                  {order.customer.city}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Address
                </p>

                <p className="font-semibold mt-1">
                  {order.customer.address}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-7">
            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">
              {order.products.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between gap-4"
                >
                  <div>
                    <p className="font-semibold">
                      {product.name}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      Quantity: {product.quantity}
                    </p>
                  </div>

                  <p className="font-semibold whitespace-nowrap">
                    Rs.{" "}
                    {(product.price * product.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t mt-6 pt-5 flex justify-between">
              <span className="text-xl font-bold">
                Total
              </span>

              <span className="text-xl font-bold text-yellow-500">
                Rs. {order.total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-black text-white rounded-2xl p-7 mt-7 text-center">
          <h2 className="text-xl font-bold">
            💵 Cash on Delivery
          </h2>

          <p className="text-gray-300 mt-2">
            Please keep the order amount ready when your watch is delivered.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-7">
          <Link
            to="/watches"
            className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold text-center hover:bg-yellow-400 transition duration-300"
          >
            Continue Shopping →
          </Link>

          <Link
            to="/"
            className="w-full bg-black text-yellow-400 border border-yellow-500 py-4 rounded-xl font-bold text-center hover:bg-yellow-500 hover:text-black transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;