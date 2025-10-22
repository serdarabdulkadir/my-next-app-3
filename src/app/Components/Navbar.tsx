"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sayfa scroll olunca shadow ekle
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 bg-[#f9f9f9] transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      {/* Üst Navbar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 pt-16 pb-6">
        {/* Logo */}
        <Link href="/" className="text-4xl font-serif font-bold text-gray-800">
          alliatus
        </Link>

        {/* Masaüstü menü */}
        <div className="hidden md:flex items-center font-sans text-[20px] space-x-10">
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "hero")}
            className="text-gray-800 hover:text-gray-600 transition"
          >
            Home
          </a>
          <a
            href="#networking"
            onClick={(e) => handleSmoothScroll(e, "networking")}
            className="text-gray-800 hover:text-gray-600 transition"
          >
            About
          </a>
          <a
            href="#step-by-step"
            onClick={(e) => handleSmoothScroll(e, "step-by-step")}
            className="text-gray-800 hover:text-gray-600 transition"
          >
            How it works
          </a>
          <a
            href="#made-for-people"
            onClick={(e) => handleSmoothScroll(e, "made-for-people")}
            className="text-gray-800 hover:text-gray-600 transition"
          >
            Member stories
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleSmoothScroll(e, "testimonials")}
            className="text-gray-800 hover:text-gray-600 transition"
          >
            Events
          </a>
          <a
            href="#facilitators"
            onClick={(e) => handleSmoothScroll(e, "facilitators")}
            className="border border-gray-700 rounded-xl px-5 py-2 text-gray-800 hover:bg-gray-100 transition"
          >
            Log in
          </a>
        </div>

        {/* Mobil menü butonu */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobil Menü (framer-motion animasyonu) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#f9f9f9] flex flex-col items-start justify-start px-8 pt-10 space-y-8 z-40"
          >
            {/* Kapanma butonu */}
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end mb-4 text-gray-800 hover:text-gray-600 transition"
            >
              <X size={32} />
            </button>

            {/* Menü Linkleri */}
            <div className="flex flex-col text-left space-y-6">
              <a
                href="#hero"
                onClick={(e) => handleSmoothScroll(e, "hero")}
                className="text-3xl font-sans text-gray-800 hover:text-gray-600 transition"
              >
                Home
              </a>
              <a
                href="#networking"
                onClick={(e) => handleSmoothScroll(e, "networking")}
                className="text-3xl font-sans text-gray-800 hover:text-gray-600 transition"
              >
                About
              </a>
              <a
                href="#step-by-step"
                onClick={(e) => handleSmoothScroll(e, "step-by-step")}
                className="text-3xl font-sans text-gray-800 hover:text-gray-600 transition"
              >
                How it works
              </a>
              <a
                href="#made-for-people"
                onClick={(e) => handleSmoothScroll(e, "made-for-people")}
                className="text-3xl font-sans text-gray-800 hover:text-gray-600 transition"
              >
                Member stories
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleSmoothScroll(e, "testimonials")}
                className="text-3xl font-sans text-gray-800 hover:text-gray-600 transition"
              >
                Events
              </a>
              <a
                href="#facilitators"
                onClick={(e) => handleSmoothScroll(e, "facilitators")}
                className="border border-gray-700 rounded-xl px-6 py-3 text-2xl text-gray-800 hover:bg-gray-100 transition"
              >
                Log in
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
