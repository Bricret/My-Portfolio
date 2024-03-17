"use client";
import { BackendTecnologys, FrontendTecnologys, LearningTecnologys, ToolsTecnologys } from '../data/Tecnologys-Data';
import { EvervaultCard } from './UI/Evervault-Card';


export function Tecnologys() {
  return (
    <section className='grid lg:grid-cols-2 lg:grid-rows-2 gap-6 lg:place-content-center'>
      <EvervaultCard text='Frontend' data={FrontendTecnologys}/>
      <EvervaultCard text='Backend' styleText='from-[#94a3b8] to-[#1e293b]' data={BackendTecnologys}/>
      <EvervaultCard text='Herramientas' data={ToolsTecnologys} />
      <EvervaultCard text='Aprendiendo' styleText='from-[#ffb272] to-[#ee4a08]' data={LearningTecnologys}/>
    </section>
  );
}
