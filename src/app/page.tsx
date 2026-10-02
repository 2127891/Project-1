import Image from "next/image";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { Reveal } from "@/components/reveal";
import { products } from "@/lib/products";

const categories = [
  { name: "Keyboards", count: "04 objects", image: "photo-1587829741301-dc798b83add3" },
  { name: "Mice", count: "06 objects", image: "photo-1527814050087-3793815479db" },
  { name: "Audio", count: "03 objects", image: "photo-1599669454699-248893623440" },
];

const storeSchema = {
  "@context": "https://schema.org",
  "@type": "OnlineStore",
  name: "LEVEL Studio",
  description: "Considered equipment for the modern player.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Gaming equipment",
    itemListElement: products.map((product) => ({
      "@type": "Product",
      name: product.name,
      image: `https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=900&q=85`,
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: product.price.toFixed(2),
        availability: "https://schema.org/InStock",
      },
    })),
  },
};

function imageUrl(id: string, width: number) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }} />
      <section className="hero-shell" aria-labelledby="hero-title" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Independent gaming equipment / est. 2018</p>
          <h1 id="hero-title">Play with<br />intention<span className="hero-period">.</span></h1>
          <div className="hero-bottomline">
            <p>Good gear gets out of the way.<br />Great gear changes everything.</p>
            <a className="round-link" href="#featured" aria-label="Explore the collection"><span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <Image src={imageUrl("photo-1593305841991-05c297ba4575", 1800)} alt="A considered gaming setup with a wide monitor and ambient light" fill priority sizes="(max-width: 760px) 100vw, 58vw" className="hero-image" />
          <div className="hero-image-shade" />
          <div className="hero-stamp"><span>FORM</span><span>FOLLOWS</span><span>FOCUS.</span></div>
          <p className="hero-caption">01 / THE OBJECTIVE IS YOURS</p>
        </div>
        <div className="hero-index"><span>01</span><span className="index-line" /><span>04</span></div>
      </section>

      <section className="ticker" aria-label="Store benefits"><div className="ticker-track">
        {Array.from({ length: 2 }, (_, index) => <span className="ticker-group" key={index}>
          <span>Made for the long game</span><i /><span>Free EU shipping over €100</span><i /><span>Designed in Copenhagen</span><i /><span>Two-year warranty, always</span><i />
        </span>)}
      </div></section>

      <section className="section-block featured-section" id="featured" aria-labelledby="featured-title">
        <Reveal className="section-heading"><div><p className="eyebrow">01 / Considered equipment</p><h2 id="featured-title">The daily players<span>.</span></h2></div><a className="text-link" href="#categories">View the collection <span aria-hidden="true">↗</span></a></Reveal>
        <div className="product-grid">{products.map((product, index) => <Reveal className="product-card" delay={index * 90} key={product.id}>
          <a className={`product-image ${product.tone}`} href="#categories" aria-label={`Discover ${product.name}`}>
            <span className="product-label">{product.label}</span>
            <Image src={imageUrl(product.image, 900)} alt={product.alt} fill sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 25vw" />
            <span className="product-arrow" aria-hidden="true">↗</span>
          </a>
          <div className="product-details"><div><h3>{product.name}</h3><p>{product.category}</p></div><span className="product-price">€{product.price.toFixed(2)}</span></div>
          <AddToCartButton product={product} />
        </Reveal>)}</div>
      </section>

      <section className="manifesto" aria-labelledby="manifesto-title" id="manifesto">
        <div className="manifesto-image"><Image src={imageUrl("photo-1542751371-adc38448a05e", 1600)} alt="Players competing in a focused esports arena" fill sizes="(max-width: 760px) 100vw, 50vw" /><span className="image-note">BUILT FOR THE MOMENT BEFORE</span></div>
        <Reveal className="manifesto-copy"><p className="eyebrow">02 / A different kind of advantage</p><h2 id="manifesto-title">Less noise.<br />More <span>signal.</span></h2><p className="manifesto-description">We make tools for people who care about the details. Honest materials, useful engineering, and nothing that doesn’t need to be there.</p><a className="text-link" href="#categories">What we believe <span aria-hidden="true">↗</span></a><span className="manifesto-mark" aria-hidden="true">L.</span></Reveal>
      </section>

      <section className="section-block category-section" id="categories" aria-labelledby="category-title">
        <Reveal className="section-heading"><div><p className="eyebrow">03 / Find your instrument</p><h2 id="category-title">Choose your focus<span>.</span></h2></div><p className="section-aside">Purpose-built essentials.<br />Nothing more, nothing less.</p></Reveal>
        <div className="category-grid">{categories.map((category, index) => <Reveal className="category-card" delay={index * 100} key={category.name}>
          <a href="#featured" aria-label={`Browse ${category.name}`}><Image src={imageUrl(category.image, 1000)} alt={`${category.name} gaming equipment`} fill sizes="(max-width: 760px) 100vw, 33vw" /><span className="category-number">0{index + 1}</span><span className="category-info"><span><strong>{category.name}</strong><small>{category.count}</small></span><span className="category-arrow" aria-hidden="true">↗</span></span></a>
        </Reveal>)}</div>
      </section>

      <section className="service-strip" aria-label="Our service promise" id="service">
        <div><span className="service-icon">01</span><p><strong>Free EU delivery</strong><span>On every order over €100</span></p></div>
        <div><span className="service-icon">02</span><p><strong>Play it your way</strong><span>30-day considered returns</span></p></div>
        <div><span className="service-icon">03</span><p><strong>Here for the long game</strong><span>Two-year product warranty</span></p></div>
      </section>
    </>
  );
}
