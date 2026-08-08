export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="mb-12">
          <p className="text-blue-400 font-medium mb-2">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            A little bit about me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* About text */}
          <div className="space-y-6">

            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Dayaram Mahato, an Information Technology professional
              with a strong interest in data analytics, database development,
              software development, and ICT support.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              I enjoy working with data, solving technical problems, and
              developing practical technology solutions that can help
              businesses make better decisions and work more efficiently.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              My academic and project experience has allowed me to work
              across areas including SQL, databases, data visualisation,
              Python, web development, and software engineering.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              I'm continuously developing my technical and professional
              skills and looking for opportunities where I can contribute,
              learn from experienced teams, and grow as an IT professional.
            </p>

          </div>

          {/* Quick information */}
          <div className="grid sm:grid-cols-2 gap-5">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <p className="text-sm text-gray-500 mb-2">
                Education
              </p>

              <h3 className="text-lg font-semibold">
                Master of Information Technology
              </h3>

              <p className="text-gray-400 mt-2">
                University of Newcastle
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <p className="text-sm text-gray-500 mb-2">
                Based in
              </p>

              <h3 className="text-lg font-semibold">
                Australia 🇦🇺
              </h3>

              <p className="text-gray-400 mt-2">
                Open to IT opportunities
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <p className="text-sm text-gray-500 mb-2">
                Focus Areas
              </p>

              <h3 className="text-lg font-semibold">
                Data & Technology
              </h3>

              <p className="text-gray-400 mt-2">
                Analytics, databases & software
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <p className="text-sm text-gray-500 mb-2">
                Interests
              </p>

              <h3 className="text-lg font-semibold">
                Technology & Innovation
              </h3>

              <p className="text-gray-400 mt-2">
                Learning, building & problem solving
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}