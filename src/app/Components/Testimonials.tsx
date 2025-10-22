"use client";

export default function Testimonials() {
  return (
    <section className="bg-[#f9f9f9] py-28 px-6 md:px-12 lg:px-24 text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* ÜST BAŞLIK */}
        

        {/* KART GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="mb-20">
          <p className="uppercase tracking-[0.15em] text-[12px] text-gray-500 mb-4">
            Testimonials
          </p>
          <h2 className="text-[46px] md:text-[64px] leading-tight font-serif font-medium text-gray-900">
            What Our Members <span className="italic font-semibold">Are</span>{" "}
            <br />
            <span className="italic font-semibold">Saying</span>
          </h2>
        </div>
          {/* KART 1 */}
          <div className="bg-white rounded-[24px] p-10 shadow-sm border border-gray-100">
            <p className="text-[17px] leading-relaxed text-gray-800 mb-6">
              “I joined on a whim, but it’s become a constant in my growth.
              Everyone brings such honest energy — I leave every session clearer
              and more focused.”
            </p>
            <p className="text-sm text-gray-700 font-light">
              — Taylor B. / Creative Coach
            </p>
          </div>

          {/* KART 2 */}
          <div className="bg-white rounded-[24px] p-10 shadow-sm border border-gray-100">
            <p className="text-[17px] leading-relaxed text-gray-800 mb-6">
              “It’s rare to find a space that’s this structured and this human.
              I’ve made more progress in 3 months than I had in a year alone.”
            </p>
            <p className="text-sm text-gray-700 font-light">
              — Samir R. / Indie Developer
            </p>
          </div>

          {/* KART 3 */}
          <div className="bg-white rounded-[24px] p-10 shadow-sm border border-gray-100">
            <p className="text-[17px] leading-relaxed text-gray-800 mb-6">
              “The feedback is gold. Supportive, but not sugarcoated. I always
              feel seen and challenged in the best way.”
            </p>
            <p className="text-sm text-gray-700 font-light">
              — Renee L. / Marketing Strategist
            </p>
          </div>

          {/* KART 4 */}
          <div className="bg-white rounded-[24px] p-10 shadow-sm border border-gray-100">
            <p className="text-[17px] leading-relaxed text-gray-800 mb-6">
              “I used to overthink every move in my business. Now I have a
              circle that keeps me grounded, focused, and — honestly — excited
              to show up.”
            </p>
            <p className="text-sm text-gray-700 font-light">
              — Alex M. / Wellness Entrepreneur
            </p>
          </div>

          {/* KART 5 */}
          <div className="bg-white rounded-[24px] p-10 shadow-sm border border-gray-100">
            <p className="text-[17px] leading-relaxed text-gray-800 mb-6">
              “This isn’t just another online group — it feels like a team. The
              accountability and support have helped me stay consistent like
              never before.”
            </p>
            <p className="text-sm text-gray-700 font-light">
              — Jordan K. / Freelance Illustrator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
