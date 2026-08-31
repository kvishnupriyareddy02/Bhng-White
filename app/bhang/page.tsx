"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cursor from "@/components/Cursor";

const BHNGProducts = [
  {
    image: "/products/hoodie-07.jpg",
    name: "B&W 07",
    number: "07",
  },
  {
    image: "/products/hoodie-08.jpg",
    name: "B&W 08",
    number: "08",
  },
  {
    image: "/products/hoodie-10.jpg",
    name: "B&W 10",
    number: "10",
  },
  {
    image: "/products/hoodie-11.jpg",
    name: "B&W 11",
    number: "11",
  },
  {
    image: "/products/hoodie-13.jpg",
    name: "B&W 13",
    number: "13",
  },
];

export default function BHNGPage() {
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

      <main className="BHNG-page">

        {/* NAVIGATION */}
        <nav className="BHNG-nav">
          <button
            type="button"
            onClick={goHome}
            className="BHNG-logo"
          >
            B&W
          </button>

          <div className="BHNG-nav-right">
            <span>BHNG</span>
            <span>COLLECTION 001</span>
          </div>
        </nav>

        {/* HERO */}
        <section className="BHNG-hero">
          <div className="BHNG-hero-background" />

          <div className="BHNG-hero-content">
            <p className="BHNG-kicker">
              B&W / THE DARK SIDE / 001
            </p>

            <h1>BHNG</h1>

            <p className="BHNG-hero-description">
              RAW ENERGY.
              <br />
              NO FILTER.
            </p>

            <div className="BHNG-scroll">
              <span>SCROLL TO ENTER</span>
              <span>↓</span>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="BHNG-intro">
          <p className="BHNG-intro-number">
            01
          </p>

          <h2>
            THE DARK
            <br />
            SIDE OF B&W
          </h2>

          <p className="BHNG-intro-copy">
            A collection built around movement,
            rebellion and the energy that refuses
            to stay quiet.
          </p>
        </section>

        {/* PRODUCTS */}
        <section className="BHNG-products">
          <div className="BHNG-section-heading">
            <span>THE COLLECTION</span>
            <span>05 PIECES</span>
          </div>

          <div className="BHNG-product-wall">
            {BHNGProducts.map((product) => (
              <Link
                key={product.number}
                href={`/product/bw-${product.number}`}
                className="BHNG-product-card"
              >
                <div className="BHNG-product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <span className="BHNG-product-number">
                    {product.number}
                  </span>
                </div>

                <div className="BHNG-product-info">
                  <span>{product.name}</span>
                  <span>BHNG ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* END */}
        <section className="BHNG-end">
          <p>THIS IS BHNG.</p>

          <h2>
            STAY
            <br />
            UNFILTERED.
          </h2>

          <button
            type="button"
            onClick={goHome}
            className="BHNG-back"
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