export default function AboutSection() {
  return (
    <section className="bg-[#11161d] py-24 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Side */}
          <div>
            <span className="mb-4 inline-block text-sm uppercase tracking-[0.3em] text-gray-400">
              About Studio
            </span>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Crafting Architecture
              <br />
              With Purpose & Precision
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-gray-400">
              We believe architecture is more than creating buildings.
              It is about designing experiences, shaping communities,
              and improving the way people live, work, and interact.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              Our multidisciplinary team combines innovation,
              functionality, and timeless aesthetics to deliver
              spaces that remain relevant for generations.
            </p>

            <div className="mt-10 flex flex-wrap gap-10">
              <div>
                <h3 className="text-4xl font-bold">150+</h3>
                <p className="mt-2 text-gray-400">
                  Completed Projects
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">12+</h3>
                <p className="mt-2 text-gray-400">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2"
                  alt="Architecture"
                  className="h-[500px] w-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                    alt="Interior Design"
                    className="h-[240px] w-full object-cover"
                  />
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                  <h3 className="text-5xl font-bold">45+</h3>

                  <p className="mt-3 text-gray-400">
                    Cities across India where our projects have been delivered.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 left-10 rounded-2xl border border-white/10 bg-[#181f29] px-6 py-4 shadow-2xl">
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Since
              </p>

              <h4 className="text-3xl font-bold">
                2014
              </h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}