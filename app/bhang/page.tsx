"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cursor from "@/components/Cursor";

const bhangProducts = [
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

export default function BhangPage() {
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

      <main className="bhang-page">

        {/* NAVIGATION */}
        <nav className="bhang-nav">
          <button
            type="button"
            onClick={goHome}
            className="bhang-logo"
          >
            B&W
          </button>

          <div className="bhang-nav-right">
            <span>BHANG</span>
            <span>COLLECTION 001</span>
          </div>
        </nav>

        {/* HERO */}
        <section className="bhang-hero">
          <div className="bhang-hero-background" />

          <div className="bhang-hero-content">
            <p className="bhang-kicker">
              B&W / THE DARK SIDE / 001
            </p>

            <h1>BHANG</h1>

            <p className="bhang-hero-description">
              RAW ENERGY.
              <br />
              NO FILTER.
            </p>

            <div className="bhang-scroll">
              <span>SCROLL TO ENTER</span>
              <span>↓</span>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="bhang-intro">
          <p className="bhang-intro-number">
            01
          </p>

          <h2>
            THE DARK
            <br />
            SIDE OF B&W
          </h2>

          <p className="bhang-intro-copy">
            A collection built around movement,
            rebellion and the energy that refuses
            to stay quiet.
          </p>
        </section>

        {/* PRODUCTS */}
        <section className="bhang-products">
          <div className="bhang-section-heading">
            <span>THE COLLECTION</span>
            <span>05 PIECES</span>
          </div>

          <div className="bhang-product-wall">
            {bhangProducts.map((product) => (
              <Link
                key={product.number}
                href={`/product/bw-${product.number}`}
                className="bhang-product-card"
              >
                <div className="bhang-product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <span className="bhang-product-number">
                    {product.number}
                  </span>
                </div>

                <div className="bhang-product-info">
                  <span>{product.name}</span>
                  <span>BHANG ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* END */}
        <section className="bhang-end">
          <p>THIS IS BHANG.</p>

          <h2>
            STAY
            <br />
            UNFILTERED.
          </h2>

          <button
            type="button"
            onClick={goHome}
            className="bhang-back"
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