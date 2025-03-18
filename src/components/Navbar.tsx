import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-10 border-b border-gray-200 text-black font-semibold">
      <div className="text-xl">Exclusive</div>
      <ul className="flex space-x-6 text-sm">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/signup">Sign Up</Link>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="text-sm px-4 py-2 border border-gray-300 rounded-md"
          />
          <span className="absolute right-3 top-2.5 text-gray-500 text-lg">
            🔍
          </span>
        </div>
        <button className="text-xl">❤️</button>
        <button className="text-xl">🛒</button>
      </div>
    </nav>
  );
};

export default Navbar;
