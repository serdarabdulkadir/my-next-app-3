"use client";

import Image from "next/image";

export default function MadeForPeople() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-12 py-24 text-center">
      {/* ÜST BAŞLIK */}
      <p className="uppercase tracking-[0.15em] text-gray-500 text-[12px] mb-5">
        Who It’s For
      </p>

      <h2 className="text-[46px] md:text-[64px] leading-tight font-serif font-medium mb-16 text-gray-900">
        Made for People <span className="italic font-semibold">Like You</span>
      </h2>

      {/* İKİLİ KART GRID */}
      <div className="grid md:grid-cols-2 gap-10 text-left">
        {/* SOL KART */}
        <div className="bg-[#FFDD81] rounded-3xl p-10 flex flex-col justify-between border border-yellow-300">
          {/* Başlık */}
          <h3 className="text-2xl md:text-3xl font-serif text-[#303030] mb-8">
            This <span className="italic font-semibold">Is for You</span> If...
          </h3>

          {/* Madde Listesi */}
          <ul className="space-y-4">
            {[
              "You’re an entrepreneur, solopreneur, or freelancer",
              "You crave honest feedback and outside perspective",
              "You want to help others while evolving yourself",
              "You value real conversations over shallow networking",
            ].map((item, i) => (
              <li
                key={i}
                className="bg-white text-gray-900 px-5 py-2 rounded-full shadow-sm inline-block border border-gray-800"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Alt Görsel */}
          <div className="flex justify-center mt-10">
            <Image
              src="/22.svg"
              alt="Illustration for 'This is for you'"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>

        {/* SAĞ KART */}
        <div className="bg-white rounded-3xl p-10 flex flex-col justify-between border border-gray-800">
          {/* Başlık */}
          <h3 className="text-2xl md:text-3xl font-serif text-[#303030] mb-8">
            This Is <span className="italic font-semibold">NOT for You</span> If...
          </h3>

          {/* Madde Listesi */}
          <ul className="space-y-4">
            {[
              "You’re just looking to promote your business",
              "You can’t commit to regular attendance",
              "You’re not open to giving or receiving feedback",
              "You prefer passive learning to active participation",
            ].map((item, i) => (
              <li
                key={i}
                className="bg-gray-100 text-gray-900 px-5 py-2 rounded-full border border-gray-800 shadow-sm inline-block"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Alt Görsel */}
          <div className="flex justify-center mt-10">
            <Image
              src="/23.svg"
              alt="Illustration for 'Not for you'"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
