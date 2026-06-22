// lib/types/projectRequirementType.ts

import { z } from "zod";



export type projectRequirementDataT = {
  id: string;

  // Client Details
  clientName: string;
  email: string;
  phone: string;

  // Location
  city: string;
  state: string;
  address: string;

  // Project Details
  projectType: string;
  propertySize: string;
  numberOfFloors: string;

  // Budget
  budgetRange: string;

  // Timeline
  expectedStartDate: string;
  expectedCompletion: string;

  // Services Required
  services: string[];

  // Description
  description: string;

  // Additional Information
  inspirationLink: string;
  specialRequirements: string;

  // Status
  status:
    | "New"
    | "Contacted"
    | "Meeting Scheduled"
    | "Quotation Sent"
    | "In Progress"
    | "Completed"
    | "Rejected";

  // Firestore timestamp converted to ISO string
  createdAt: string | null;
};

export const projectRequirementSchema = z.object({
  id: z.string().optional(),
  clientName: z.string().min(2),
  email: z.string().optional(),
  phone: z.string().min(8),

  city: z.string().optional(),
  state: z.string().optional(),
  address: z.string().optional(),

  projectType: z.string(),
  propertySize: z.string().optional(),
  numberOfFloors: z.string().optional(),

  budgetRange: z.string(),

  expectedStartDate: z.string().optional(),
  expectedCompletion: z.string().optional(),

  description: z.string().min(10),

  inspirationLink: z.string().optional(),
  specialRequirements: z.string().optional(),

  services: z.array(z.string()),

  status: z.string(),
});

export type TProjectRequirement = z.infer<
  typeof projectRequirementSchema
>;