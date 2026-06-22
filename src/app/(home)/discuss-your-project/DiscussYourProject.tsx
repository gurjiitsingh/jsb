"use client";

import { addNewProjectRequirement  } from "@/app/(universal)/action/projectRequirement/dbOperation";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categorySchema, TcategorySchema } from "@/lib/types/categoryType";
import { Button } from "@/components/ui/button";
import { TProjectRequirement } from "../../../../types/projectRequerments";

export default function DiscussYourProject() {
  const [services, setServices] = useState<string[]>([]);

  const serviceOptions = [
    "Architecture Design",
    "Interior Design",
    "3D Elevation",
    "Landscape Design",
    "Renovation",
    "Construction Supervision",
  ];

const {
  register,
  handleSubmit,
  reset,
  setValue,
  formState: { errors },
} = useForm<TProjectRequirement>();

function handleCheckbox(service: string) {
  const updatedServices =
    services.includes(service)
      ? services.filter(
          (item) => item !== service
        )
      : [...services, service];

  setServices(updatedServices);

  setValue(
    "services",
    updatedServices
  );
}

  const [isSubmitting, setIsSubmitting] =
  useState(false);



  async function onSubmit(data: TProjectRequirement) {


  try {
    setIsSubmitting(true);

    const formData = new FormData();

    // Client Details
    formData.append(
      "clientName",
      data.clientName
    );

   formData.append(
  "email",
  data.email ?? ""
);

    formData.append(
      "phone",
      data.phone
    );

    // Location
    formData.append(
      "city",
      data.city ?? ""
    );

    formData.append(
      "state",
      data.state ?? ""
    );

    formData.append(
      "address",
      data.address ?? ""
    );

    // Project Details
    formData.append(
      "projectType",
      data.projectType
    );

    formData.append(
      "propertySize",
      data.propertySize ?? ""
    );

    formData.append(
      "numberOfFloors",
      data.numberOfFloors ?? ""
    );

    // Budget
    formData.append(
      "budgetRange",
      data.budgetRange
    );

    // Timeline
    formData.append(
      "expectedStartDate",
      data.expectedStartDate ?? ""
    );

    formData.append(
      "expectedCompletion",
      data.expectedCompletion ?? ""
    );

    // Services
  // Services
services.forEach((service) => {
  formData.append(
    "services",
    service
  );
});

    // Description
    formData.append(
      "description",
      data.description
    );

    // Additional Information
    formData.append(
      "inspirationLink",
      data.inspirationLink ?? ""
    );

    formData.append(
      "specialRequirements",
      data.specialRequirements ?? ""
    );

  const result =
  await addNewProjectRequirement(
    formData
  );

if (result.success) {
  alert(result.message);

  reset();

  setServices([]);
} else {
  console.error(result.message);

  alert(result.message);
}

     
  } catch (error) {
    console.error(
      "Error submitting requirement:",
      error
    );
  } finally {
    setIsSubmitting(false);
  }
}

  return (
 <section className="max-w-5xl mx-auto px-5 py-12">
  <div className="mb-10 text-center">
    <h1 className="text-4xl font-bold">
      Discuss Your Project
    </h1>

    <p className="mt-3 text-gray-600">
      Share your requirements and our team will get in touch with you.
    </p>
  </div>

  <form
    onSubmit={handleSubmit(onSubmit)}
    className="space-y-8"
  >
    {/* Personal Details */}
    <div className="rounded-2xl border bg-white p-6">
      <h2 className="mb-5 text-xl font-semibold">
        Personal Details
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        <input
          {...register("clientName")}
          placeholder="Full Name"
          className="rounded-xl border p-3"
          required
        />

        <input
          {...register("phone")}
          placeholder="Phone Number"
          className="rounded-xl border p-3"
          required
        />

        <input
          {...register("email")}
          type="email"
          placeholder="Email Address"
          className="rounded-xl border p-3"
        />

        <input
          {...register("city")}
          placeholder="City"
          className="rounded-xl border p-3"
        />

        <input
          {...register("state")}
          placeholder="State"
          className="rounded-xl border p-3"
        />

        <input
          {...register("address")}
          placeholder="Address"
          className="rounded-xl border p-3"
        />
      </div>
    </div>

    {/* Project Details */}
    <div className="rounded-2xl border bg-white p-6">
      <h2 className="mb-5 text-xl font-semibold">
        Project Details
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        <select
          {...register("projectType")}
          className="rounded-xl border p-3"
        >
          <option value="">Project Type</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Office">Office</option>
          <option value="Villa">Villa</option>
          <option value="Apartment">Apartment</option>
          <option value="Interior">Interior</option>
          <option value="Renovation">Renovation</option>
          <option value="Landscape">Landscape</option>
        </select>

        <input
          {...register("propertySize")}
          placeholder="Property Size (Sq Ft)"
          className="rounded-xl border p-3"
        />

        <input
          {...register("numberOfFloors")}
          placeholder="Number of Floors"
          className="rounded-xl border p-3"
        />

        <select
          {...register("budgetRange")}
          className="rounded-xl border p-3"
        >
          <option value="">Budget Range</option>
          <option value="Under ₹5 Lakh">
            Under ₹5 Lakh
          </option>
          <option value="₹5-10 Lakh">
            ₹5-10 Lakh
          </option>
          <option value="₹10-25 Lakh">
            ₹10-25 Lakh
          </option>
          <option value="₹25-50 Lakh">
            ₹25-50 Lakh
          </option>
          <option value="Above ₹50 Lakh">
            Above ₹50 Lakh
          </option>
        </select>
      </div>
    </div>

    {/* Services */}
    <div className="rounded-2xl border bg-white p-6">
      <h2 className="mb-5 text-xl font-semibold">
        Services Required
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {serviceOptions.map((service) => (
          <label
            key={service}
            className="flex items-center gap-3"
          >
            <input
              type="checkbox"
              checked={services.includes(service)}
              onChange={() =>
                handleCheckbox(service)
              }
            />

            {service}
          </label>
        ))}
      </div>

      {/* hidden field for react-hook-form */}
      <input
        type="hidden"
        {...register("services")}
      />
    </div>

    {/* Description */}
    <div className="rounded-2xl border bg-white p-6">
      <h2 className="mb-5 text-xl font-semibold">
        Tell Us About Your Project
      </h2>

      <textarea
        {...register("description")}
        rows={6}
        required
        placeholder="Describe your vision, style preferences, rooms required, etc."
        className="w-full rounded-xl border p-4"
      />
    </div>

    {/* Additional Information */}
    <div className="rounded-2xl border bg-white p-6">
      <h2 className="mb-5 text-xl font-semibold">
        Additional Information
      </h2>

      <div className="grid gap-5">
        <input
          {...register("inspirationLink")}
          placeholder="Pinterest / Instagram / Reference Link"
          className="rounded-xl border p-3"
        />

        <textarea
          {...register("specialRequirements")}
          rows={4}
          placeholder="Any special requirements?"
          className="rounded-xl border p-4"
        />
      </div>
    </div>

    {/* Timeline */}
    <div className="rounded-2xl border bg-white p-6">
      <h2 className="mb-5 text-xl font-semibold">
        Timeline
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Expected Start Date
          </label>

          <input
            type="date"
            {...register("expectedStartDate")}
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Expected Completion Date
          </label>

          <input
            type="date"
            {...register("expectedCompletion")}
            className="w-full rounded-xl border p-3"
          />
        </div>
      </div>
    </div>

    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full rounded-xl bg-black py-4 font-medium text-white transition hover:bg-gray-800 disabled:opacity-70"
    >
      {isSubmitting
        ? "Submitting..."
        : "Submit Requirement"}
    </button>
  </form>
</section>
  );
}