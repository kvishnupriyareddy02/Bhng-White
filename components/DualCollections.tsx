"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const bhangProducts = [
  {
    image: "/products/hoodie-01.jpg",
    title: "BHANG / 01",
    id: "bw-01",
  },
  {
    image: "/products/hoodie-03.jpg",
    title: "BHANG / 03",
    id: "bw-03",
  },
  {
    image: "/products/hoodie-05.jpg",
    title: "BHANG / 05",
    id: "bw-05",
  },
];

const whiteProducts = [
  {
    image: "/products/hoodie-02.jpg",
    title: "WHITE / 02",
    id: "bw-02",
  },
  {
    image: "/products/hoodie-04.jpg",
    title: "WHITE / 04",
    id: "bw-04",
  },
  {
    image: "/products/hoodie-06.jpg",
    title: "WHITE / 06",
    id: "bw-06",
  },
];

export default function DualCollections() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const openCollection = (side: "bhang" | "white") => {
    setIsTransitioning(true);

    setTimeout(() => {
      router.push(side === "bhang" ? "/bhang" : "/white");
    }, 500);
  };

  const openProduct = (id: string) => {
    setIsTransitioning(true);

    setTimeout(() => {
      router.push(`/product/${id}`);
    }, 500);
  };

  return (
    <section className="dual-collections">

      {/* =====================================================
          BHANG SIDE
      ===================================================== */}

      <div className="dual-side dual-bhang">

        <div className="dual-side-header">
          <p>01 / THE DARK SIDE</p>

          <h2
            style={{
              fontFamily: "Times New Roman, serif",
            }}
          >
            BHANG
          </h2>

          <p className="dual-description">
            STREET / RAW / UNFILTERED
          </p>
        </div>

        <div className="dual-products">

          {bhangProducts.map((product) => (
            <article
              className="dual-product"
              key={product.id}
              onClick={() => openProduct(product.id)}
            >

              <div className="dual-product-image">

                <img
                  src={product.image}
                  alt={product.title}
                />

                <span>BHANG</span>

              </div>

              <div className="dual-product-info">
                <span>{product.title}</span>
                <span>↗</span>
              </div>

            </article>
          ))}

        </div>

      </div>


      {/* =====================================================
          WHITE SIDE
      ===================================================== */}

      <div className="dual-side dual-white">

        <div className="dual-side-header">
          <p>02 / THE LIGHT SIDE</p>

          <h2
            style={{
              fontFamily: "Times New Roman, serif",
            }}
          >
            WHITE
          </h2>

          <p className="dual-description">
            CULTURE / FORM / FUTURE
          </p>
        </div>

        <div className="dual-products">

          {whiteProducts.map((product) => (
            <article
              className="dual-product"
              key={product.id}
              onClick={() => openProduct(product.id)}
            >

              <div className="dual-product-image">

                <img
                  src={product.image}
                  alt={product.title}
                />

                <span>WHITE</span>

              </div>

              <div className="dual-product-info">
                <span>{product.title}</span>
                <span>↗</span>
              </div>

            </article>
          ))}

        </div>

      </div>


      {/* =====================================================
          CAMPAIGN GATE
      ===================================================== */}

      <div className="dual-campaign">

        <div className="dual-campaign-label">
          <span>THE NEXT CHAPTER</span>
          <span>B&W / 002</span>
        </div>


        <div className="dual-campaign-split">

          {/* BHANG */}

          <button
            type="button"
            onClick={() => openCollection("bhang")}
            className="campaign-half campaign-bhang"
          >

            <img
              src="/products/hoodie-07.jpg"
              alt="Bhang collection"
            />

            <div className="campaign-overlay campaign-overlay-dark">

              <span className="campaign-side-name">
                BHANG
              </span>

              <span className="campaign-explore">
                EXPLORE MORE ↗
              </span>

            </div>

          </button>


          {/* WHITE */}

          <button
            type="button"
            onClick={() => openCollection("white")}
            className="campaign-half campaign-white"
          >

            <img
              src="/products/hoodie-09.jpg"
              alt="White collection"
            />

            <div className="campaign-overlay campaign-overlay-light">

              <span className="campaign-side-name">
                WHITE
              </span>

              <span className="campaign-explore">
                EXPLORE MORE ↗
              </span>

            </div>

          </button>


          <div className="campaign-seam" />

        </div>


        {/* CAMPAIGN CAPTION */}

        <div className="dual-campaign-caption">

          <div className="dual-campaign-caption-left">
            <span>TWO WORLDS</span>
            <span>ONE BRAND</span>
          </div>

          <p>
            CHOOSE YOUR SIDE.
            <br />
            ENTER THE WORLD.
          </p>

        </div>

      </div>


      {/* =====================================================
          FADE TRANSITION
      ===================================================== */}

      {isTransitioning && (
        <div className="collection-page-transition" />
      )}

    </section>
  );
}