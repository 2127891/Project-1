"use client";

import { useState } from "react";
import { useStorefront } from "@/components/storefront-provider";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, setOpen } = useStorefront();
  const closeMenu = () => setMenuOpen(false);
  return <header className="site-header">
    <a className="wordmark" href="#top" aria-label="LEVEL Studio home"><span className="wordmark-symbol">L.</span><span>LEVEL<small>STUDIO / COPENHAGEN</small></span></a>
    <nav className={`desktop-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
      <a href="#featured" onClick={closeMenu}>Shop all</a><a href="#categories" onClick={closeMenu}>Keyboards</a><a href="#categories" onClick={closeMenu}>Mice & audio</a><a href="#manifesto-title" onClick={closeMenu}>Our approach</a>
    </nav>
    <div className="header-actions"><span className="header-note">EU / EUR €</span><button className="cart-trigger" onClick={() => setOpen(true)} aria-label={`Open basket, ${count} items`}>Basket <span>({count.toString().padStart(2, "0")})</span></button><button className="menu-trigger" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? "Close" : "Menu"}</button></div>
  </header>;
}