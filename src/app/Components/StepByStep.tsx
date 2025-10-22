"use client";

import Image from "next/image";
import React from "react";

/**
 * StepByStep bölümü — görselle birebir uyumlu düzen
 * - Görseller public/ içine: stars-group.svg, star-black.svg, step-image.jpg
 * - Tüm yorumlar Türkçe
 */

export default function StepByStep() {
  return (
    <section className="bg-[#FAFAFA] py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Başlık alanı */}
        <div className="mb-10">
          <p className="text-[12px] uppercase tracking-[0.15em] text-gray-500 mb-3">
            HOW IT WORKS
          </p>

          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] w-2xl leading-tight font-serif font-medium text-[#1C1C1C]">
            From Application to
            <br />
            Transformation —{" "}
            <span className="italic font-semibold">Step by Step</span>
          </h2>
        </div>

        {/* Yıldız grup görselleri (absolute, tasarıma göre konumlandırıldı) */}
        <div className="absolute top-8 right-8 pointer-events-none z-10">
          {/* Üçlü yıldız görseli (üst sağta büyük grup) */}
          <Image
            src="/Group5.svg"
            alt="decorative stars group"
            width={320}
            height={320}
            className="object-contain"
            priority
          />
        </div>

        {/* İçerik ızgarası: 3 sütun (masaüstü) */}
        <div className="grid md:grid-cols-3 gap-6 mt-8 items-start">
          {/* 01 - Sarı kutu (solda, 1. satır) */}
          <div className="rounded-[20px] bg-[#FBE28F] p-8 md:col-span-1">
            {/* Numara ve küçük başlık */}
            <div className="flex items-baseline gap-4 mb-3">
              <div className="text-[38px] font-serif italic font-semibold text-[#1C1C1C] leading-none">
                01
              </div>
              <div className="text-[11px] uppercase tracking-wide text-gray-700 font-medium mt-1">
                Apply Online
              </div>
            </div>

            {/* Açıklama */}
            <p className="text-[15px] text-[#1C1C1C] leading-relaxed">
              Tell us about your goals, background, and what kind of support
              you’re seeking.
            </p>
          </div>

          {/* 02 - Beyaz kutu (orta üst) */}
          <div className="rounded-[20px] bg-white border border-[#DADADA] p-8 md:col-span-1">
            <div className="flex items-baseline gap-4 mb-3">
              <div className="text-[38px] font-serif italic font-semibold text-[#1C1C1C] leading-none">
                02
              </div>
              <div className="text-[11px] uppercase tracking-wide text-gray-600 font-medium mt-1">
                Get Matched
              </div>
            </div>

            <p className="text-[15px] text-[#1C1C1C] leading-relaxed">
              We carefully place you in a mastermind circle of 5–6 aligned
              members.
            </p>
          </div>

          {/* SAĞ ÜST için boşluk (yıldız görseli absolute olduğu için burada boş bırakıyoruz) */}
          <div className="md:col-span-1" />

          {/* Sol alt: büyük görsel (kadın-laptop) */}
          <div className="rounded-[20px] overflow-hidden md:col-span-1">
            <Image
              src="/3.svg"
              alt="participant on a video call"
              width={800}
              height={900}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* 03 - orta alt */}
          <div className="rounded-[20px] bg-white border border-[#DADADA] p-8 md:col-span-1">
            <div className="flex items-baseline gap-4 mb-3">
              <div className="text-[38px] font-serif italic font-semibold text-[#1C1C1C] leading-none">
                03
              </div>
              <div className="text-[11px] uppercase tracking-wide text-gray-600 font-medium mt-1">
                Join Bi-Weekly Sessions
              </div>
            </div>

            <p className="text-[15px] text-[#1C1C1C] leading-relaxed">
              Meet over Zoom for structured, focused conversations led by a
              trained host.
            </p>
          </div>

          {/* 04 - sağ alt */}
          <div className="rounded-[20px] bg-white border border-[#DADADA] p-8 md:col-span-1">
            <div className="flex items-baseline gap-4 mb-3">
              <div className="text-[38px] font-serif italic font-semibold text-[#1C1C1C] leading-none">
                04
              </div>
              <div className="text-[11px] uppercase tracking-wide text-gray-600 font-medium mt-1">
                Grow with Accountability
              </div>
            </div>

            <p className="text-[15px] text-[#1C1C1C] leading-relaxed">
              Set goals, stay on track, and get continuous feedback from your
              circle.
            </p>
          </div>

          {/* What's included — tüm sütunları kapsayan kart */}
          <div className="md:col-span-3 rounded-[20px] bg-white p-8 border border-[#EAEAEA] mt-2">
            <p className="text-[11px] uppercase tracking-wide text-gray-600 font-medium mb-3">
              What’s Included
            </p>
            <p className="text-[15px] text-[#2E2E2E] leading-relaxed">
              Private online community • Goal-tracking and reflection tools •
              Access to session recordings (optional for privacy) • Session prep
              templates & prompts • Library of expert resources
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
