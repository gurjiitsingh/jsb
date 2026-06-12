import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#11161d] py-28 text-white">
      {/* Background Text */}
      <div
        className={`pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none text-[180px] text-white/[0.03] xl:block ${cormorant.className}`}
      >
        ATELIER
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="mb-4 inline-block text-xs uppercase tracking-[0.45em] text-gray-400">
              Our Philosophy
            </span>

            <h2
              className={`${cormorant.className} text-4xl font-medium leading-tight md:text-5xl lg:text-7xl`}
            >
              Designing Spaces
              <br />
              <span className="text-gray-300">
                That Endure Time
              </span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-gray-400">
              Architecture is more than structure. It is the art of shaping
              environments that inspire, connect people, and enrich everyday
              life.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              From contemporary residences to commercial environments and
              refined interiors, our work balances innovation, functionality,
              and timeless aesthetics to create spaces with lasting value.
            </p>

            {/* Services */}
            <div className="mt-14 space-y-10 border-l border-white/10 pl-8">
              <div>
                <h3 className={`${cormorant.className} text-3xl font-medium`}>
                  Residential Architecture
                </h3>

                <p className="mt-2 text-gray-400">
                  Thoughtfully designed homes that blend comfort and elegance.
                </p>
              </div>

              <div>
                <h3 className={`${cormorant.className} text-3xl font-medium`}>
                  Commercial Spaces
                </h3>

                <p className="mt-2 text-gray-400">
                  Functional environments crafted for productivity and growth.
                </p>
              </div>

              <div>
                <h3 className={`${cormorant.className} text-3xl font-medium`}>
                  Interior Design
                </h3>

                <p className="mt-2 text-gray-400">
                  Sophisticated interiors with a focus on detail and experience.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-5">
              {/* Large Image */}
              <div className="overflow-hidden rounded-[2rem]">
                <Image
                  src="/about-1.jpg"
                  alt="Architecture"
                  width={700}
                  height={900}
                  className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-5">
                <div className="overflow-hidden rounded-[2rem]">
                  <Image
                    src="/about-2.jpg"
                    alt="Interior"
                    width={500}
                    height={400}
                    className="h-[250px] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                {/* Principle Card */}
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
                    Signature Principle
                  </p>

                  <h3
                    className={`${cormorant.className} mt-5 text-5xl font-medium leading-tight`}
                  >
                    Form
                    <br />
                    Meets
                    <br />
                    Function
                  </h3>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 left-10 rounded-3xl border border-white/10 bg-[#181f29] px-8 py-5 shadow-2xl">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                Established
              </p>

              <h4
                className={`${cormorant.className} text-4xl font-medium`}
              >
                MMXIV
              </h4>
            </div>

            {/* Decorative Line */}
            <div className="absolute -left-10 top-1/2 hidden h-40 w-px -translate-y-1/2 bg-white/10 lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}