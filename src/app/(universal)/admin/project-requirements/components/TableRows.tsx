"use client";

import {
  TableCell,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import { projectRequirementDataT, TProjectRequirement } from "../../../../../../types/projectRequerments";



type Props = {
  req: projectRequirementDataT;
};

export default function TableRows({
  req,
}: Props) {
  return (
    <TableRow>
      <TableCell>
        {req.clientName}
      </TableCell>

      <TableCell>
        {req.phone}
      </TableCell>

      <TableCell>
        {req.city}
      </TableCell>

      <TableCell>
        {req.projectType}
      </TableCell>

      <TableCell>
        {req.budgetRange}
      </TableCell>

      <TableCell>
        {req.status}
      </TableCell>

      <TableCell>
        <Link
          href={`/admin/project-requirements/${req.id}`}
          className="text-blue-600"
        >
          View
        </Link>
      </TableCell>
    </TableRow>
  );
}