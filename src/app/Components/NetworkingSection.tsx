"use client";

import Image from "next/image";
import React from "react";

export default function NetworkingSection() {
  return (
    <section className="bg-[#f4f4f4] py-24 px-6 md:px-12 lg:px-24 text-gray-900">
      {/* ÜST BAŞLIK ALANI */}
      <div className="justify-center text-center mb-16">
        <p className="uppercase tracking-[0.15em] text-[12px] text-gray-500 mb-4">
          What is Alliatus?
        </p>

        <h3 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6 text-gray-900">
          <span className="italic font-semibold">Not</span> Your Typical
          <br />
          Networking Group.
        </h3>
      </div>

      {/* ANA İÇERİK ALANI */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* SOL GÖRSEL ALANI */}
        <div className="relative">
          {/* Görsel (Next.js Image kullanımı ile optimizasyon) */}
          <div className="rounded-[24px] overflow-hidden">
            <Image
              src="/2.svg"
              alt="Networking visual"
              width={600}
              height={500}
              className="object-cover"
              priority
            />
          </div>

          {/* Dekoratif yıldız (alt sol köşe) */}
          <div className="absolute bottom-10 left-10 select-none">
            <img src="Group4.svg" alt="" />
          </div>
        </div>

        {/* SAĞ METİN BLOĞU */}
        <div className="justify-center font-sans font-light">
          {/* Açıklama paragrafı */}
          <p className="text-[17px] text-gray-700 leading-relaxed mb-12 max-w-lg">
            Alliatus is a curated mastermind platform that brings together
            motivated individuals in small groups for deep conversation, honest
            feedback, and collective accountability.
          </p>

          {/* 3 BİLGİ KARTI */}
          <div className="space-y-4">
            {/* Kart 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-sm hover:shadow-md transition">
              <h3 className="text-[11px] tracking-wide font-medium uppercase mb-1 text-[#303030]">
                Small, Handpicked Circles
              </h3>
              <p className="text-[15px] text-gray-700 leading-relaxed">
                You’re matched with 5–6 people who are aligned with your stage,
                goals, and mindset.
              </p>
            </div>

            {/* Kart 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-sm hover:shadow-md transition">
              <h3 className="text-[11px] tracking-wide font-medium uppercase mb-1 text-[#1c1c1c]">
                Real Conversations
              </h3>
              <p className="text-[15px] text-gray-700 leading-relaxed">
                No fluff. Get feedback, ask for help, and brainstorm challenges
                in structured calls.
              </p>
            </div>

            {/* Kart 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-sm hover:shadow-md transition">
              <h3 className="text-[11px] tracking-wide font-medium uppercase mb-1 text-[#1c1c1c]">
                Consistent Growth
              </h3>
              <p className="text-[15px] text-gray-700 leading-relaxed">
                Ongoing sessions to help you stay accountable, make bold moves,
                and reach goals faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
