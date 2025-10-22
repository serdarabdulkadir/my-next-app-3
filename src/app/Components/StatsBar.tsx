
export default function StatsBar() {
  return (

    <section className="relative isolate overflow-hidden text-gray-900 rounded-[32px] mx-auto max-w-7xl mt-16 md:mt-20">
      <div className="bg-white border border-black rounded-2xl w-full h-full mt-10 mb-10 shadow-sm grid grid-cols-2 md:grid-cols-5  pt-8 md:pt-10 pl-6 md:pl-8 pb-6 md:pb-0 gap-6">
        <div>
          <p className="text-3xl font-serif font-bold">82%</p>
          <p className="text-sm text-gray-800 mb-8 w-[188px]">
of members say they gained clarity within the first 2 sessions
          </p>
        </div>
        <div>
          <p className="text-3xl font-serif font-bold">93%</p>
          <p className="text-sm text-gray-700 w-[188px] ">report feeling more accountable</p>
        </div>
        <div>
          <p className="text-3xl font-serif font-bold">6</p>
          <p className="text-sm text-gray-700 w-[188px] ">
6-person circles. The sweet spot for focused, diverse conversations.
          </p>
        </div>
        <div>
          <p className="text-3xl font-serif font-bold">1,200+</p>
          <p className="text-sm text-gray-700 w-[188px] ">
hours of mastermind sessions hosted
          </p>
        </div>
        <div>
          <p className="text-3xl font-serif font-bold">75%</p>
          <p className="text-sm text-gray-700 w-[188px] ">return for a second cycle</p>
        </div>
      </div>

      </section>
  );
}
