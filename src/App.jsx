// import { useState } from "react";
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

const MainCards = [
  {
    id: "C1",
    name: "Kaos",
    url: "./public/gallery/t-shirts.html",
    imgSrc: "../public/images/shirts/abu-abu-muda.webp",
    description: `Kami adalah salah satu produsen kaos di
    Surabaya. Kami memproduksi kaos polos Cotton
    Combed 30S & 24S, Polo, Salur. Kami juga
    menyediakan jasa sablon & print DTF pada
    kaos.`,
  },
  {
    id: "C2",
    name: "Tas",
    url: "./public/gallery/bags.html",
    imgSrc: "../public/images/bags/spunbonds/tas-10.jpg",
    description: `Kami adalah salah satu pencetus produsen
    kustom tas di Surabaya. Kami memproduksi tas
    spunbond, mika, blacu, kanvas, kain goni,
    hampers dan kustom tas belanja. Kami juga
    menyediakan jasa sablon & print DTF pada
    tas.`,
  },
  {
    id: "C3",
    name: "DTF",
    url: "./public/gallery/dtf.html",
    imgSrc: "../public/images/printed-DTF.webp",
    description: `Kami adalah salah satu produsen kaos di
    Surabaya. Kami memproduksi kaos polos Cotton
    Combed 30S & 24S, Polo, Salur. Kami juga
    menyediakan jasa sablon & print DTF pada
    kaos.`,
  },
  {
    id: "C4",
    name: "BLog",
    url: "./public/gallery/dtf.html",
    imgSrc: "../public/images/undraw_undraw_undraw_notebook.png",
    description: `Yuk cek blog kami untuk tips, trik, & pengetahuan tentang tas atau kaos bersama kami ya!`,
  },
  {
    id: "C5",
    name: "Sosial Media",
    url: "#",
    imgSrc: "../public/images/undraw_Social_dashboard.png",
    description: `Yuk cek sosial media kami untuk cari referensi kaos & tas kesukaan kamu ya`,
  },
];

function Footer() {
  return (
    <footer class="bg-pink-100 rounded-lg shadow dark:bg-pink-600 dark:text-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="../index.html"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="./public/images/website-logo-kaos.webp"
              class="h-8 me-1"
              alt="FlowBite Logo"
            />
            <img
              src="./public/images/website-logo-tas.webp"
              class="h-8 me-1"
              alt="FlowBite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap">
              Alfasarana
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 dark:text-inherit sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#product-us" class="hover:underline me-4 md:me-6">
                Produk Kami
              </a>
            </li>
            <li>
              <a href="#about-us" class="hover:underline me-4 md:me-6">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#contact-us" class="hover:underline">
                Kontak
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-900 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-inherit">
          © 2023
          <a href="../index.html" class="hover:underline">
            Alfasarana™
          </a>
          . All Rights Reserved.
        </span>
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.instagram.com/goodiebag_sby?igsh=ODZxcmtrMnk1NTdk"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
              <span class="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@spunbondsurabayabag?_t=8k7HSrAWN0h&_r=1"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-tiktok"
                viewBox="0 0 16 16"
              >
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
              </svg>
              <span class="sr-only">Tiktok</span>
            </a>
            <a
              href="https://youtube.com/@focustasspunbond19?si=wLm_O16yPF2At5HN"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-youtube"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>

              <span class="sr-only">Youtube</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ShowMap() {
  return (
    <div class="flex items-center justify-center h-96 my-6 rounded bg-gray-50 dark:bg-gray-800">
      <iframe
        class="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3856.9140817946327!2d112.78185423499214!3d-7.330155590058073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7facfc197b455%3A0xe727cb16c6667a4a!2sAlfasarana%20Produsen%20Tas%20Kain%20%7C%20Goodiebag%20%7C%20Goody%20bag%20%7C%20Tas%20Spunbond%20%7C%20Tas%20Kemasan!5e0!3m2!1sid!2sid!4v1706174368270!5m2!1sid!2sid"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
}

function CardItem({ card }) {
  return (
    <div class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={card.url}>
        <img class="rounded-t-lg" src={card.imgSrc} alt="" />
      </a>
      <div class="p-5">
        <a href="./public/gallery/bags.html">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {card.name}
          </h5>
        </a>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {card.description}
        </p>
        <a
          href="./public/gallery/bags.html"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-800 dark:focus:ring-pink-800"
        >
          Lihat galeri
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <a
          href="tasspunbond.com"
          class="inline-flex items-center ml-2 px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-800 dark:focus:ring-pink-800"
        >
          Telusuri lebih
          <svg
            class="w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

function MainTitleH2({ title }) {
  return (
    <h2 class="mb-8 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white uppercase">
      {title}
    </h2>
  );
}

function SectionContent({ title, useCard = false, useMap = false }) {
  let cardList;
  let mapComp;

  if (useCard) {
    cardList = MainCards.map((card) => <CardItem key={card.id} card={card} />);
  }

  if (useMap) {
    mapComp = <ShowMap />;
  }

  return (
    <div class="py-2 px-4 mx-auto text-center lg:py-4">
      <MainTitleH2 title={title} />

      <div class="pb-4 mx-auto text-center space-y-10 lg:py-8">
        {useCard ? cardList : ""}
        {useMap ? mapComp : ""}
      </div>
    </div>
  );
}

function MainContent({ name, useCard = false, useMap = false }) {
  return (
    <section id="product-us" class="pt-20 dark:bg-gray-900">
      <SectionContent title={name} useCard={useCard} useMap={useMap} />
    </section>
  );
}

export default function App() {
  return (
    <>
      <NavBar navLinks={Links} />
      <Hero />
      {/*
        MainSection
          MainTitleH2
          MainContent
            CardLists
              CardItem
                CardLinks
       */}
      <MainContent name={"Produk Kami"} useCard={true} />
      {/* <MainContent name={"Mengapa Kami?"} useMap={true} /> */}
      <Footer />
    </>
  );
}
