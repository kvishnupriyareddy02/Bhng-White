"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Cursor from "@/components/Cursor";

type Product = {
  id: string;
  title: string;
  collection: "BHNG" | "WHTE";
  image: string;
  price: string;
  description: string;
  details: string[];
};

const products: Product[] = [
  {
    id: "bw-01",
    title: "B&W 01",
    collection: "BHNG",
    image: "/products/hoodie-01.jpg",
    price: "₹2,799",
    description:
      "An editorial take on contemporary Indian streetwear.",
    details: [
      "Oversized fit",
      "Heavyweight construction",
      "Signature artwork",
      "Designed in India",
    ],
  },

  {
    id: "bw-02",
    title: "B&W 02",
    collection: "WHTE",
    image: "/products/hoodie-02.jpg",
    price: "₹2,799",
    description:
      "A clean expression of contemporary Indian culture and form.",
    details: [
      "Relaxed fit",
      "Premium cotton construction",
      "Signature artwork",
      "Designed in India",
    ],
  },

  {
    id: "bw-03",
    title: "B&W 03",
    collection: "BHNG",
    image: "/products/hoodie-03.jpg",
    price: "₹2,799",
    description:
      "Raw streetwear designed around movement, attitude and identity.",
    details: [
      "Oversized fit",
      "Heavyweight cotton",
      "Signature artwork",
      "Designed in India",
    ],
  },

  {
    id: "bw-04",
    title: "B&W 04",
    collection: "WHTE",
    image: "/products/hoodie-04.jpg",
    price: "₹2,799",
    description:
      "A softer interpretation of the B&W world built around simplicity.",
    details: [
      "Relaxed fit",
      "Premium cotton",
      "Minimal artwork",
      "Designed in India",
    ],
  },

  {
    id: "bw-05",
    title: "B&W 05",
    collection: "BHNG",
    image: "/products/hoodie-05.jpg",
    price: "₹2,799",
    description:
      "An unapologetic streetwear piece from the darker side of B&W.",
    details: [
      "Oversized fit",
      "Heavyweight construction",
      "Signature artwork",
      "Designed in India",
    ],
  },

  {
    id: "bw-06",
    title: "B&W 06",
    collection: "WHTE",
    image: "/products/hoodie-06.jpg",
    price: "₹2,799",
    description:
      "Contemporary essentials shaped by culture, contrast and form.",
    details: [
      "Relaxed fit",
      "Premium cotton construction",
      "Signature artwork",
      "Designed in India",
    ],
  },

  {
    id: "bw-07",
    title: "B&W 07",
    collection: "BHNG",
    image: "/products/hoodie-07.jpg",
    price: "₹2,999",
    description:
      "A statement piece from the raw and unfiltered side of B&W.",
    details: [
      "Oversized fit",
      "Heavyweight construction",
      "Graphic artwork",
      "Designed in India",
    ],
  },

  {
    id: "bw-08",
    title: "B&W 08",
    collection: "BHNG",
    image: "/products/hoodie-08.jpg",
    price: "₹2,999",
    description:
      "Street, culture and attitude brought together in one piece.",
    details: [
      "Oversized fit",
      "Heavyweight cotton",
      "Signature artwork",
      "Designed in India",
    ],
  },

  {
    id: "bw-09",
    title: "B&W 09",
    collection: "WHTE",
    image: "/products/hoodie-09.jpg",
    price: "₹2,999",
    description:
      "A refined piece from the lighter side of the B&W universe.",
    details: [
      "Relaxed fit",
      "Premium cotton",
      "Graphic artwork",
      "Designed in India",
    ],
  },

  {
    id: "bw-10",
    title: "B&W 10",
    collection: "BHNG",
    image: "/products/hoodie-10.jpg",
    price: "₹2,999",
    description:
      "Designed for the streets with a distinctly B&W perspective.",
    details: [
      "Oversized fit",
      "Heavyweight construction",
      "Signature artwork",
      "Designed in India",
    ],
  },

  {
    id: "bw-11",
    title: "B&W 11",
    collection: "BHNG",
    image: "/products/hoodie-11.jpg",
    price: "₹2,999",
    description:
      "A bold continuation of the BHNG collection.",
    details: [
      "Oversized fit",
      "Heavyweight cotton",
      "Graphic artwork",
      "Designed in India",
    ],
  },

  {
    id: "bw-12",
    title: "B&W 12",
    collection: "BHNG",
    image: "/products/hoodie-12.jpg",
    price: "₹2,999",
    description:
      "Raw visual language meets everyday streetwear.",
    details: [
      "Oversized fit",
      "Heavyweight construction",
      "Signature artwork",
      "Designed in India",
    ],
  },

  {
    id: "bw-13",
    title: "B&W 13",
    collection: "BHNG",
    image: "/products/hoodie-13.jpg",
    price: "₹2,999",
    description:
      "A darker expression of contemporary Indian street culture.",
    details: [
      "Oversized fit",
      "Heavyweight cotton",
      "Signature artwork",
      "Designed in India",
    ],
  },

  {
    id: "bw-14",
    title: "B&W 14",
    collection: "BHNG",
    image: "/products/hoodie-14.jpg",
    price: "₹2,999",
    description:
      "Built around contrast, movement and unapologetic identity.",
    details: [
      "Oversized fit",
      "Heavyweight construction",
      "Graphic artwork",
      "Designed in India",
    ],
  },

  {
    id: "bw-15",
    title: "B&W 15",
    collection: "BHNG",
    image: "/products/hoodie-15.jpg",
    price: "₹2,999",
    description:
      "The final statement from the current BHNG collection.",
    details: [
      "Oversized fit",
      "Heavyweight cotton",
      "Signature artwork",
      "Designed in India",
    ],
  },
];

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const id = params?.id as string;

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#ebe8e1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Times New Roman, serif",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>PRODUCT NOT FOUND</h1>

          <button
            onClick={() => router.push("/")}
            style={{
              marginTop: "20px",
              background: "none",
              border: "1px solid #111",
              padding: "12px 25px",
              cursor: "pointer",
            }}
          >
            BACK TO SHOP
          </button>
        </div>
      </main>
    );
  }

  const addToBag = () => {
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  return (
    <>
      <Cursor />

      <main className="product-page">

      {/* =====================================================
          TOP NAVIGATION
      ===================================================== */}

      <header className="product-header">

        <button
          className="product-back"
          onClick={() => router.back()}
        >
          ← BACK
        </button>

        <div className="product-logo">
          B & W
        </div>

        <nav className="product-nav">
          <button onClick={() => router.push("/")}>
            SHOP
          </button>

          <button onClick={() => router.push("/BHNG")}>
            BHNG
          </button>

          <button onClick={() => router.push("/WHTE")}>
            WHTE
          </button>

          <button onClick={() => router.push("/")}>
            STORY
          </button>
        </nav>

      </header>


      {/* =====================================================
          PRODUCT LAYOUT
      ===================================================== */}

      <section className="product-layout">

        {/* ===================================================
            IMAGE
        =================================================== */}

        <div className="product-image-column">

          <div className="product-image-wrapper">

            <img
              src={product.image}
              alt={product.title}
              className="product-main-image"
            />

          </div>

          <div className="product-image-label">
            B & W / {product.collection}
          </div>

        </div>


        {/* ===================================================
            PRODUCT INFORMATION
        =================================================== */}

        <div className="product-info-column">

          <div className="product-info-inner">

            {/* COLLECTION */}

            <div className="product-collection">
              {product.collection}
            </div>


            {/* TITLE */}

            <h1 className="product-title">
              {product.title}
            </h1>


            {/* PRICE */}

            <div className="product-price">
              {product.price}
            </div>


            {/* DESCRIPTION */}

            <div className="product-description">

              <p>
                {product.description}
              </p>

              <ul>
                {product.details.map((detail) => (
                  <li key={detail}>
                    {detail}
                  </li>
                ))}
              </ul>

            </div>


            {/* SIZE */}

            <div className="product-size-section">

              <div className="size-heading">

                <span>
                  SELECT SIZE
                </span>

                <span>
                  SIZE GUIDE
                </span>

              </div>


              <div className="size-options">

                {["XS", "S", "M", "L", "XL"].map(
                  (size) => (
                    <button
                      key={size}
                      className={
                        selectedSize === size
                          ? "selected"
                          : ""
                      }
                      onClick={() =>
                        setSelectedSize(size)
                      }
                    >
                      {size}
                    </button>
                  )
                )}

              </div>

            </div>


            {/* QUANTITY + BAG */}

            <div className="product-actions">

              <div className="quantity-box">

                <button
                  onClick={() =>
                    setQuantity(
                      Math.max(1, quantity - 1)
                    )
                  }
                >
                  −
                </button>

                <span>
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                >
                  +
                </button>

              </div>


              <button
                className="add-to-bag"
                onClick={addToBag}
              >
                <span>
                  {added ? "ADDED TO BAG" : "ADD TO BAG"}
                </span>

                <span>
                  →
                </span>
              </button>

            </div>


            {/* DESCRIPTION LINE */}

            <div className="product-bottom-description">

              <span>
                DESCRIPTION
              </span>

              <span>
                +
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CART MESSAGE
      ===================================================== */}

      {added && (
        <div className="product-added-message">
          {product.title} ADDED TO BAG
        </div>
      )}

        </main>
    </>
  );
}