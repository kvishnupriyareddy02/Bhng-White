
"use client";

import Image from "next/image";

const editions = [
  {
    image: "/products/hoodie-01.jpg",
    title: "01",
    label: "SPECIAL EDITION",
  },
  {
    image: "/products/hoodie-04.jpg",
    title: "02",
    label: "SPECIAL EDITION",
  },
  {
    image: "/products/hoodie-07.jpg",
    title: "03",
    label: "SPECIAL EDITION",
  },
  {
    image: "/products/hoodie-10.jpg",
    title: "04",
    label: "SPECIAL EDITION",
  },
  {
    image: "/products/hoodie-14.jpg",
    title: "05",
    label: "SPECIAL EDITION",
  },
];

export default function SpecialEditions() {
  return (
    <section className="special-editions">

      {/* SECTION HEADER */}

      <div className="special-editions-header">
        <p className="special-editions-eyebrow">
          B&W / SPECIAL EDITIONS
        </p>

        <h2
          className="special-editions-title"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          SPECIAL
          <br />
          EDITIONS
        </h2>
      </div>

      {/* CARD DECK */}

      <div className="special-editions-deck">

        {editions.map((edition, index) => (
          <article
            key={edition.title}
            className="special-edition-card"
            style={{
              top: `calc(8vh + ${index * 8}px)`,
              zIndex: index + 1,
            }}
          >

            <div className="special-edition-image">

              <Image
                src={edition.image}
                alt={`B&W Special Edition ${edition.title}`}
                fill
                sizes="(max-width: 768px) 94vw, 86vw"
                className="special-edition-img"
                priority={index === 0}
              />

              {/* DARK GRADIENT */}

              <div className="special-edition-gradient" />

              {/* PINK EDGE */}

              <div className="special-edition-edge" />

              {/* CARD NUMBER */}

              <div className="special-edition-number">
                {edition.title}
              </div>

              {/* CARD LABEL */}

              <div className="special-edition-label">
                {edition.label}
              </div>

              {/* BOTTOM TITLE */}

              <div className="special-edition-bottom">

                <h3
                  style={{
                    fontFamily: "Times New Roman, serif",
                  }}
                >
                  B&W
                </h3>

                <span>
                  EDITION / {edition.title}
                </span>

              </div>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

