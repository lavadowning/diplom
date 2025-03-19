import ProductCard from "../components/ProductCard";
import products from "../data/products";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-6">
<<<<<<< Updated upstream
        <h1 className="text-3xl text-red-100 font-bold mb-6">
=======
        <h1 className="text-3xl text-red-300 font-bold mb-6">
>>>>>>> Stashed changes
          Electronics Store
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}
