// import { useState } from "react";
import NavBar from "./layouts/NavBar.jsx";
import Hero from "./layouts/Hero.jsx";
import Footer from "./layouts/Footer.jsx";

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

const CompanyAdvantages = [
    {
        id: "A1",
        description: "Melayani pesanan partai (massal) maupun indi (satuan).",
    },
    {
        id: "A2",
        description:
            "Berpengalaman lama dibidang konveksi kaos didukung Tenaga dan SDM yang handal.",
    },
    { id: "A3", description: "Harga yang kompetitif. ." },
];

function ShowGoogleMap() {
    return (
        <div class="flex items-center justify-center h-96 rounded bg-gray-50 dark:bg-gray-800">
            <iframe
                className="block h-full w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.245894963414!2d112.78414807441045!3d-7.32625487204826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7facfc197b455%3A0xe727cb16c6667a4a!2sAlfasarana%20Produsen%20Tas%20Spunbond%20%7C%20Goodiebag%20%7C%20Goody%20bag%20%7C%20Tas%20Kain%20%7C%20Tas%20Kemasan!5e0!3m2!1sid!2sid!4v1709956358507!5m2!1sid!2sid"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
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

function MainGallery() {
    return (
        <>
            <div class="flex items-center justify-center my-6 rounded bg-gray-50 dark:bg-gray-800">
                <img
                    class="rounded-md"
                    src="./public/images/banner-toko.webp"
                    alt="Banner CV Focus Alfasarana"
                />
            </div>
            <div class="flex flex-col space-y-2 sm:grid grid-cols-2 gap-4 mb-4">
                <div class="flex items-center justify-center rounded aspect-video bg-gray-50 dark:bg-gray-800">
                    <img
                        class="rounded-md"
                        src="./public/images/front-office.webp"
                        alt="Banner CV Focus Alfasarana"
                    />
                </div>
                <div class="flex items-center justify-center rounded aspect-video bg-gray-50 dark:bg-gray-800">
                    <img
                        class="rounded-md"
                        src="./public/images/sewing-div.webp"
                        alt="Banner CV Focus Alfasarana"
                    />
                </div>
                <div class="flex items-center justify-center rounded aspect-video bg-gray-50 dark:bg-gray-800">
                    <img
                        class="rounded-md"
                        src="./public/images/activity-1.webp"
                        alt="Banner CV Focus Alfasarana"
                    />
                </div>
                <div class="flex items-center justify-center rounded aspect-video bg-gray-50 dark:bg-gray-800">
                    <img
                        class="rounded-md"
                        src="./public/images/activity-1.webp"
                        alt="Banner CV Focus Alfasarana"
                    />
                </div>
            </div>
        </>
    );
}

function ListItem({ value }) {
    return (
        <li class="flex flex-col items-center space-x-3 px-4 py-2 text-center rtl:space-x-reverse">
            <svg
                class="w-10 h-10 mb-2 text-green-500 dark:text-pink-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    fill-rule="evenodd"
                    d="M12 2a3 3 0 0 0-2.1.9l-.9.9a1 1 0 0 1-.7.3H7a3 3 0 0 0-3 3v1.2c0 .3 0 .5-.2.7l-1 .9a3 3 0 0 0 0 4.2l1 .9c.2.2.3.4.3.7V17a3 3 0 0 0 3 3h1.2c.3 0 .5 0 .7.2l.9 1a3 3 0 0 0 4.2 0l.9-1c.2-.2.4-.3.7-.3H17a3 3 0 0 0 3-3v-1.2c0-.3 0-.5.2-.7l1-.9a3 3 0 0 0 0-4.2l-1-.9a1 1 0 0 1-.3-.7V7a3 3 0 0 0-3-3h-1.2a1 1 0 0 1-.7-.2l-.9-1A3 3 0 0 0 12 2Zm3.7 7.7a1 1 0 1 0-1.4-1.4L10 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l5-5Z"
                    clip-rule="evenodd"
                />
            </svg>

            <span>{value.description}</span>
        </li>
    );
}

function CompanyAdvantagesList({ item }) {
    return (
        <ul class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 text-left text-gray-500 dark:text-gray-400">
            <listItem item={item} />
        </ul>
    );
}

function CompanyBanner() {
    return (
        <div class="flex items-center justify-center my-6 rounded bg-gray-50 dark:bg-gray-800">
            <img
                class="rounded-md"
                src="./public/images/banner-toko.webp"
                alt="Banner CV Focus Alfasarana"
            />
        </div>
    );
}

function CompanyWorkImgs() {
    return (
        <div class="flex flex-col space-y-2 sm:grid grid-cols-2 gap-4 mb-4">
            <div class="flex items-center justify-center rounded aspect-video bg-gray-50 dark:bg-gray-800">
                <img
                    class="rounded-md"
                    src="./public/images/front-office.webp"
                    alt="Banner CV Focus Alfasarana"
                />
            </div>
            <div class="flex items-center justify-center rounded aspect-video bg-gray-50 dark:bg-gray-800">
                <img
                    class="rounded-md"
                    src="./public/images/sewing-div.webp"
                    alt="Banner CV Focus Alfasarana"
                />
            </div>
            <div class="flex items-center justify-center rounded aspect-video bg-gray-50 dark:bg-gray-800">
                <img
                    class="rounded-md"
                    src="./public/images/activity-1.webp"
                    alt="Banner CV Focus Alfasarana"
                />
            </div>
            <div class="flex items-center justify-center rounded aspect-video bg-gray-50 dark:bg-gray-800">
                <img
                    class="rounded-md"
                    src="./public/images/activity-1.webp"
                    alt="Banner CV Focus Alfasarana"
                />
            </div>
        </div>
    );
}

function CompanyWork() {
    return (
        <>
            <CompanyBanner />
            <CompanyWorkImgs />
        </>
    );
}

function SectionContent({ title, useCard = false, useMap = false }) {
    let cardList;
    let mapComp;

    if (useCard) {
        cardList = MainCards.map((card) => (
            <CardItem key={card.id} card={card} />
        ));
    }

    if (useMap) {
        mapComp = <ShowGoogleMap />;
    }

    return (
        <div class="py-2 px-4 mx-auto text-center lg:py-4">
            <MainTitleH2 title={title} />

            <div class="pb-4 px-4 mx-auto text-center space-y-10 lg:py-8">
                <>{useCard ? cardList : ""}</>
                <>{useMap ? mapComp : ""}</>
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

export default function Homepage() {
    return (
        <div className="bg-gray-900">
            <NavBar navLinks={Links} />
            <Hero />

            <section id="product-us" class="pt-20 dark:bg-gray-900">
                <SectionContent title={"Produk Kami"} useCard={true} />
                <SectionContent title={"Toko Kami"} useMap={true} />
                <SectionContent title={"Mengapa Kami"} />
            </section>

            <Footer />
        </div>
    );
}
