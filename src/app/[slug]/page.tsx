"use client";

import { useState } from "react";

const mockProduct = {
  name: "Premium Hoodie",
  description:
    "A stylish and comfortable premium hoodie made from high-quality materials. Perfect for everyday wear with a modern fit.",
  price: 100.0,
  discountedPrice: 79.99,
  colors: ["Black", "Olive Green", "Beige"],
  stock: 12,
  sold: 143,
  media: {
    items: [
      {
        url: "https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        url: "https://images.pexels.com/photos/1510529/pexels-photo-1510529.jpeg",
      },
      {
        url: "https://images.pexels.com/photos/1188748/pexels-photo-1188748.jpeg",
      },
    ],
  },
  additionalInfoSections: [
    {
      title: "Care Instructions",
      description: "Machine wash cold. Do not bleach. Tumble dry low.",
    },
    {
      title: "Materials",
      description: "80% cotton, 20% polyester",
    },
  ],
  reviews: [
    {
      user: "John Doe",
      rating: 5,
      comment: "Absolutely love this hoodie. Super soft and fits perfectly!",
    },
    {
      user: "Jane Smith",
      rating: 4,
      comment:
        "Good quality but the color was slightly different from the photo.",
    },
  ],
};

const SinglePage = () => {
  const product = mockProduct;
  const [mainImage, setMainImage] = useState(product.media.items[0].url);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value: number) => {
    if (value < 1) setQuantity(1);
    else if (value > product.stock) setQuantity(product.stock);
    else setQuantity(value);
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-12 flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden mb-4">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-full object-cover transition duration-300"
          />
        </div>

        <div className="flex gap-4 overflow-x-auto">
          {product.media.items.map((img, index) => (
            <button
              key={index}
              className={`w-28 h-28 border-2 rounded-md overflow-hidden ${
                img.url === mainImage ? "border-black" : "border-gray-200"
              }`}
              onClick={() => setMainImage(img.url)}
            >
              <img
                src={img.url}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-semibold">{product.name}</h1>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <p>
            <span className="font-medium text-black">{product.stock}</span> in
            stock
          </p>
          <p className="border-l pl-4">
            <span className="font-medium text-black">{product.sold}</span> sold
          </p>
        </div>

        <div className="h-[1px] bg-gray-200" />

        {product.price === product.discountedPrice ? (
          <h2 className="text-2xl font-semibold">
            ${product.price.toFixed(2)}
          </h2>
        ) : (
          <div className="flex items-center gap-3">
            <h3 className="text-xl text-gray-400 line-through">
              ${product.price.toFixed(2)}
            </h3>
            <h2 className="text-2xl font-semibold text-red-500">
              ${product.discountedPrice.toFixed(2)}
            </h2>
          </div>
        )}

        <div>
          <span className="text-sm font-medium">Choose Color:</span>
          <div className="flex gap-2 mt-2">
            {product.colors.map((color) => (
              <button
                key={color}
                className={`px-4 py-2 border rounded-full text-sm ${
                  selectedColor === color
                    ? "bg-black text-white border-black"
                    : "text-gray-600 border-gray-300 hover:border-black"
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="quantity" className="text-sm font-medium">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            min={1}
            max={product.stock}
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
            className="w-24 border rounded-md px-3 py-2 text-sm"
          />
          <span className="text-xs text-gray-400">
            Max {product.stock} per purchase
          </span>
        </div>

        <button className="bg-black text-white px-6 py-3 rounded-lg w-max hover:bg-gray-800 transition">
          Add to Cart
        </button>

        <div className="h-[1px] bg-gray-200" />

        {product.additionalInfoSections.map((section) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-medium mb-2">{section.title}</h4>
            <p className="text-gray-600">{section.description}</p>
          </div>
        ))}

        <div className="h-[1px] bg-gray-200" />

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">User Reviews</h2>
          {product.reviews.length > 0 ? (
            <div className="flex flex-col gap-4">
              {product.reviews.map((review, index) => (
                <div key={index} className="border p-4 rounded-lg bg-gray-50">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{review.user}</span>
                    <span className="text-yellow-500 text-sm">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
