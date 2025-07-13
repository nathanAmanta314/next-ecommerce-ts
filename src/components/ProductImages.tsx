import Image from "next/image";


const ProductImages = () => {
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={
            "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800 "
          }
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div>
        <div className="w-1/4 h-32 relative gap4 mt-8">
          {" "}
          <Image
            src={
              "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800 "
            }
            alt=""
            fill
            sizes="30vw"
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
