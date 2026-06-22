"use server";

import { adminDb } from "@/lib/firebaseAdmin";
import { projectRequirementDataT, TProjectRequirement } from "../../../../../types/projectRequerments";

type Props = {
  afterId?: string;
  pageSize?: number;
};

export async function fetchProjectRequirementsPaginated({
  afterId,
  pageSize = 10,
}: Props) {
  try {
    let query = adminDb
      .collection("projectRequirements")
      .orderBy("createdAt", "desc")
      .limit(pageSize);

    if (afterId) {
      const afterDoc = await adminDb
        .collection("projectRequirements")
        .doc(afterId)
        .get();

      if (afterDoc.exists) {
        query = query.startAfter(afterDoc);
      }
    }

    const snapshot = await query.get();

    const requirements = snapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        clientName: data.clientName ?? "",
        email: data.email ?? "",
        phone: data.phone ?? "",

        city: data.city ?? "",
        state: data.state ?? "",
        address: data.address ?? "",

        projectType: data.projectType ?? "",
        propertySize: data.propertySize ?? "",
        numberOfFloors: data.numberOfFloors ?? "",

        budgetRange: data.budgetRange ?? "",

        expectedStartDate: data.expectedStartDate ?? "",
        expectedCompletion: data.expectedCompletion ?? "",

        services: data.services ?? [],

        description: data.description ?? "",

        inspirationLink: data.inspirationLink ?? "",
        specialRequirements: data.specialRequirements ?? "",

        status: data.status ?? "New",

        // Convert Firestore Timestamp -> string
        createdAt: data.createdAt
          ? data.createdAt.toDate().toISOString()
          : null,
      } as projectRequirementDataT ;
    });

    const lastId =
      snapshot.docs.length > 0
        ? snapshot.docs[snapshot.docs.length - 1].id
        : null;

    return {
      requirements,
      lastId,
    };
  } catch (error) {
    console.error("fetchProjectRequirementsPaginated error:", error);

    return {
      requirements: [],
      lastId: null,
    };
  }
}