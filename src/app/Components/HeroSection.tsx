"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FBE28F] text-gray-900 rounded-[32px] mx-auto max-w-7xl mt-28 md:mt-40">
      {/* GRID YAPISI: Sol metin - Sağ görsel */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-12 lg:px-20 py-16 md:py-20">
        
        {/* SOL ALAN (METİN) */}
        <div className="max-w-xl">
          {/* Başlık */}
          <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6 text-gray-900">
            <span className="italic font-extrabold">Level Up</span>{" "}
            with a Curated Mastermind Circle
          </h1>

          {/* Açıklama metni */}
          <p className="text-base md:text-xl text-gray-800 mb-8 leading-relaxed">
            Alliatus connects ambitious people into small, handpicked groups for
            honest feedback, strategy sessions, and real accountability.
          </p>

          {/* Butonlar */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href="#apply"
              className="bg-gray-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition"
            >
              Apply Now
            </Link>
            <Link
              href="#how-it-works"
              className="border border-gray-900 text-gray-900 px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-900 hover:text-white transition"
            >
              Learn How It Works
            </Link>
          </div>

          {/* Üye geri bildirimleri (rating) */}
          <p className="text-sm italic text-gray-700">
            <span className="font-semibold">4.9★ average rating</span>
            <br />
            Feedback from real members across sessions.
          </p>
        </div>

        {/* SAĞ ALAN (GÖRSELLER) */}
        <div className="relative flex justify-center md:justify-end items-center">
          {/* Ana görsel */}
          <div className="relative z-10 overflow-hidden">
            <img src="1.svg" alt="" />
          </div>

          {/* Dekoratif yıldızlar */}
          <div className="absolute z-20 -top-6 -left-4 select-none">
            <img src="Group3.svg" alt="" />
          </div>
          <div className="absolute z-0 -top-6 -left-4 select-none opacity-70">
            <img src="Group2.svg" alt="" />
          </div>

          {/* Baloncuk metinleri */}
          <div className="absolute z-30 top-10 right-2 bg-white text-sm text-gray-800 px-4 py-1.5 rounded-full shadow">
            Fresh insights.
          </div>
          <div className="absolute z-30 bottom-14 right-6 bg-white text-sm text-gray-800 px-4 py-1.5 rounded-full shadow">
            Collective growth.
          </div>
          <div className="absolute z-30 bottom-4 left-8 bg-white text-sm text-gray-800 px-4 py-1.5 rounded-full shadow">
            Real conversations.
          </div>
        </div>
      </div>
    </section>
  );
}
