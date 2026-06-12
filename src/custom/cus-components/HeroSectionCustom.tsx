import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function HeroSection() {
  return (

    <section className="px-6 pt-2 pb-10 lg:px-12">


      <div className="mb-1 text-center">
        <span className="mb-1 inline-block text-xs uppercase tracking-[0.45em] text-gray-400">
          Featured Projects
        </span>

        <h2
          className={`${cormorant.className} text-4xl font-medium leading-tight text-white sm:text-5xl md:text-6xl`}
        >
          Spaces Crafted
          <br />
          <span className="text-gray-300">
            With Vision & Detail
          </span>
        </h2>

        <div className="mx-auto mt-6 h-px w-24 bg-white/20" />

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-gray-400 md:text-base">
          From contemporary residences to sophisticated commercial spaces and
          luxurious interiors, every project reflects our commitment to timeless
          architecture and refined craftsmanship.
        </p>
      </div>

      <div className="relative mx-auto h-[900px] w-full max-w-4xl md:h-[720px]">

        {/* Card 1 */}
        <div className="absolute left-1/2 top-0 w-[300px] md:w-[320px] -translate-x-1/2 md:left-0 md:translate-x-0 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
          <div className="relative mb-4 h-44 overflow-hidden rounded-2xl">
            <Image
              src="/modern-residence.jpg"
              alt="Modern Residence"
              fill
              className="object-cover"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 bg-black/25" />

            <div
              className={`absolute bottom-4 left-4 text-white ${cormorant.className}`}
            >
              <p className="text-xs uppercase tracking-[0.35em]">
                Residential
              </p>

              <h3 className="text-3xl font-medium">
                Modern Residence
              </h3>
            </div>
          </div>

          <p className="text-sm text-gray-400">
            Contemporary architecture with clean lines and natural materials.
          </p>
        </div>

        {/* Card 2 */}
        <div className="absolute left-1/2 top-[270px] w-[300px] md:w-[320px] -translate-x-1/2 md:left-auto md:right-4 md:top-16 md:translate-x-0 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
          <div className="relative mb-4 h-44 overflow-hidden rounded-2xl">
            <Image
              src="/commercial-complex.jpg"
              alt="Commercial Complex"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/25" />

            <div
              className={`absolute bottom-4 left-4 text-white ${cormorant.className}`}
            >
              <p className="text-xs uppercase tracking-[0.35em]">
                Commercial
              </p>

              <h3 className="text-3xl font-medium">
                Urban Workspace
              </h3>
            </div>
          </div>

          <p className="text-sm text-gray-400">
            Innovative workspaces designed for growth and collaboration.
          </p>
        </div>

        {/* Card 3 */}
        <div className="absolute left-1/2 top-[540px] w-[300px] md:w-[320px] -translate-x-1/2 md:bottom-0 md:left-16 md:top-auto md:translate-x-0 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
          <div className="relative mb-4 h-44 overflow-hidden rounded-2xl">
            <Image
              src="/luxury-interior.jpg"
              alt="Luxury Interior"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/25" />

            <div
              className={`absolute bottom-4 left-4 text-white ${cormorant.className}`}
            >
              <p className="text-xs uppercase tracking-[0.35em]">
                Interior
              </p>

              <h3 className="text-3xl font-medium">
                Timeless Luxury
              </h3>
            </div>
          </div>

          <p className="text-sm text-gray-400">
            Elegant interiors balancing aesthetics, comfort, and functionality.
          </p>
        </div>

        {/* Background Text */}
        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-[180px] lg:text-[240px] text-white/[0.03] md:block ${cormorant.className}`}
        >
          ARCH
        </div>
      </div>
    </section>
  );
}