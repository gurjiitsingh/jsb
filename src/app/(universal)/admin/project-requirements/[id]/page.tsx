import { getProjectRequirementById } from "@/app/(universal)/action/projectRequirement/getProjectRequirementById";
import { notFound } from "next/navigation";


type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectRequirementDetailPage({
  params,
}: Props) {
  const { id } = await params;

  const requirement = await getProjectRequirementById(id);

  if (!requirement) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Project Requirement Details
      </h1>

      <div className="grid gap-4">
        <p>
          <strong>Client:</strong> {requirement.clientName}
        </p>

        <p>
          <strong>Email:</strong> {requirement.email}
        </p>

        <p>
          <strong>Phone:</strong> {requirement.phone}
        </p>

        <p>
          <strong>City:</strong> {requirement.city}
        </p>

        <p>
          <strong>State:</strong> {requirement.state}
        </p>

        <p>
          <strong>Address:</strong> {requirement.address}
        </p>

        <p>
          <strong>Project Type:</strong> {requirement.projectType}
        </p>

        <p>
          <strong>Property Size:</strong> {requirement.propertySize}
        </p>

        <p>
          <strong>Floors:</strong> {requirement.numberOfFloors}
        </p>

        <p>
          <strong>Budget:</strong> {requirement.budgetRange}
        </p>

        <p>
          <strong>Expected Start:</strong>{" "}
          {requirement.expectedStartDate}
        </p>

        <p>
          <strong>Expected Completion:</strong>{" "}
          {requirement.expectedCompletion}
        </p>

        <p>
          <strong>Services:</strong>{" "}
          {requirement.services?.join(", ")}
        </p>

        <p>
          <strong>Description:</strong>
        </p>

        <div className="border rounded p-3">
          {requirement.description}
        </div>

        <p>
          <strong>Inspiration Link:</strong>{" "}
          {requirement.inspirationLink}
        </p>

        <p>
          <strong>Special Requirements:</strong>
        </p>

        <div className="border rounded p-3">
          {requirement.specialRequirements}
        </div>

        <p>
          <strong>Status:</strong> {requirement.status}
        </p>

        <p>
          <strong>Created:</strong>{" "}
          {requirement.createdAt
            ? new Date(requirement.createdAt).toLocaleString()
            : "-"}
        </p>
      </div>
    </div>
  );
}