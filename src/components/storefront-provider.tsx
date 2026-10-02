"use client";

import Image from "next/image";
import { createContext, useContext, useState, type ReactNode } from "react";
import type { Product } from "@/lib/products";

type CartLine = { product: Product; quantity: number };
type StorefrontContextValue = { count: number; lines: CartLine[]; open: boolean; add: (product: Product) => void; setOpen: (open: boolean) => void };
const StorefrontContext = createContext<StorefrontContextValue | null>(null);

export function useStorefront() {
  const context = useContext(StorefrontContext);
  if (!context) throw new Error("useStorefront must be used within StorefrontProvider");
  return context;
}

export function StorefrontProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const count = lines.reduce((total, line) => total + line.quantity, 0);
  const add = (product: Product) => setLines((current) => {
    const existing = current.find((line) => line.product.id === product.id);
    return existing
      ? current.map((line) => line.product.id === product.id ? { ...line, quantity: line.quantity + 1 } : line)
      : [...current, { product, quantity: 1 }];
  });

  return <StorefrontContext.Provider value={{ count, lines, open, add, setOpen }}>{children}{open && <CartPanel />}</StorefrontContext.Provider>;
}

function CartPanel() {
  const { lines, setOpen } = useStorefront();
  const total = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
  return <>
    <button className="cart-backdrop" aria-label="Close basket" onClick={() => setOpen(false)} />
    <aside className="cart-panel" role="dialog" aria-modal="true" aria-labelledby="cart-title">
      <div className="cart-heading"><div><p>Your selection</p><h2 id="cart-title">The basket</h2></div><button className="cart-close" onClick={() => setOpen(false)} aria-label="Close basket">×</button></div>
      {lines.length === 0 ? <p className="cart-empty">Your basket is taking a breather.</p> : <>
        <div className="cart-lines">{lines.map(({ product, quantity }) => <div className="cart-line" key={product.id}>
          <div className="cart-thumb"><Image src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=200&q=75`} alt="" fill sizes="72px" /></div>
          <div><h3>{product.name}</h3><p>Quantity {quantity}</p></div><strong>€{(product.price * quantity).toFixed(2)}</strong>
        </div>)}</div>
        <div className="cart-total"><span>Subtotal</span><strong>€{total.toFixed(2)}</strong></div>
        <button className="checkout-button" onClick={() => setOpen(false)}>Continue to checkout <span aria-hidden="true">↗</span></button>
      </>}
    </aside>
  </>;
}