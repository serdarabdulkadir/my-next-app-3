"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do the group sessions work?",
      answer:
        "Each session takes place on Zoom and follows a guided structure, including check-ins, goal sharing, and peer feedback. You’ll always know what to expect.",
    },
    {
      question: "Can I join from anywhere?",
      answer:
        "Yes! All sessions are hosted online, so you can join from anywhere in the world as long as you have a stable internet connection.",
    },
    {
      question: "What if I can’t make a live session?",
      answer:
        "No problem! Most sessions are recorded and shared with members afterward, so you can catch up anytime.",
    },
    {
      question: "Is there a long-term commitment?",
      answer:
        "No long-term commitment required. You can cancel your membership anytime — no questions asked.",
    },
    {
      question: "Who are the other members?",
      answer:
        "Our members are creative professionals, founders, and lifelong learners from diverse backgrounds, all focused on growth and collaboration.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Sol taraf - Başlık ve sorular */}
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
            Need more info?
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-10">
            Frequently Asked{" "}
            <span className="italic font-semibold">Questions</span>
          </h2>

          <div className="flex flex-col space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border ${
                    isOpen
                      ? "bg-[#F8E08E] border-transparent"
                      : "bg-white border-gray-300 hover:border-gray-400 transition"
                  } p-6 cursor-pointer`}
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                >
                  <div className="flex justify-between items-center">
                    <h3
                      className={`text-sm uppercase tracking-wide font-medium ${
                        isOpen ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-gray-800" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-800" />
                    )}
                  </div>
                  {isOpen && (
                    <p className="text-gray-800 text-sm mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Sağ taraf - Görsel */}
        <div className="hidden lg:flex justify-center">
          <img src="24.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
