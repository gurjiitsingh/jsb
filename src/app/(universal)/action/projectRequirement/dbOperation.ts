"use server";

// app/(universal)/action/project-requirement/dbOperation.ts

"use server";

import { adminDb } from "@/lib/firebaseAdmin";
import { FieldValue } from "firebase-admin/firestore";

export async function addNewProjectRequirement(
  formData: FormData
) {
  const receivedData = {
    // Client Details
    clientName:
      formData.get("clientName")?.toString() || "",

    email:
      formData.get("email")?.toString() || "",

    phone:
      formData.get("phone")?.toString() || "",

    // Location
    city:
      formData.get("city")?.toString() || "",

    state:
      formData.get("state")?.toString() || "",

    address:
      formData.get("address")?.toString() || "",

    // Project Details
    projectType:
      formData.get("projectType")?.toString() || "",

    propertySize:
      formData.get("propertySize")?.toString() || "",

    numberOfFloors:
      formData.get("numberOfFloors")?.toString() || "",

    // Budget
    budgetRange:
      formData.get("budgetRange")?.toString() || "",

    // Timeline
    expectedStartDate:
      formData.get("expectedStartDate")?.toString() || "",

    expectedCompletion:
      formData.get("expectedCompletion")?.toString() || "",

    // Services
    services: formData
      .getAll("services")
      .map((item) => item.toString()),

    // Requirement Description
    description:
      formData.get("description")?.toString() || "",

    // Additional Information
    inspirationLink:
      formData.get("inspirationLink")?.toString() || "",

    specialRequirements:
      formData.get("specialRequirements")?.toString() || "",

    // Status
    status: "New",
  };

  // Basic validation
  if (
    !receivedData.clientName ||
    !receivedData.phone ||
    !receivedData.description
  ) {
    return {
      success: false,
      message: "Please fill all required fields.",
    };
  }

  await adminDb
    .collection("projectRequirements")
    .add({
      ...receivedData,
      createdAt: FieldValue.serverTimestamp(),
    });

  return {
    success: true,
    message: "Requirement submitted successfully.",
  };
}


