"use client";
import Image from "next/image";
import { useState } from "react";
// const images = [
//   {
//     id: 1,
//     url: "https://images.pexels.com/photos/31978812/pexels-photo-31978812.jpeg",
//   },
//   {
//     id: 2,
//     url: "https://images.pexels.com/photos/8791512/pexels-photo-8791512.jpeg",
//   },
//   {
//     id: 3,
//     url: "https://images.pexels.com/photos/30433355/pexels-photo-30433355.jpeg",
//   },
//   {
//     id: 4,
//     url: "https://images.pexels.com/photos/30918864/pexels-photo-30918864.jpeg",
//   },
// ];
const ProductImages = ({items}: {items: any}) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          className="object-cover rounded-md"
          sizes="50vw"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item:any, i:number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              className="object-cover rounded-md"
              sizes="30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
