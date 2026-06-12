import React from "react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#ffffff,#fafafa,#f5f5f5,#ffffff)]" />

      {/* Decorative Circle */}
      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-neutral-100 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-neutral-100 blur-[120px]" />

      {/* Background Text */}
      <div
        className={`pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none text-[180px] text-black/[0.03] xl:block ${cormorant.className}`}
      >
        STUDIO
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="text-xs uppercase tracking-[0.45em] text-neutral-400">
              About Us
            </span>

            <h1
              className={`${cormorant.className} mt-5 text-5xl font-medium leading-tight text-neutral-900 md:text-6xl`}
            >
              Designing Spaces
              <br />
              That Inspire
            </h1>

            <div className="mt-10 space-y-7 text-lg leading-relaxed text-neutral-600">
              <p>
                At <strong>JSB Designs Studio</strong>, we believe architecture
                is more than creating structures. It is about crafting
                environments that enhance everyday experiences and stand the
                test of time.
              </p>

              <p>
                Our approach combines thoughtful planning, refined aesthetics,
                and functional design to deliver spaces that are elegant,
                practical, and deeply connected to the people who use them.
              </p>

              <p>
                Every project reflects our commitment to craftsmanship,
                innovation, and timeless architectural principles.
              </p>
            </div>

            {/* Features */}
            <div className="mt-14 space-y-8 border-l border-neutral-200 pl-8">
              <div>
                <h3 className={`${cormorant.className} text-3xl`}>
                  Residential Design
                </h3>

                <p className="mt-2 text-neutral-500">
                  Creating homes that balance comfort, beauty, and purpose.
                </p>
              </div>

              <div>
                <h3 className={`${cormorant.className} text-3xl`}>
                  Interior Spaces
                </h3>

                <p className="mt-2 text-neutral-500">
                  Thoughtfully curated interiors with timeless appeal.
                </p>
              </div>

              <div>
                <h3 className={`${cormorant.className} text-3xl`}>
                  Architectural Planning
                </h3>

                <p className="mt-2 text-neutral-500">
                  Functional layouts designed with precision and detail.
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="rounded-[36px] border border-neutral-200 bg-white p-12 shadow-[0_25px_80px_rgba(0,0,0,0.06)]">
              <span className="text-xs uppercase tracking-[0.4em] text-neutral-400">
                Our Philosophy
              </span>

              <h3
                className={`${cormorant.className} mt-5 text-5xl font-medium text-neutral-900`}
              >
                Form
                <br />
                Meets
                <br />
                Function
              </h3>

              <div className="mt-10 space-y-8 text-neutral-600">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-neutral-400">
                    Vision
                  </p>

                  <p>
                    To create timeless architecture that enriches people's
                    lives.
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-neutral-400">
                    Approach
                  </p>

                  <p>
                    Combining creativity, functionality, and attention to
                    detail in every project.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 left-10 rounded-3xl border border-neutral-200 bg-white px-8 py-5 shadow-2xl">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
                Established
              </p>

              <h4
                className={`${cormorant.className} text-4xl font-medium text-neutral-900`}
              >
                MMXIV
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}