export default function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Architectural Design",
      description:
        "Innovative residential and commercial architecture tailored to your vision, site conditions, and functional requirements.",
    },
    {
      number: "02",
      title: "Interior Design",
      description:
        "Thoughtfully designed interiors that combine aesthetics, comfort, and practicality for modern living and working spaces.",
    },
    {
      number: "03",
      title: "Planning & Consultation",
      description:
        "Expert planning solutions, feasibility studies, and professional guidance from concept development to project execution.",
    },
    {
      number: "04",
      title: "Renovation & Remodeling",
      description:
        "Transform existing spaces through strategic redesign, modernization, and efficient space utilization.",
    },
    {
      number: "05",
      title: "3D Visualization",
      description:
        "High-quality architectural renders and visual presentations that help clients visualize projects before construction.",
    },
    {
      number: "06",
      title: "Project Management",
      description:
        "End-to-end coordination ensuring quality, timelines, budgets, and smooth project delivery.",
    },
  ];

  return (
    <section className="bg-[#11161d] py-24 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            What We Do
          </p>

          <h2 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Comprehensive Design Services
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            From architectural planning to interior design and project
            execution, JSB Designs Studio provides complete design
            solutions tailored to every project.
          </p>
        </div>

        {/* Services */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {services.map((service) => (
            <div
              key={service.number}
              className="group grid gap-6 py-10 transition-all duration-300 md:grid-cols-[120px_1fr_1fr]"
            >
              {/* Number */}
              <div>
                <span className="text-xl font-light text-gray-500">
                  {service.number}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-2xl font-semibold transition group-hover:translate-x-2">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <div>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="rounded-full border border-white/20 px-8 py-4 transition hover:bg-white hover:text-black">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
}