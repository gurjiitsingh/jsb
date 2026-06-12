"use client";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type Props = {
  outlet?: any;
};

export default function ContactUs({ outlet }: Props) {
  const name = outlet?.outletName || "JSB Designs Studio";

  const addressParts = [
    outlet?.addressLine1,
    outlet?.addressLine2,
    outlet?.city,
  ].filter(Boolean);

  const address =
    addressParts.length > 0
      ? addressParts.join(", ")
      : "Address not available";

  const phone = outlet?.phone || "-";
  const phone2 = outlet?.phone2 || "";
  const email = outlet?.email || "-";

  const mapQuery = encodeURIComponent(address);

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#ffffff,#fafafa,#f5f5f5,#ffffff)]" />

      {/* Soft Glow */}
      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-neutral-100 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-neutral-100 blur-[120px]" />

      {/* Background Text */}
      <div
        className={`pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none text-[180px] text-black/[0.03] xl:block ${cormorant.className}`}
      >
        ATELIER
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-neutral-400">
            Get In Touch
          </p>

          <h2
            className={`${cormorant.className} text-5xl font-medium leading-tight text-neutral-900 md:text-7xl`}
          >
            Let's Create
            <br />
            Something Timeless
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
            Whether you're planning a residence, interior transformation,
            or a commercial project, we would be delighted to discuss
            your vision and bring it to life.
          </p>
        </div>

        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          {/* Contact Card */}
          <div className="rounded-[36px] border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:p-12">
            <span className="text-xs uppercase tracking-[0.4em] text-neutral-400">
              Our Studio
            </span>

            <h3
              className={`${cormorant.className} mt-4 text-5xl font-medium text-neutral-900`}
            >
              {name}
            </h3>

            <div className="mt-12 space-y-10">
              {/* Address */}
              <div className="flex gap-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-neutral-100">
                  <FaMapMarkerAlt className="text-neutral-700" />
                </div>

                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.35em] text-neutral-400">
                    Studio Address
                  </p>

                  <a
                    href={`https://maps.google.com/?q=${mapQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="leading-relaxed text-neutral-700 transition hover:text-black"
                  >
                    {address}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-neutral-100">
                  <FaPhoneAlt className="text-neutral-700" />
                </div>

                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.35em] text-neutral-400">
                    Consultation
                  </p>

                  <a
                    href={`tel:${phone}`}
                    className="block text-neutral-700 transition hover:text-black"
                  >
                    {phone}
                  </a>

                  {phone2 && (
                    <a
                      href={`tel:${phone2}`}
                      className="block text-neutral-700 transition hover:text-black"
                    >
                      {phone2}
                    </a>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-neutral-100">
                  <FaEnvelope className="text-neutral-700" />
                </div>

                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.35em] text-neutral-400">
                    Email Address
                  </p>

                  <a
                    href={`mailto:${email}`}
                    className="text-neutral-700 transition hover:text-black"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Quote */}
            <div className="mt-14 border-t border-neutral-200 pt-8">
              <p
                className={`${cormorant.className} text-3xl font-medium leading-relaxed text-neutral-900`}
              >
                "Architecture is the thoughtful making of space."
              </p>

              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-neutral-400">
                — Louis Kahn
              </p>
            </div>
          </div>

          {/* Map Card */}
          <div className="overflow-hidden rounded-[36px] border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
            {/* KEEPING YOUR GOOGLE MAP CODE UNCHANGED */}
            <iframe
              title="JSB Designs Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.116349452542!2d75.56103929999999!3d31.3005292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b0993202549%3A0x2aafca39e2c7c3fc!2sZudio%20-%20Lovely%20Marbles%2C%20Jalandhar!5e0!3m2!1sen!2sin!4v1781260252555!5m2!1sen!2sin"
              className="h-full min-h-[650px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}