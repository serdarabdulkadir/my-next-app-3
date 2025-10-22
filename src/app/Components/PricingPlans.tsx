"use client";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      tagline: "PERFECT FOR TRYING THINGS OUT.",
      price: "€49",
      period: "/mo",
      features: [
        "2 group sessions/month",
        "Community access",
        "Session summaries",
        "Private messaging",
      ],
      button: "Join Now",
      highlighted: false,
    },
    {
      name: "Growth",
      tagline: "OUR MOST POPULAR MEMBERSHIP.",
      price: "€89",
      period: "/mo",
      features: [
        "Weekly group sessions",
        "Goal-tracking tools",
        "Full community access",
        "Access to recordings",
        "Priority support",
      ],
      button: "Start Growing",
      highlighted: true,
    },
    {
      name: "Circle+",
      tagline: "FOR FULL SUPPORT & 1:1 COACHING",
      price: "€149",
      period: "/mo",
      features: [
        "Everything in Growth",
        "Monthly 1:1 coaching",
        "Personalized session recaps",
        "VIP Q&A calls",
        "Early event access",
      ],
      button: "Join Circle+",
      highlighted: false,
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
          Pricing
        </p>
        <h2 className="text-4xl md:text-5xl font-light text-gray-900">
          <span className="italic font-semibold">Plans</span> That Fit You
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`flex flex-col items-center rounded-3xl  overflow-hidden p-10 ${
                plan.highlighted
                  ? "bg-[#F8E08E] text-gray-900"
                  : "bg-white text-gray-800"
              }`}
            >
              <h3 className="text-2xl font-light">{plan.name}</h3>
              <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">
                {plan.tagline}
              </p>

              <div className="mt-6 flex items-baseline justify-center space-x-1">
                <span className="text-4xl font-semibold italic">
                  {plan.price}
                </span>
                <span className="text-lg text-gray-600">{plan.period}</span>
              </div>

              <ul className="mt-6 space-y-2 text-sm leading-relaxed">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <button
                className={`mt-8 px-6 py-3 rounded-md text-sm font-medium transition ${
                  plan.highlighted
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
