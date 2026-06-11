export default function DesignProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We begin by understanding your vision, requirements, lifestyle, budget, and project goals.",
    },
    {
      number: "02",
      title: "Concept Design",
      description:
        "Initial design concepts, layouts, and creative directions are developed and refined collaboratively.",
    },
    {
      number: "03",
      title: "Planning & Approvals",
      description:
        "Detailed drawings, technical documentation, and approval-ready plans are prepared.",
    },
    {
      number: "04",
      title: "Design Development",
      description:
        "Materials, finishes, specifications, and construction details are finalized for execution.",
    },
    {
      number: "05",
      title: "Construction Support",
      description:
        "We coordinate with contractors and monitor progress to ensure design integrity.",
    },
    {
      number: "06",
      title: "Project Delivery",
      description:
        "The completed project is reviewed and delivered, ensuring every detail meets expectations.",
    },
  ];

  return (
    <section className="bg-[#0F1115] py-24 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-400">
            Our Process
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            How We Bring Ideas To Life
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Every successful project begins with a clear process. Our
            step-by-step approach ensures creativity, transparency,
            and precision from concept to completion.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative flex flex-col gap-6 md:flex-row md:items-start"
              >
                {/* Number Circle */}
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#0F1115] text-sm font-semibold">
                  {step.number}
                </div>

                {/* Content */}
                <div className="md:ml-10">
                  <h3 className="text-2xl font-semibold transition duration-300 group-hover:translate-x-2">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-2xl leading-relaxed text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-24 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-4xl font-bold">150+</h3>
              <p className="mt-2 text-gray-400">
                Projects Successfully Delivered
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">12+</h3>
              <p className="mt-2 text-gray-400">
                Years of Professional Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">98%</h3>
              <p className="mt-2 text-gray-400">
                Client Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}