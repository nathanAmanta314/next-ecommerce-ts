"use client";

import Image from "next/image";

const CartModal = () => {
  const carItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-2xl bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!carItems ? (
        <div className=""> Cart is Empty </div>
      ) : (
        <>
        <h2 className='text-xl'>Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Image
                src={
                  "https://www.pexels.com/id-id/foto/close-up-anjing-gembala-australia-di-luar-ruangan-32854661/"
                }
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                <div>
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">Rp 20.000 </div>
                  </div>
                  <div className="text-sm text-gray-500">Lorem.</div>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="text-gray-500">jml. 2</div>
                  <span className="text-blue-6\500">hapus</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src={
                  "https://www.pexels.com/id-id/foto/close-up-anjing-gembala-australia-di-luar-ruangan-32854661/"
                }
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                <div>
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">Rp 20.000 </div>
                  </div>
                  <div className="text-sm text-gray-500">Lorem.</div>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="text-gray-500">jml. 2</div>
                  <span className="text-blue-6\500">hapus</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">Rp. 40.000</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Lorem ipsum dolor sit amet consectetur,
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
