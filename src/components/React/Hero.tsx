// import SocialPill from "../SocialPill.astro";
// import GitHubIcon from '../icons/GitHub.astro';
// import LinkedinIcon from '../icons/Linkedin.astro';
// import MailIcon from '../icons/Mail.astro';
import { GitHubIcon } from "./Icons/GitHub";
import { LinkedinIcon } from "./Icons/Linkedin";
import { MailIcon } from "./Icons/Mail";
import { Badge } from "./UI/Badge";
import  { BackgroundBeams }  from "./UI/Hero-Background";
import { SocialPill } from "./UI/SocialPill";

export function Hero() {
  return (
    <section className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <article className="relative z-10 text-lg md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
          ¡Hola!, soy <span className="text-sky-500">Brian Rico</span> 
          <a
          href="https://www.linkedin.com/in/brian-rico-51396426a/"
          target="_blank"
          rel="noopener noreferrer" 
          className="flex justify-center items-center">
            <Badge>Listo para trabajar</Badge>
          </a>
        </h1>
        <h2 className="text-xl lg:text-2xl opacity-75 text-wrap max-w-[700px] cursor-default">
          <span className="text-sky-200">Freelance. Desarrollador FullStack ✨.</span> Diseñador de Interfaz de Usuario (UI)
          <span className="opacity-75"> De Chinandega, </span> <span className="text-white font-semibold">Nicaragua. </span> 
          <span className="opacity-75"> Me especializo en crear sitios web y aplicaciones únicas, fáciles de mantener y escalar.</span>
        </h2>

        <nav className="flex gap-4 mt-8 flex-wrap">
          <SocialPill href="https://www.linkedin.com/in/brian-rico-51396426a/">
            <LinkedinIcon/>
            LinkedIn
          </SocialPill>
          <SocialPill href="https://github.com/Bricret">
            <GitHubIcon/>
            GitHub
          </SocialPill>
          <SocialPill href="mailto:brian.rico378@gmail.com">
            <MailIcon/>
            brian.rico378@gmail.com
          </SocialPill>
        </nav>
      </article>
      <BackgroundBeams />
  </section>
  );
}
