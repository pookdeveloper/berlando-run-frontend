"use client";

import * as Popover from "@radix-ui/react-popover";
import type { RunClub } from "@/lib/types";

type RunClubPopoverProps = {
  club: RunClub;
};

export function RunClubPopover({ club }: RunClubPopoverProps) {
  return (
    <Popover.Root>
      <Popover.Trigger className="city-chip" style={{ width: "100%" }}>
        <strong>{club.city}</strong>
        <div style={{ color: "#b7bdb6", marginTop: "0.4rem", fontSize: "0.85rem" }}>{club.country}</div>
        <div style={{ color: "#d8ddd7", marginTop: "0.5rem", fontSize: "0.85rem" }}>{club.schedule}</div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="card"
          sideOffset={8}
          style={{ zIndex: 50, maxWidth: "260px", borderRadius: "0.28rem" }}
        >
          <p style={{ margin: "0 0 0.4rem", fontWeight: 700 }}>{club.city} Run Club</p>
          <p style={{ margin: "0 0 0.4rem", color: "#d5dbd4" }}>{club.country}</p>
          <p style={{ margin: "0 0 0.4rem", color: "#d5dbd4" }}>{club.schedule}</p>
          <p style={{ margin: 0, color: "#adb4ad", fontSize: "0.85rem" }}>
            Coordinates: {club.coordinates.lat.toFixed(2)}, {club.coordinates.lng.toFixed(2)}
          </p>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
