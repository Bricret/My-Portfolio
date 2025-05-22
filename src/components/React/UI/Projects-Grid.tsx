"use client";
import { GitHubIcon } from "../Icons/GitHub";
import { LayoutGrid } from "../UI/layout-grid";

export function ProjectsGrid() {
  return (
    <div className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const ProjectOne = () => {
  return (
    <main className="relative">
      <p className="bg-[#800080] font-semibold absolute -top-32 right-0 rounded-2xl px-2 py-0.5 max-w-fit">
        Sistema Web
      </p>
      <div className="flex flex-col">
        <p className="font-bold md:text-4xl text-xl text-white">
          Di que si System Web
        </p>
        <p className="font-normal text-base text-white" />
        <p className="font-normal text-base mt-4 mb-2 max-w-lg text-neutral-200">
        Es un sistema que gestiona el inventario y los informes de ventas, así como una página para la visibilidad del producto y solicitudes por WhatsApp.
        </p>
        <p className="mb-4 flex items-center">
          <h5 className="mr-2 text-green-600 font-semibold text-lg">Credenciales:</h5>
          <blockquote className="">User: <span className="font-bold text-lg">brian.rico378@gmail.com</span> Pass: <span className="font-bold text-lg">123456</span></blockquote>
        </p>
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-2 text-white pb-4 text-sm font-extralight">
        <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">TypeScript</li>
        <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">React</li>
        <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">Next.js</li>
        <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">Server Action</li>
        <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">MySQL</li>
      </ul>
      <div className="flex items-center font-semibold">
        <a
          className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-stone-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md mr-4"
          href="https://sakura-coffee-shop-admin-test.vercel.app/"
          target="_blank"
          rel="noreferrer"
          aria-label="Probar el proyecto"
        >
          Probar
        </a>
        <a
          className="flex items-center gap-x-1.5 px-4 py-1.5 rounded-md border border-black/85 bg-black text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
          href="https://github.com/Bricret/sakura-coffee-admin"
          target="_blank"
          rel="noreferrer"
          aria-label="Ver el código fuente en GitHub"
        >
          <GitHubIcon />
          GitHub
        </a>
      </div>
    </main>
  );
};

const ProjectTwo = () => {
  return (
    <main className="relative">
      <p className="bg-[#1E90FF] font-semibold absolute -top-32 right-0 rounded-2xl px-2 py-0.5 max-w-fit">
        Pagina Web
      </p>
      <div className="flex flex-col">
        <p className="font-bold md:text-4xl text-xl text-white">
          Taxi Bargain Web App
        </p>
        <p className="font-normal text-base text-white" />
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Una página web para un servicio de reserva de taxis con una interfaz fácil de usar e integración de solicitudes.
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-white pb-4 text-sm font-extralight">
          <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">TypeScript</li>
          <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">Next.js</li>
          <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">Tailwind CSS</li>
        </ul>
      </div>
      <div className="flex items-center font-semibold">
        <a
          className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-stone-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md mr-4"
          href="https://taxibargain.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Probar el proyecto"
        >
          Probar
        </a>
        <a
          className="flex items-center gap-x-1.5 px-4 py-1.5 rounded-md border border-black/85 bg-black text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
          href="https://github.com/Bricret/taxibargainweb"
          target="_blank"
          rel="noreferrer"
          aria-label="Ver el código fuente en GitHub"
        >
          <GitHubIcon />
          GitHub
        </a>
      </div>
    </main>
  );
};
const ProjectThree = () => {
  return (
    <main className="relative">
      <p className="bg-[#00A86B] font-semibold absolute -top-36 right-0 rounded-2xl px-2 py-0.5 max-w-fit">
        Mobile App
      </p>
      <div className="flex flex-col">
        <p className="font-bold md:text-4xl text-xl text-white">
          Taxi Bargain Mobile App
        </p>
        <p className="font-normal text-base text-white" />
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Una aplicación móvil para reservar taxis con seguimiento en tiempo real y estimación de tarifas.
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-white pb-4 text-sm font-extralight">
          <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">TypeScript</li>
          <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">React Native</li>
          <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">Expo</li>
          <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">Nest.js</li>
          <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">PostgreSQL</li>
        </ul>
      </div>
      <div className="flex items-center font-semibold">
        <a
          className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-stone-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md mr-4"
          href="https://youtube.com/shorts/7kQ2JXLtggc?si=dEFwWe1azq70hjKY"
          target="_blank"
          rel="noreferrer"
          aria-label="Ver el video de prueba"
        >
          Video de Prueba
        </a>
        <a
          className="flex items-center gap-x-1.5 px-4 py-1.5 rounded-md border border-black/85 bg-black text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
          href="https://github.com/Bricret/taxi-bargain-mobile-app"
          target="_blank"
          rel="noreferrer"
          aria-label="Ver el código fuente en GitHub"
        >
          <GitHubIcon />
          GitHub
        </a>
      </div>
    </main>
  );
};

const ProjectFour = () => {
  return (
    <main className="relative">
      <p className="bg-[#FFA500] font-semibold absolute -top-52 right-0 rounded-2xl px-2 py-0.5 max-w-fit">
        Pagina Web
      </p>
      <div className="flex flex-col">
        <p className="font-bold md:text-4xl text-xl text-white">
          Melissa Taxi Web 
        </p>
        <p className="font-normal text-base text-white" />
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Una página web para un servicio de taxi con funcionalidad de reserva y reseñas de usuarios
        </p>
      </div>
      <div className="flex items-center font-semibold">
        <a
          className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-stone-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md mr-4"
          href="https://melissataxipr.com/es"
          target="_blank"
          rel="noreferrer"
          aria-label="Ir al sitio"
        >
          Ir al sitio
        </a>
        <a
          className="flex items-center gap-x-1.5 px-4 py-1.5 rounded-md border border-black/85 bg-black text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
          href="https://github.com/Bricret/melissa-taxi"
          target="_blank"
          rel="noreferrer"
          aria-label="Ver el código fuente en GitHub"
        >
          <GitHubIcon />
          GitHub
        </a>
      </div>
    </main>
  );
};

const cards = [
  {
    id: 1,
    content: <ProjectOne />,
    className: "md:col-span-2",
    thumbnail: "./projects/di-que-si.png",
  },
  {
    id: 2,
    content: <ProjectTwo />,
    className: "col-span-1",
    thumbnail: "./projects/taxibargain-mk.png",
  },
  {
    id: 3,
    content: <ProjectThree />,
    className: "col-span-1",
    thumbnail: "./projects/taxiBargain-app.png",
  },
  {
    id: 4,
    content: <ProjectFour />,
    className: "md:col-span-2",
    thumbnail:
      "./projects/melissaTaxi-mk.png",
  },
];
