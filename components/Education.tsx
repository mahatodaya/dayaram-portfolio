import { education } from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <div className="mb-12">
          <p className="text-blue-400 font-medium mb-2">
            Education
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Education & Professional Development
          </h2>

          <p className="mt-4 text-gray-400 text-lg max-w-2xl">
            My academic background and ongoing professional development
            in information technology.
          </p>
        </div>

        {/* Education timeline */}
        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-slate-800" />

          <div className="space-y-10">

            {education.map((item) => (
              <div
                key={`${item.qualification}-${item.institution}`}
                className="relative pl-10"
              >

                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[19px] h-[19px] rounded-full border-4 border-slate-950 bg-blue-500" />

                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-blue-500/50">

                  {/* Category & status */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

                    <p className="text-sm text-blue-400 font-medium">
                      {item.category}
                    </p>

                    <span className="text-sm text-gray-500">
                      {item.status}
                    </span>

                  </div>

                  {/* Qualification */}
                  <h3 className="text-2xl font-semibold mt-3">
                    {item.qualification}
                  </h3>

                  {/* Institution */}
                  <p className="text-gray-300 mt-2">
                    {item.institution}
                  </p>

                  {/* Location & period */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2 text-sm text-gray-500">
                    <span>{item.location}</span>
                    <span className="hidden sm:block">•</span>
                    <span>{item.period}</span>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}