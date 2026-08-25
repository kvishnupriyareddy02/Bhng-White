
"use client";

import Image from "next/image";
import { useRef } from "react";

const products = [
  { image: "/products/hoodie-01.jpg", name: "B&W 01", price: "₹2,499" },
  { image: "/products/hoodie-02.jpg", name: "B&W 02", price: "₹2,499" },
  { image: "/products/hoodie-03.jpg", name: "B&W 03", price: "₹2,699" },
  { image: "/products/hoodie-04.jpg", name: "B&W 04", price: "₹2,699" },
  { image: "/products/hoodie-05.jpg", name: "B&W 05", price: "₹2,799" },
  { image: "/products/hoodie-06.jpg", name: "B&W 06", price: "₹2,799" },
  { image: "/products/hoodie-07.jpg", name: "B&W 07", price: "₹2,499" },
  { image: "/products/hoodie-08.jpg", name: "B&W 08", price: "₹2,899" },
  { image: "/products/hoodie-09.jpg", name: "B&W 09", price: "₹2,699" },
  { image: "/products/hoodie-10.jpg", name: "B&W 10", price: "₹2,899" },
  { image: "/products/hoodie-11.jpg", name: "B&W 11", price: "₹2,999" },
  { image: "/products/hoodie-12.jpg", name: "B&W 12", price: "₹2,799" },
  { image: "/products/hoodie-13.jpg", name: "B&W 13", price: "₹2,499" },
  { image: "/products/hoodie-14.jpg", name: "B&W 14", price: "₹2,899" },
  { image: "/products/hoodie-15.jpg", name: "B&W 15", price: "₹2,999" },
];

function ProductCard({
  product,
  className = "",
  number,
}: {
  product: (typeof products)[number];
  className?: string;
  number: string;
}) {
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`cyber-product group ${className}`}
    >
      <div className="cyber-image-wrap">

        {/* MOUSE FOLLOWING NEON */}
        <div className="cyber-cursor-glow" />

        <Image
          src={product.image}
          alt={product.name}
          width={1400}
          height={1700}
          className="cyber-image"
        />

        {/* GLITCH DUPLICATES */}
        <div className="cyber-glitch-image cyber-glitch-pink">
          <Image
            src={product.image}
            alt=""
            width={1400}
            height={1700}
          />
        </div>

        <div className="cyber-glitch-image cyber-glitch-cyan">
          <Image
            src={product.image}
            alt=""
            width={1400}
            height={1700}
          />
        </div>

        {/* CORNER UI */}
        <div className="cyber-corner cyber-corner-tl" />
        <div className="cyber-corner cyber-corner-tr" />
        <div className="cyber-corner cyber-corner-bl" />
        <div className="cyber-corner cyber-corner-br" />

        {/* PRODUCT INFO */}
        <div className="cyber-product-info">
          <div>
            <p className="cyber-product-name">{product.name}</p>

            <p className="cyber-product-sub">
              BHANG // WHITE
            </p>
          </div>

          <p className="cyber-price">
            {product.price}
          </p>
        </div>

        {/* INDEX */}
        <div className="cyber-index">
          NO.{number}
        </div>

        {/* SCAN */}
        <div className="cyber-scan" />

        {/* GLITCH BARS */}
        <div className="cyber-glitch-bars">
          <span />
          <span />
          <span />
        </div>

      </div>
    </article>
  );
}

export default function ProductSection() {
  return (
    <section
      id="shop"
      className="cyber-section relative overflow-hidden bg-black text-white"
    >

      {/* BACKGROUND */}
      <div className="cyber-background" aria-hidden="true">
        <div className="cyber-grid" />
        <div className="cyber-grid cyber-grid-secondary" />

        <div className="cyber-glow cyber-glow-one" />
        <div className="cyber-glow cyber-glow-two" />

        <div className="cyber-scanlines" />
        <div className="cyber-noise" />
      </div>

      {/* HUD */}
      <div className="relative z-10 px-5 pt-24 md:px-10 md:pt-32">
        <div className="cyber-hud mx-auto flex max-w-[1800px] items-center justify-between">
          <span>B&W // SYSTEM_001</span>

          <span className="hidden md:block">
            SIGNAL: <strong>ACTIVE</strong>
          </span>

          <span>15 / 15</span>
        </div>
      </div>

      {/* TITLE */}
      <header className="relative z-10 mx-auto max-w-[1800px] px-5 pb-24 pt-20 md:px-10 md:pb-40 md:pt-28">

        <div className="relative">

          <p className="cyber-eyebrow mb-5">
            BHANG & WHITE / COLLECTION_ARCHIVE
          </p>

          <h2
            className="cyber-title"
            data-text="THE DROP"
            style={{
              fontFamily: "Times New Roman, serif",
            }}
          >
            THE DROP
          </h2>

          <div className="cyber-title-tag">
            DROP_001
          </div>

          <p className="cyber-title-description">
            A VISUAL INTERFERENCE BETWEEN
            <br />
            BHANG / WHITE / NOISE / CULTURE
          </p>

        </div>

      </header>

      {/* EDITORIAL WALL */}
      <div className="relative z-10 mx-auto max-w-[1800px] px-5 md:px-10">

        {/* ROW 01 */}
        <div className="cyber-row cyber-row-one">

          <ProductCard
            product={products[0]}
            number="01"
            className="cyber-card-01"
          />

          <div className="cyber-floating-label cyber-label-one">
            <span>VISUAL_01</span>
            <span>ONLINE</span>
          </div>

          <ProductCard
            product={products[1]}
            number="02"
            className="cyber-card-02"
          />

        </div>

        {/* ROW 02 */}
        <div className="cyber-row cyber-row-two">

          <ProductCard
            product={products[2]}
            number="03"
            className="cyber-card-03"
          />

          <div className="cyber-giant-text">
            B&W
          </div>

          <ProductCard
            product={products[3]}
            number="04"
            className="cyber-card-04"
          />

        </div>

        {/* ROW 03 */}
        <div className="cyber-row cyber-row-three">

          <ProductCard
            product={products[4]}
            number="05"
            className="cyber-card-05"
          />

          <ProductCard
            product={products[5]}
            number="06"
            className="cyber-card-06"
          />

          <div className="cyber-system-box">
            <span>ARCHIVE</span>
            <strong>06</strong>
            <small>OBJECTS DETECTED</small>
          </div>

        </div>

        {/* FEATURE */}
        <div className="cyber-feature">

          <div className="cyber-feature-header">
            <span>FEATURED_SIGNAL</span>
            <span>08 // 15</span>
          </div>

          <ProductCard
            product={products[7]}
            number="08"
            className="cyber-card-feature"
          />

          <div className="cyber-feature-word">
            SIGNAL
          </div>

        </div>

        {/* ROW 04 */}
        <div className="cyber-row cyber-row-four">

          <ProductCard
            product={products[6]}
            number="07"
            className="cyber-card-07"
          />

          <ProductCard
            product={products[8]}
            number="09"
            className="cyber-card-09"
          />

          <ProductCard
            product={products[9]}
            number="10"
            className="cyber-card-10"
          />

        </div>

        {/* ROW 05 */}
        <div className="cyber-row cyber-row-five">

          <div className="cyber-side-text">
            <span>BHANG</span>
            <span>WHITE</span>
            <span>2026</span>
          </div>

          <ProductCard
            product={products[10]}
            number="11"
            className="cyber-card-11"
          />

          <ProductCard
            product={products[11]}
            number="12"
            className="cyber-card-12"
          />

        </div>

        {/* TYPOGRAPHY BREAK */}
        <div className="cyber-break">

          <div className="cyber-break-line" />

          <p
            className="cyber-break-text"
            style={{
              fontFamily: "Times New Roman, serif",
            }}
          >
            WEAR
            <br />
            THE
            <br />
            NOISE.
          </p>

          <div className="cyber-break-meta">
            <span>TRANSMISSION_013</span>
            <span>NO SIGNAL / NO RULES</span>
          </div>

          <div className="cyber-break-line" />

        </div>

        {/* FINAL CLUSTER */}
        <div className="cyber-row cyber-final-cluster">

          <ProductCard
            product={products[12]}
            number="13"
            className="cyber-card-13"
          />

          <ProductCard
            product={products[13]}
            number="14"
            className="cyber-card-14"
          />

          <ProductCard
            product={products[14]}
            number="15"
            className="cyber-card-15"
          />

        </div>

        {/* FINAL FEATURE */}
        <div className="cyber-final-feature">

          <div className="cyber-final-label">
            <span>END_TRANSMISSION</span>
            <span>B&W_015</span>
          </div>

          <ProductCard
            product={products[14]}
            number="15"
            className="cyber-card-final"
          />

        </div>

      </div>

      {/* FOOTER */}
      <footer className="relative z-10 px-5 pb-32 pt-32 md:px-10 md:pb-48">

        <div className="cyber-footer mx-auto max-w-[1800px]">

          <div className="cyber-footer-status">
            <span className="cyber-status-dot" />
            SYSTEM ONLINE
          </div>

          <p
            className="cyber-footer-title"
            style={{
              fontFamily: "Times New Roman, serif",
            }}
          >
            END OF DROP
          </p>

          <div className="cyber-footer-bottom">
            <span>B&W / BHANG & WHITE</span>
            <span>DROP_001 / 2026</span>
            <span>END_TRANSMISSION</span>
          </div>

        </div>

      </footer>

    </section>
  );
}
