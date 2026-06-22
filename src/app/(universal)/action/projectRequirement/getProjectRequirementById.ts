"use server";

import { adminDb } from "@/lib/firebaseAdmin";
import { projectRequirementDataT, TProjectRequirement } from "../../../../../types/projectRequerments";

export async function getProjectRequirementById(id: string) {
  try {
    const docRef = await adminDb
      .collection("projectRequirements")
      .doc(id)
      .get();

    if (!docRef.exists) {
      return null;
    }

    const data = docRef.data();

    const requirement: projectRequirementDataT = {
      id: docRef.id,

      clientName: data?.clientName ?? "",
      email: data?.email ?? "",
      phone: data?.phone ?? "",

      city: data?.city ?? "",
      state: data?.state ?? "",
      address: data?.address ?? "",

      projectType: data?.projectType ?? "",
      propertySize: data?.propertySize ?? "",
      numberOfFloors: data?.numberOfFloors ?? "",

      budgetRange: data?.budgetRange ?? "",

      expectedStartDate: data?.expectedStartDate ?? "",
      expectedCompletion: data?.expectedCompletion ?? "",

      services: data?.services ?? [],

      description: data?.description ?? "",

      inspirationLink: data?.inspirationLink ?? "",
      specialRequirements: data?.specialRequirements ?? "",

      status: data?.status ?? "New",

      createdAt: data?.createdAt
        ? data.createdAt.toDate().toISOString()
        : null,
    };

    return requirement;
  } catch (error) {
    console.error("getProjectRequirementById error:", error);
    return null;
  }
}