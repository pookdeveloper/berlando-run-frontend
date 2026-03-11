"use client";

import * as Tabs from "@radix-ui/react-tabs";
import type { Product } from "@/lib/types";

type ProductTabsProps = {
  product: Product;
};

export function ProductTabs({ product }: ProductTabsProps) {
  return (
    <Tabs.Root defaultValue="story" style={{ marginTop: "1.5rem" }}>
      <Tabs.List
        aria-label="Product details tabs"
        style={{ display: "flex", gap: "0.5rem", marginBottom: "0.9rem" }}
      >
        <Tabs.Trigger className="btn btn-secondary" value="story">
          Product Story
        </Tabs.Trigger>
        <Tabs.Trigger className="btn btn-secondary" value="material">
          Material Story
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="story" className="card" style={{ padding: "0.9rem" }}>
        <p style={{ color: "#d3d8d2", lineHeight: 1.65, margin: 0 }}>{product.productStory}</p>
      </Tabs.Content>
      <Tabs.Content value="material" className="card" style={{ padding: "0.9rem" }}>
        <p style={{ color: "#d3d8d2", lineHeight: 1.65, margin: 0 }}>{product.materialStory}</p>
      </Tabs.Content>
    </Tabs.Root>
  );
}
