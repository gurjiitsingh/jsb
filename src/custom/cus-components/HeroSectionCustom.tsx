import Image from "next/image";

export default function HeroSection() {
  return (
   <div className="relative mx-auto h-[500px] w-full max-w-md">
  {/* Card 1 */}
  <div className="absolute left-0 top-0 w-72 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
    <div className="relative mb-4 h-40 overflow-hidden rounded-2xl">
      <Image
        src="/images/residence.jpg"
        alt="Modern Residence"
        fill
        className="object-cover"
      />
    </div>

    <h3 className="text-xl font-semibold">
      Modern Residence
    </h3>

    <p className="mt-2 text-sm text-gray-400">
      Contemporary architecture with clean lines and natural
      materials.
    </p>
  </div>

  {/* Card 2 */}
  <div className="absolute right-0 top-28 w-72 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
    <div className="relative mb-4 h-40 overflow-hidden rounded-2xl">
      <Image
        src="/images/commercial.jpg"
        alt="Commercial Complex"
        fill
        className="object-cover"
      />
    </div>

    <h3 className="text-xl font-semibold">
      Commercial Complex
    </h3>

    <p className="mt-2 text-sm text-gray-400">
      Innovative workspaces designed for growth and collaboration.
    </p>
  </div>

  {/* Card 3 */}
  <div className="absolute bottom-0 left-12 w-72 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
    <div className="relative mb-4 h-40 overflow-hidden rounded-2xl">
      <Image
        src="/luxury-interior.jpg"
        alt="Luxury Interior"
        fill
        className="object-cover"
      />
    </div>

    <h3 className="text-xl font-semibold">
      Luxury Interior
    </h3>

    <p className="mt-2 text-sm text-gray-400">
      Elegant interiors balancing aesthetics, comfort, and
      functionality.
    </p>
  </div>
</div>
  );
}