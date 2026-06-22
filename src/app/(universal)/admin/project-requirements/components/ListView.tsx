"use client";

import React, {
  useEffect,
  useState,
} from "react";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import TableRows from "./TableRows";
import { projectRequirementDataT, TProjectRequirement } from "../../../../../../types/projectRequerments";
import { fetchProjectRequirementsPaginated } from "@/app/(universal)/action/projectRequirement/fetchProjectRequirementsPaginated";


const ITEMS_PER_PAGE = 10;

export default function ListView() {
  const [
    requirementData,
    setRequirementData,
  ] = useState<projectRequirementDataT[]>(
    []
  );

  const [lastId, setLastId] =
    useState<string | null>(null);

  const [afterStack, setAfterStack] =
    useState<string[]>([]);

  const [loading, setLoading] =
    useState(false);

  const [pageIndex, setPageIndex] =
    useState(0);

  useEffect(() => {
    loadRequirements();
  }, []);

  async function loadRequirements(
    next = false,
    back = false
  ) {
    setLoading(true);

    let afterId:
      | string
      | undefined = undefined;

    let newStack = [...afterStack];

    if (next && lastId) {
      newStack.push(lastId);

      afterId = lastId;

      setPageIndex((prev) => prev + 1);
    } else if (
      back &&
      newStack.length > 0
    ) {
      newStack.pop();

      afterId =
        newStack[newStack.length - 1];

      setPageIndex((prev) => prev - 1);
    }

    setAfterStack(newStack);

    const {
      requirements,
      lastId: newLastId,
    } =
      await fetchProjectRequirementsPaginated(
        {
          afterId,
          pageSize: ITEMS_PER_PAGE,
        }
      );

    setRequirementData(requirements);

    setLastId(newLastId);

    setLoading(false);
  }

  return (
    <div className="mt-2">
      <div className="overflow-x-auto rounded-xl border bg-white shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                Client
              </TableHead>

              <TableHead>
                Phone
              </TableHead>

              <TableHead>
                City
              </TableHead>

              <TableHead>
                Project Type
              </TableHead>

              <TableHead>
                Budget
              </TableHead>

              <TableHead>
                Status
              </TableHead>

              <TableHead>
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {loading ? (
              <TableRow>
                <td
                  colSpan={7}
                  className="py-4 text-center"
                >
                  Loading...
                </td>
              </TableRow>
            ) : requirementData.length ===
              0 ? (
              <TableRow>
                <td
                  colSpan={7}
                  className="py-4 text-center"
                >
                  No requirements found.
                </td>
              </TableRow>
            ) : (
              requirementData.map(
                (req) => (
                  <TableRows
                    key={req.id}
                    req={req}
                  />
                )
              )
            )}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex justify-between">
        <button
          onClick={() =>
            loadRequirements(
              false,
              true
            )
          }
          disabled={pageIndex === 0}
          className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
        >
          ⬅️ Newer
        </button>

        <button
          onClick={() =>
            loadRequirements(
              true,
              false
            )
          }
          disabled={
            requirementData.length <
            ITEMS_PER_PAGE
          }
          className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
        >
          Older ➡️
        </button>
      </div>
    </div>
  );
}