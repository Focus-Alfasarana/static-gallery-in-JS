// NavLinkItem
function NavLinkItem({ link }) {
  return (
    <li>
      <a
        href={link.url}
        class="block py-2 px-3 text-pink-50 bg-pink-600 rounded md:bg-transparent md:text-pink-700 md:p-0 dark:text-pink-50 md:dark:text-pink-500"
        aria-current="page"
      >
        {link.name}
      </a>
    </li>
  );
}

// NavList
function NavList({ navLinks }) {
  return (
    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-pink-50 rounded-lg bg-pink-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-pink-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {navLinks.map((link) => (
        <NavLinkItem key={link.id} link={link} />
      ))}
    </ul>
  );
}

// NavButton
function NavButton() {
  return (
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-200 dark:text-gray-900 dark:hover:bg-pink-800 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
}

function NavWebLogo() {
  return (
    <a
      href="./index.html"
      class="flex items-center space-x-2 rtl:space-x-reverse"
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
      <span class="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-gray-900">
        Focus Alfasarana
      </span>
    </a>
  );
}

export default function NavBar({ navLinks }) {
  return (
    <nav class="bg-pink-100 border-gray-200 dark:bg-pink-600 fixed w-full">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavWebLogo />
        <NavButton />
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <NavList navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
}
