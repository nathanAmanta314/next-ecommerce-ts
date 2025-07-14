import Image from "next/image";

type Props = {
  items: string[];
};

const ProductImages = ({ items }: Props) => {
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={items[0]}
          alt="Main Image"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex gap-4 mt-8">
        {items.slice(1).map((img, i) => (
          <div key={i} className="w-1/4 h-32 relative">
            <Image
              src={img}
              alt={`Thumbnail ${i + 1}`}
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
