"use client";

import { useRowLabel } from "@payloadcms/ui";

const RowLabel = () => {
  const { data } = useRowLabel() as { data: { label: string } };
  console.log("data", data); // Returns empty
  return <div>{data?.label || "Menu item"}</div>; // Dispays "Main item"
};

export default RowLabel;
