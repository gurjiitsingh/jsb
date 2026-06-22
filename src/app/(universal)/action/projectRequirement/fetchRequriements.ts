"use server";

import { adminDb } from "@/lib/firebaseAdmin";
import { TProjectRequirement } from "../../../../../types/projectRequerments";


export async function fetchProjectRequirements(): Promise<
  TProjectRequirement[]
> {
  try {
    const snapshot = await adminDb
      .collection("projectRequirements")
      .orderBy("createdAt", "desc")
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<
        TProjectRequirement,
        "id"
      >),
    }));
  } catch (error) {
    console.error(
      "Error fetching project requirements:",
      error
    );

    return [];
  }
}