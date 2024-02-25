"use client";
import { ParallaxScroll } from "./UI/ParalloxCardsScroll";
import { tecnologys } from '../data/Tecnologys'


export function Tecnologys() {
  return <ParallaxScroll images={tecnologys} />;
}
