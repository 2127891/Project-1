"use client";

import { useState } from "react";
import { useStorefront } from "@/components/storefront-provider";
import type { Product } from "@/lib/products";

export function AddToCartButton({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);
  const { add } = useStorefront();
  return <button className={`add-button${added ? " is-added" : ""}`} onClick={() => { add(product); setAdded(true); }} aria-label={`${added ? "Add another" : "Add"} ${product.name} to basket`}>
    <span>{added ? "Added to basket" : "Add to basket"}</span><span aria-hidden="true">{added ? "✓" : "+"}</span>
  </button>;
}