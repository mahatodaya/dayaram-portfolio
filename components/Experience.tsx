import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <div className="mb-12">
          <p className="text-blue-400 font-medium mb-2">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Professional Experience
          </h2>

<p className="mt-4 text-gray-400 text-lg max-w-2xl">
  Professional experiences that have developed my communication,
  problem-solving, organisational, and technical-support skills.
</p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-slate-800" />

          <div className="space-y-10">

            {experience.map((item) => (
              <div
                key={`${item.role}-${item.organisation}`}
                className="relative pl-10"
              >

                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[19px] h-[19px] rounded-full border-4 border-slate-950 bg-blue-500" />

                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-blue-500/50">

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">

                    <div>
                      <p className="text-sm text-blue-400 font-medium">
                        {item.type}
                      </p>

                      <h3 className="text-2xl font-semibold mt-1">
                        {item.role}
                      </h3>

                      <p className="text-gray-400 mt-1">
                        {item.organisation}
                      </p>
                    </div>

                    <span className="text-sm text-gray-500">
                      {item.period}
                    </span>

                  </div>

                  <p className="mt-5 text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">

                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-slate-800 px-3 py-1 text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}