"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cursor from "@/components/Cursor";

const WHTEProducts = [
  {
    image: "/products/hoodie-01.jpg",
    name: "B&W 01",
    number: "01",
  },
  {
    image: "/products/hoodie-02.jpg",
    name: "B&W 02",
    number: "02",
  },
  {
    image: "/products/hoodie-04.jpg",
    name: "B&W 04",
    number: "04",
  },
  {
    image: "/products/hoodie-06.jpg",
    name: "B&W 06",
    number: "06",
  },
  {
    image: "/products/hoodie-09.jpg",
    name: "B&W 09",
    number: "09",
  },
];

export default function WHTEPage() {
  const router = useRouter();
  const [isLeaving, setIsLeaving] = useState(false);

  const goHome = () => {
    setIsLeaving(true);

    setTimeout(() => {
      router.push("/");
    }, 600);
  };

  return (
    <>
      <Cursor />

      <main className="WHTE-page">

        {/* NAVIGATION */}
        <nav className="WHTE-nav">
          <button
            type="button"
            onClick={goHome}
            className="WHTE-logo"
          >
            B&W
          </button>

          <div className="WHTE-nav-right">
            <span>WHTE</span>
            <span>COLLECTION 001</span>
          </div>
        </nav>

        {/* HERO */}
        <section className="WHTE-hero">
          <div className="WHTE-hero-pattern" />

          <div className="WHTE-hero-content">
            <p className="WHTE-kicker">
              B&W / THE LIGHT SIDE / 001
            </p>

            <h1>WHTE</h1>

            <p className="WHTE-hero-description">
              ROOTED IN CULTURE.
              <br />
              MADE FOR NOW.
            </p>

            <div className="WHTE-scroll">
              <span>SCROLL TO ENTER</span>
              <span>↓</span>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="WHTE-intro">
          <p className="WHTE-intro-number">
            01
          </p>

          <h2>
            THE LIGHT
            <br />
            SIDE OF B&W
          </h2>

          <p className="WHTE-intro-copy">
            Tradition, identity and modern Indian
            expression brought together through
            a contemporary lens.
          </p>
        </section>

        {/* PRODUCTS */}
        <section className="WHTE-products">
          <div className="WHTE-section-heading">
            <span>THE COLLECTION</span>
            <span>05 PIECES</span>
          </div>

          <div className="WHTE-product-wall">
            {WHTEProducts.map((product) => (
              <Link
                key={product.number}
                href={`/product/bw-${product.number}`}
                className="WHTE-product-card"
              >
                <div className="WHTE-product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <span className="WHTE-product-number">
                    {product.number}
                  </span>
                </div>

                <div className="WHTE-product-info">
                  <span>{product.name}</span>
                  <span>WHTE ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* END */}
        <section className="WHTE-end">
          <p>THIS IS WHTE.</p>

          <h2>
            ROOTED
            <br />
            FORWARD.
          </h2>

          <button
            type="button"
            onClick={goHome}
            className="WHTE-back"
          >
            ← BACK TO B&W
          </button>
        </section>

      </main>

      {/* PAGE EXIT FADE */}
      {isLeaving && (
        <div className="collection-exit-transition" />
      )}
    </>
  );
}