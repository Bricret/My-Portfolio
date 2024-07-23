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
        Full Stack
      </p>
      <div className="flex flex-col">
        <p className="font-bold md:text-4xl text-xl text-white">
          Sakura Coffee Shop System
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base mt-4 mb-2 max-w-lg text-neutral-200">
          Sistema POS y manejo de inventario con automatizacion del cierre de
          caja, reporte de ventas, manejo de pedidos y proteccion de rutas por
          roles de usuario.
        </p>
        <p className="mb-4 flex items-center">
          <h5 className="mr-2 text-green-600 font-semibold text-lg">Credenciales:</h5>
          <blockquote className="">User: <span className="font-bold text-lg">admin</span> Pass: <span className="font-bold text-lg">123</span></blockquote>
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
        >
          Probar
        </a>
        <a
          className="flex items-center gap-x-1.5 px-4 py-1.5 rounded-md border border-black/85 bg-black text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
          href="https://github.com/Bricret/sakura-coffee-admin"
          target="_blank"
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
        Front End
      </p>
      <div className="flex flex-col">
        <p className="font-bold md:text-4xl text-xl text-white">
          Global Market Shop Web
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          E-commerce con interfaz de usuario amigable y facil de usar, con un
          poderoso sistema de busqueda y filtros para encontrar los productos
          que necesitas. Seccion de categorias y productos destacados
          atractivos.
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-white pb-4 text-sm font-extralight">
          <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">TypeScript</li>
          <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">React</li>
          <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">Next.js</li>
          <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">Nest.js</li>
          <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">PostgreSQL</li>
        </ul>
      </div>
      <div className="flex items-center font-semibold">
        <a
          className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-stone-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md mr-4"
          href="https://global-market-shop-web.vercel.app/"
          target="_blank"
        >
          Probar
        </a>
        <a
          className="flex items-center gap-x-1.5 px-4 py-1.5 rounded-md border border-black/85 bg-black text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
          href="https://github.com/Bricret/global-market-shop-web"
          target="_blank"
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
          One Stream Video App
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Aplicacion Mobile para ver las peliculas que estan en cartelera y las peliculas mas populares. Con sistema de favoritos y busqueda de peliculas.
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-white pb-4 text-sm font-extralight">
          <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">TypeScript</li>
          <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">React Native</li>
          <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">React Navigation</li>
          <li className="bg-zinc-700 px-2 py-0.5 rounded-2xl">API</li>
        </ul>
      </div>
      <div className="flex items-center font-semibold">
        <a
          className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-stone-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md mr-4"
          href="https://drive.google.com/file/d/1EYJgkFx9gBQzj6dDzf5hsF9XTpsD21oN/view?usp=sharing"
          target="_blank"
        >
          Video de Prueba
        </a>
        <a
          className="flex items-center gap-x-1.5 px-4 py-1.5 rounded-md border border-black/85 bg-black text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
          href="https://github.com/Bricret/movieApp"
          target="_blank"
        >
          <GitHubIcon />
          GitHub
        </a>
      </div>
    </main>
  );
};
// const ProjectFour = () => {
//   return (
//     <main className="relative">
//       <p className="bg-[#FFA500] font-semibold absolute -top-52 right-0 rounded-2xl px-2 py-0.5 max-w-fit">
//         API
//       </p>
//       <div className="flex flex-col">
//         <p className="font-bold md:text-4xl text-xl text-white">
//           Sakura Coffee Shop Sistem
//         </p>
//         <p className="font-normal text-base text-white"></p>
//         <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//           A coffee shop system that helps you manage your business, from sales
//           to inventory. It&apos;s the perfect solution for coffee shop owners
//           who want to streamline their operations and grow their business.
//         </p>
//       </div>
//     </main>
//   );
// };

const cards = [
  {
    id: 1,
    content: <ProjectOne />,
    className: "md:col-span-2",
    thumbnail: "./projects/Project_SakuraCoffee.webp",
  },
  {
    id: 2,
    content: <ProjectTwo />,
    className: "col-span-1",
    thumbnail: "./projects/global-market.png",
  },
  {
    id: 3,
    content: <ProjectThree />,
    className: "col-span-1",
    thumbnail: "./projects/one-stream.png",
  },
  // {
  //   id: 4,
  //   content: <ProjectFour />,
  //   className: "md:col-span-2",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
];
