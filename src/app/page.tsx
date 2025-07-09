
import { Suspense } from "react";

const HomePage = async () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <section className="w-full bg-blue-600 text-white py-24 px-4 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Discover the best deals and hottest products, carefully curated just for you.
        </p>
      </section>

      <section className="w-full mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-3xl font-semibold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition duration-300"
            >
              <div className="h-40 bg-gray-100 rounded-lg mb-4" />
              <h3 className="text-lg font-medium">Product {i + 1}</h3>
              <p className="text-sm text-gray-500">Short description here.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-3xl font-semibold mb-8">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {["Tech", "Fashion", "Home", "Fitness"].map((category, i) => (
            <div
              key={i}
              className="px-6 py-3 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer transition"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <section className="w-full mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-24">
        <h2 className="text-3xl font-semibold mb-8">New Arrivals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition"
            >
              <div className="h-32 bg-gray-100 rounded-lg mb-3" />
              <h4 className="text-md font-semibold">New Product {i + 1}</h4>
              <p className="text-sm text-gray-500">Short description</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    );
};

export default HomePage;
