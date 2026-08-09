import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="mb-12">
          <p className="text-blue-400 font-medium mb-2">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Things I've built
          </h2>

          <p className="mt-4 text-gray-400 text-lg max-w-2xl">
            A selection of academic and software projects that demonstrate
            my experience working with data, databases, APIs, and software
            development.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50"
            >

              {/* Project type */}
              <p className="text-sm text-blue-400 font-medium mb-3">
                {project.type}
              </p>

              {/* Project title */}
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-slate-800 px-3 py-1 text-xs text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-5 mt-6 pt-5 border-t border-slate-800">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-300 hover:text-blue-400 transition"
                  >
                    GitHub →
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-300 hover:text-blue-400 transition"
                  >
                    Live Demo →
                  </a>
                )}

                {!project.github && !project.demo && (
                  <span className="text-sm text-gray-500">
                    Project details available on request
                  </span>
                )}

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}