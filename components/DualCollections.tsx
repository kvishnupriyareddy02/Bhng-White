"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const BHNGProducts = [
  {
    image: "/products/hoodie-01.jpg",
    title: "BHNG / 01",
    id: "bw-01",
  },
  {
    image: "/products/hoodie-03.jpg",
    title: "BHNG / 03",
    id: "bw-03",
  },
  {
    image: "/products/hoodie-05.jpg",
    title: "BHNG / 05",
    id: "bw-05",
  },
];

const WHTEProducts = [
  {
    image: "/products/hoodie-02.jpg",
    title: "WHTE / 02",
    id: "bw-02",
  },
  {
    image: "/products/hoodie-04.jpg",
    title: "WHTE / 04",
    id: "bw-04",
  },
  {
    image: "/products/hoodie-06.jpg",
    title: "WHTE / 06",
    id: "bw-06",
  },
];

export default function DualCollections() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const openCollection = (side: "BHNG" | "WHTE") => {
    setIsTransitioning(true);

    setTimeout(() => {
      router.push(side === "BHNG" ? "/BHNG" : "/WHTE");
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
          BHNG SIDE
      ===================================================== */}

      <div className="dual-side dual-BHNG">

        

        <div className="dual-products">

          {BHNGProducts.map((product) => (
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
          WHTE SIDE
      ===================================================== */}

      <div className="dual-side dual-WHTE">



        <div className="dual-products">

          {WHTEProducts.map((product) => (
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

          {/* BHNG */}

          <button
            type="button"
            onClick={() => openCollection("BHNG")}
            className="campaign-half campaign-BHNG"
          >

            <img
              src="/products/hoodie-07.jpg"
              alt="BHNG collection"
            />

            <div className="campaign-overlay campaign-overlay-dark">

              <span className="campaign-side-name">
                BHNG
              </span>

              <span className="campaign-explore">
                EXPLORE MORE ↗
              </span>

            </div>

          </button>


          {/* WHTE */}

          <button
            type="button"
            onClick={() => openCollection("WHTE")}
            className="campaign-half campaign-WHTE"
          >

            <img
              src="/products/hoodie-09.jpg"
              alt="WHTE collection"
            />

            <div className="campaign-overlay campaign-overlay-light">

              <span className="campaign-side-name">
                WHTE
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