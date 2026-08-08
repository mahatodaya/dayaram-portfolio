const skillCategories = [
  {
    title: "Data & Analytics",
    skills: [
      "Python",
      "Pandas",
      "SQL",
      "Power BI",
      "Tableau",
      "Tableau Prep",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "MongoDB",
      "SQL Server",
      "PL/SQL",
    ],
  },
  {
    title: "Development",
    skills: [
      "Java",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Azure",
      "ETL",
      "Data Warehousing",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="mb-12">
          <p className="text-blue-400 font-medium mb-2">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I work with
          </h2>

          <p className="mt-4 text-gray-400 text-lg max-w-2xl">
            A collection of technologies, tools, and technical skills
            I have developed through my studies, projects, and practical
            experience.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-6">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition hover:border-blue-500/50 hover:-translate-y-1"
            >

              <h3 className="text-xl font-semibold mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700 bg-slate-800/70 px-4 py-2 text-sm text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}