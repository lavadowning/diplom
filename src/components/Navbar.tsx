<<<<<<< Updated upstream
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-10 border-b border-gray-200 text-black font-semibold">
      <div className="text-xl">Exclusive</div>
      <ul className="flex space-x-6 text-sm">
=======
"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-10 border-b border-gray-200 text-black font-semibold relative">
      <div className="text-xl">Exclusive</div>

      {/* Строка поиска на больших экранах */}
      <div className="hidden md:block w-1/3">
        <input
          type="text"
          placeholder="Search products..."
          className="text-sm px-4 py-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Десктопное меню */}
      <ul className="hidden md:flex space-x-6 text-sm">
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
        <li>
          <Link href="/wishlist">❤️ Wishlist</Link>
        </li>
        <li>
          <Link href="/cart">🛒 Cart</Link>
        </li>
      </ul>

      {/* Бургер-меню для мобильных устройств */}
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(true)}>
        ☰
      </button>

      {/* Затемнение только на правой стороне */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Меню-шторка справа */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-[300px] bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-4 right-6 text-3xl"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>

        <div className="flex flex-col items-start space-y-6 px-6 py-24">
          {/* Поле поиска в шторке (отодвинуто от крестика) */}
          <input
            type="text"
            placeholder="Search products..."
            className="text-sm px-4 py-2 border border-gray-300 rounded-md w-full"
          />

          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/signup" onClick={() => setIsOpen(false)}>
            Sign Up
          </Link>
          <Link href="/wishlist" onClick={() => setIsOpen(false)}>
            ❤️ Wishlist
          </Link>
          <Link href="/cart" onClick={() => setIsOpen(false)}>
            🛒 Cart
          </Link>
        </div>
>>>>>>> Stashed changes
      </div>
    </nav>
  );
};

export default Navbar;
