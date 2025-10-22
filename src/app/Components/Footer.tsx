"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2E2E2E] text-gray-100 rounded-[32px] py-16 px-6 md:px-12 lg:px-20 mt-24 mb-0 md:mb-24 mx-4 md:mx-12 lg:mx-44">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        
        {/* Sol taraf */}
        <div className="flex flex-col justify-between h-full">
          {/* Logo */}
          <h3 className="text-[28px] md:text-[32px] font-semibold text-white mb-8 md:mb-10">
            alliatus
          </h3>

          {/* Navigasyon Linkleri */}
          <div className="grid grid-cols-2 gap-8 md:gap-10 text-[14px] md:text-[15px] text-gray-300 font-sans">
            <div className="space-y-2">
              <a href="#" className="block hover:text-white transition">Home</a>
              <a href="#" className="block hover:text-white transition">About</a>
              <a href="#" className="block hover:text-white transition">How It Works</a>
              <a href="#" className="block hover:text-white transition">Member Stories</a>
              <a href="#" className="block hover:text-white transition">Events</a>
            </div>

            <div className="space-y-2">
              <a href="#" className="block hover:text-white transition">FAQ</a>
              <a href="#" className="block hover:text-white transition">Contact</a>
              <a href="#" className="block hover:text-white transition">Privacy Policy</a>
              <a href="#" className="block hover:text-white transition">Terms of Service</a>
            </div>
          </div>

          {/* Sosyal Medya İkonları */}
          <div className="flex space-x-5 mt-10">
            <a href="#" className="hover:opacity-80 transition">
              <Image src="/Facebook.svg" alt="Facebook" width={22} height={22} className="md:w-6 md:h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Image src="/Linkedin1.svg" alt="LinkedIn" width={22} height={22} className="md:w-6 md:h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Image src="/Twitter.svg" alt="Twitter" width={22} height={22} className="md:w-6 md:h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Image src="/İnstagram.svg" alt="Instagram" width={22} height={22} className="md:w-6 md:h-6" />
            </a>
          </div>

          {/* Alt bilgi */}
          <div className="pt-10 text-[12px] md:text-[13px] text-gray-400 leading-relaxed font-sans">
            <p>© 2025 Alliatus. All rights reserved.</p>
            <p>Powered by connection, clarity, and community.</p>
          </div>
        </div>

        {/* Sağ taraf (Sarı kutu) */}
        <div className="bg-[#F8E08E] text-[#1C1C1C] rounded-[20px] p-8 md:p-10 lg:p-12 relative overflow-hidden shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="text-[26px] md:text-[32px] lg:text-[34px] font-serif font-normal leading-tight text-[#1C1C1C]">
              Let’s Get <span className="italic font-semibold">Started!</span>
            </h4>

            <p className="mt-5 text-[15px] md:text-[16px] leading-relaxed text-[#1C1C1C] max-w-md">
              Join a supportive circle of minds and start growing with intention.
            </p>

            <p className="mt-4 text-[15px] md:text-[16px] text-[#1C1C1C] max-w-md">
              There’s a seat at the table waiting for you.
            </p>

            <button className="mt-7 md:mt-8 bg-[#2E2E2E] text-white px-6 md:px-8 py-3.5 rounded-[10px] text-[15px] md:text-[16px] font-medium hover:bg-[#1C1C1C] transition duration-300 shadow-[0_2px_0_rgba(0,0,0,0.1)]">
              Join Alliatus
            </button>
          </div>

          {/* Dekoratif yıldız grubu */}
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-[80px] md:w-[120px] lg:w-[140px]">
            <img src="/Group10.svg" alt="Stars" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
}
