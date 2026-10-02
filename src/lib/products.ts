export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  alt: string;
  label: string;
  tone: string;
};

export const products: Product[] = [
  { id: "key-01", name: "Form 01 Keyboard", category: "Mechanical / 75% / Tactile", price: 189, image: "photo-1587829741301-dc798b83add3", alt: "Close-up of a mechanical keyboard with sculpted keycaps", label: "Best seller", tone: "tone-moss" },
  { id: "mouse-02", name: "Arc Wireless", category: "Wireless / 54g / Optical", price: 119, image: "photo-1527814050087-3793815479db", alt: "Minimal computer mouse on a clean desk", label: "New colour", tone: "tone-clay" },
  { id: "audio-03", name: "Studio Headset", category: "Wireless / Spatial / 32h", price: 229, image: "photo-1599669454699-248893623440", alt: "Over-ear headphones viewed against a neutral background", label: "Designed for focus", tone: "tone-sky" },
  { id: "mouse-04", name: "Arc Mini", category: "Wired / 49g / Optical", price: 89, image: "photo-1615663245857-ac93bb7c39e7", alt: "Precision gaming mouse on a dark surface", label: "Light in hand", tone: "tone-coral" },
];