"use client";

import dynamic from "next/dynamic";

const RunClubMap = dynamic(
  () => import("@/components/RunClubMap").then((module) => module.RunClubMap),
  {
    ssr: false
  }
);

export function RunClubMapClient() {
  return <RunClubMap />;
}
