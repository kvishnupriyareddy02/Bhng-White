"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cursor from "@/components/Cursor";

const whiteProducts = [
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

export default function WhitePage() {
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

      <main className="white-page">

        {/* NAVIGATION */}
        <nav className="white-nav">
          <button
            type="button"
            onClick={goHome}
            className="white-logo"
          >
            B&W
          </button>

          <div className="white-nav-right">
            <span>WHITE</span>
            <span>COLLECTION 001</span>
          </div>
        </nav>

        {/* HERO */}
        <section className="white-hero">
          <div className="white-hero-pattern" />

          <div className="white-hero-content">
            <p className="white-kicker">
              B&W / THE LIGHT SIDE / 001
            </p>

            <h1>WHITE</h1>

            <p className="white-hero-description">
              ROOTED IN CULTURE.
              <br />
              MADE FOR NOW.
            </p>

            <div className="white-scroll">
              <span>SCROLL TO ENTER</span>
              <span>↓</span>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="white-intro">
          <p className="white-intro-number">
            01
          </p>

          <h2>
            THE LIGHT
            <br />
            SIDE OF B&W
          </h2>

          <p className="white-intro-copy">
            Tradition, identity and modern Indian
            expression brought together through
            a contemporary lens.
          </p>
        </section>

        {/* PRODUCTS */}
        <section className="white-products">
          <div className="white-section-heading">
            <span>THE COLLECTION</span>
            <span>05 PIECES</span>
          </div>

          <div className="white-product-wall">
            {whiteProducts.map((product) => (
              <Link
                key={product.number}
                href={`/product/bw-${product.number}`}
                className="white-product-card"
              >
                <div className="white-product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <span className="white-product-number">
                    {product.number}
                  </span>
                </div>

                <div className="white-product-info">
                  <span>{product.name}</span>
                  <span>WHITE ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* END */}
        <section className="white-end">
          <p>THIS IS WHITE.</p>

          <h2>
            ROOTED
            <br />
            FORWARD.
          </h2>

          <button
            type="button"
            onClick={goHome}
            className="white-back"
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