import { GitHubIcon } from "./Icons/GitHub";
import { LinkedinIcon } from "./Icons/Linkedin";
import { MailIcon } from "./Icons/Mail";
import { Badge } from "./UI/Badge";
import  { BackgroundBeams }  from "./UI/Hero-Background";
import { SocialPill } from "./UI/SocialPill";
import es from '../../utils/assets/es.json';
import en from '../../utils/assets/en.json';

interface Props {
  lenguage: string;
  condition: boolean;
}

export function Hero( { lenguage, condition }: Props ) {
  return (
    <section className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <article className="relative z-10 text-lg md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
          { condition ? es.hero.title : en.hero.title } 
          <span className="text-sky-500">{ condition ? es.hero.name : en.hero.name }</span> 
          <a
          href="https://www.linkedin.com/in/brian-rico-51396426a/"
          target="_blank"
          rel="noopener noreferrer" 
          className="flex justify-center items-center">
            <Badge>{ condition ? es.hero.chip : en.hero.chip }</Badge>
          </a>
        </h1>
        <h2 className="text-xl lg:text-2xl opacity-75 text-wrap max-w-[700px] cursor-default">
          <span className="text-sky-200">
            { condition ? es.hero.desc1 : en.hero.desc1 }
          </span> 
          { condition ? es.hero.desc2 : en.hero.desc2 }
          <span className="opacity-75">
            { condition ? es.hero.desc3 : en.hero.desc3 } 
          </span>
          <span className="text-white font-semibold">
            { condition ? es.hero.desc4 : en.hero.desc4 }
          </span> 
          <span className="opacity-75">
            { condition ? es.hero.desc5 : en.hero.desc5 }
          </span>
        </h2>

        <nav className="flex gap-4 mt-8 flex-wrap">
          <div className="hidden md:flex">
            <SocialPill href="https://www.linkedin.com/in/brian-rico-51396426a/">
              <LinkedinIcon/>
              LinkedIn
            </SocialPill>
          </div>
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
