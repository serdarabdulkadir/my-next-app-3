"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";

const facilitators = [
  {
    name: "Amira Sullivan",
    title: "CREATIVE STRATEGIST & GROUP FACILITATOR",
    description:
      "With over a decade of guiding creative professionals, Amira brings clarity, structure, and a spark of inspiration to every session.",
    image: "/Foto1.svg",
    linkedin: "#",
  },
  {
    name: "Lucas Varela",
    title: "ACCOUNTABILITY COACH & SOLOPRENEUR",
    description:
      "Lucas helps members stay focused and follow through with intention. His calm energy and practical tools make progress feel possible.",
    image: "/Foto2.svg",
    linkedin: "#",
  },
  {
    name: "Elena Morozova",
    title: "MINDSET COACH & COMMUNITY BUILDER",
    description:
      "Elena supports members through thoughtful reflection and honest conversation. Her strength lies in helping people see the bigger picture.",
    image: "/Foto3.svg",
    linkedin: "#",
  },
  {
    name: "Jason Kim",
    title: "STARTUP MENTOR & STRATEGIC THINKER",
    description:
      "With a background in tech and coaching, Jason brings sharp insight and a deep belief in peer-led growth. He’s known for asking just the right questions.",
    image: "/Foto4.svg",
    linkedin: "#",
  },
];

export default function FacilitatorsSection() {
  return (
    <section className="bg-[#fafafa] py-28 px-6 md:px-12 lg:px-20 text-center text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* ÜST METİN */}
        <p className="text-[12px] uppercase tracking-[0.12em] text-gray-500 mb-3">
          Your Hosts & Guides
        </p>

        <h2 className="text-[46px] md:text-[64px] leading-tight font-serif font-medium text-gray-900">
          Meet Your <span className="italic font-semibold">Facilitators</span>
        </h2>

        {/* KARTLAR */}
        <div className="mt-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          {facilitators.map((f, i) => (
            <div
              key={i}
              className="flex flex-col text-left items-start mx-auto max-w-[280px]"
            >
              {/* FOTO */}
              <div className="rounded-2xl overflow-hidden bg-gray-200 w-full aspect-square mb-6">
                <Image
                  src={f.image}
                  alt={f.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* İSİM */}
              <h3 className="text-[22px] font-medium font-serif text-gray-900 mb-2">
                {f.name}
              </h3>

              {/* ÜNVAN */}
              <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-4">
                {f.title}
              </p>

              {/* AÇIKLAMA */}
              <p className="text-[14px] leading-relaxed text-gray-600 mb-5">
                {f.description}
              </p>

              {/* LinkedIn */}
              <a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-6 h-6 border border-gray-300 rounded-sm hover:border-gray-700 transition"
              >
                <img src="Linkedin.svg" alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
