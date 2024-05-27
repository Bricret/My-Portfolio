import es from "../../../utils/assets/es.json";
import en from "../../../utils/assets/en.json";
import "./style.css";
import { useState } from "react";

export const Header = ({ lenguage }: { lenguage: string }) => {
  const CONDICION = lenguage === "es";
  const [change, setChange] = useState(CONDICION ? false : true);

  const handleChange = () => {
    setChange((prevChange) => !prevChange);

    const newPath = change ? "/es" : "/en";
    window.location.href = newPath;
  };

  return (
    <header className="grid grid-cols-[400px_1fr_400px] justify-center items-center py-5 w-full xl:w-[1120px] mx-auto sticky top-0 z-50">
      <div>
        <h1 className="hidden">Pruebas</h1>
      </div>
      <nav className="flex flex-row w-full gap-x-3 md:gap-x-10 py-1.5 px-3 md:px-6 text-base bg-black/70 rounded-full backdrop-blur-sm">
        <a
          href="#experiencia"
          className="hover:scale-110 hover:bg-white/10 transition rounded-lg px-1.5"
        >
          {CONDICION ? es.navbar.exp : en.navbar.exp}
        </a>
        <a
          href="#proyectos"
          className="hover:scale-110 hover:bg-white/10 transition rounded-lg px-1.5"
        >
          {CONDICION ? es.navbar.project : en.navbar.project}
        </a>
        <a
          href="#tecnologias"
          className="hover:scale-110 hover:bg-white/10 transition rounded-lg px-1.5"
        >
          {CONDICION ? es.navbar.tech : en.navbar.tech}
        </a>
        <a
          href="#gracias"
          className="hover:scale-110 hover:bg-white/10 transition rounded-lg px-1.5 hidden md:flex"
        >
          {CONDICION ? es.navbar.thx : en.navbar.thx}
        </a>
      </nav>
      <div className="w-full hidden justify-end items-end md:flex">
        <input
          type="checkbox"
          id="switch"
          checked={change}
          onChange={handleChange}
        />
        <label htmlFor="switch"></label>
      </div>
    </header>
  );
};
