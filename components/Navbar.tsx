"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-8 text-WHTE">

      <h1
        className="text-3xl tracking-[0.4em]"
        style={{ fontFamily: "Times New Roman, serif" }}
      >
        B&W
      </h1>


      <div className="flex gap-10 text-sm tracking-widest">

        <a className="hover:opacity-60 transition">
          SHOP
        </a>

        <a className="hover:opacity-60 transition">
          BHNG
        </a>

        <a className="hover:opacity-60 transition">
          WHTE
        </a>

        <a className="hover:opacity-60 transition">
          STORY
        </a>

      </div>

    </nav>
  );
}