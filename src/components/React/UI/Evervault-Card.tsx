"use client";
import { useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "../../../utils/cn";

export const EvervaultCard = ({
  text,
  className,
  styleText,
  data,
}: {
  text?: string;
  className?: string;
  styleText?: string;
  data?: any;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "p-0.5  bg-transparent aspect-square flex w-full h-[26rem] relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-2xl border border-zinc-500/30 p-6 w-full relative overflow-hidden bg-transparent flex h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <main className="relative z-10 flex">
          <section className="relative h-44 w-full flex flex-col text-white font-bold text-4xl">
            <div className="absolute w-full h-full blur-sm" />
            <h3 className={`text-center mb-8 text-2xl font-bold cursor-default lg:text-4xl lg:break-words bg-gradient-to-t from-[#54fbff] to-[#00a4c9] bg-clip-text text-transparent z-20 ${styleText}`}>{text}</h3>
            <ul className="grid grid-cols-3 gap-x-14 md:gap-x-20 gap-y-6 w-full">
            {
                data.map(({Title, Icon}) => (
                    <li className="rounded-2xl  group flex flex-col fle justify-center items-center" key={Title}>
                        <img src={Icon} alt={Title} className="w-[3.5rem] h-[3.5rem] md:w-auto md:h-auto" />
                        <span className="text-sm pt-2 font-light w-full text-center cursor-default">{Title}</span>
                    </li>    
                ))
            }
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-zinc-500/30 to-white/20 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}
      >
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <h1>hola</h1>
  );
};
