"use client";
import { BackendTecnologys, FrontendTecnologys, LearningTecnologys, ToolsTecnologys } from '../data/Tecnologys-Data';
import { EvervaultCard } from './UI/Evervault-Card';

interface Props {
  lenguage: string;
}

export function Tecnologys({ lenguage }: Props) {
  const CONDICION = lenguage === 'es';
  return (
    <section className='grid lg:grid-cols-2 lg:grid-rows-2 gap-6 lg:place-content-center'>
      <EvervaultCard text='Frontend' data={FrontendTecnologys}/>
      <EvervaultCard text='Backend' styleText='from-[#94a3b8] to-[#1e293b]' data={BackendTecnologys}/>
      <EvervaultCard text={ CONDICION ? 'Herramientas' : 'Tools' } data={ToolsTecnologys} />
      <EvervaultCard text={ CONDICION ? 'Aprendiendo' : 'Learning' } styleText='from-[#ffb272] to-[#ee4a08]' data={LearningTecnologys}/>
    </section>
  );
}
