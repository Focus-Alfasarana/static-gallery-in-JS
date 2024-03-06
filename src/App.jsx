import { useState } from "react";
import NavBar from "./layouts/NavBar.jsx";
import Hero from "./layouts/Hero.jsx";

const Links = [
  { id: "L1", name: "Beranda", url: "./index.html" },
  { id: "L2", name: "Kaos", url: "./public/gallery/t-shirts.html" },
  { id: "L3", name: "Tas", url: "./public/gallery/bags.html" },
  { id: "L4", name: "DTF", url: "./public/gallery/dtf.html" },
  { id: "L5", name: "Blog", url: "./public/blogs/main-blog.html" },
  { id: "L6", name: "Kontak", url: "./index.htm#contact-us" },
];

export default function App() {
  return (
    <>
      <NavBar navLinks={Links} />
      <Hero />
    </>
  );
}
