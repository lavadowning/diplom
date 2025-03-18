import Image from "next/image";

interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
}

export default function ProductCard({
  image,
  name,
  category,
  price,
  rating,
  reviews,
}: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="rounded"
        />
      </div>

      <p className="text-sm text-gray-500 mt-2">{category}</p>

      <h2 className="text-lg font-semibold mt-1">{name}</h2>

      <p className="text-xl font-bold text-red-500">${price}</p>

      <div className="flex items-center mt-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`text-yellow-400 ${
              index < Math.floor(rating) ? "fas fa-star" : "far fa-star"
            }`}
          >
            ★
          </span>
        ))}
        <span className="text-gray-600 text-sm ml-2">({reviews})</span>
      </div>

      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
        Buy Now
      </button>
    </div>
  );
}
