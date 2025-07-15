"use client";

import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          natus numquam voluptatibus quo voluptatem odio itaque. Temporibus
          distinctio inventore corporis magni neque dolores! Magni, earum!
          Accusantium cumque ab quisquam eum.
        </p>
        <div className="h-[2px] w-full bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">Rp. 20.000 </h3>
          <h2 className="font-medium text-2xl">Rp. 10.000 </h2>
        </div>
        <div className="h-[2px] w-full bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] w-full bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis at ducimus magnam repellat illo ratione aliquam dolores
            doloremque ipsa ipsam minima accusamus quod, necessitatibus quam
            deserunt libero repudiandae non exercitationem!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis at ducimus magnam repellat illo ratione aliquam dolores
            doloremque ipsa ipsam minima accusamus quod, necessitatibus quam
            deserunt libero repudiandae non exercitationem!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis at ducimus magnam repellat illo ratione aliquam dolores
            doloremque ipsa ipsam minima accusamus quod, necessitatibus quam
            deserunt libero repudiandae non exercitationem!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
