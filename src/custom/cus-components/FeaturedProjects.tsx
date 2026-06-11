export default function FeaturedProjects() {
  const projects = [
    {
      title: "Modern Villa",
      category: "Residential Architecture",
      location: "Jalandhar, Punjab",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0a",
    },
    {
      title: "Corporate Office",
      category: "Commercial Design",
      location: "Ludhiana, Punjab",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    },
    {
      title: "Luxury Interior",
      category: "Interior Design",
      location: "Chandigarh",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
  ];

  return (
    <section className="bg-[#0F1115] py-24 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-400">
              Selected Work
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Featured Projects
            </h2>
          </div>

          <p className="max-w-md text-gray-400">
            Explore a selection of residential, commercial, and interior
            projects designed by JSB Designs Studio.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="mb-2 text-sm uppercase tracking-widest text-gray-400">
                  {project.category}
                </p>

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-2 text-gray-400">
                  {project.location}
                </p>

                <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  View Project
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button className="rounded-full border border-white/20 px-8 py-4 transition hover:bg-white hover:text-black">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}