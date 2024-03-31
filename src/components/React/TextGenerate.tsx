import { TypewriterEffectSmooth } from './UI/TypeWrite'

export function TextGenerate() {
  const words = [
    {
      text: "Impaciente",
    },
    {
      text: "por",
    },
    {
      text: "trabajar",
    },
    {
      text: "con",
    },
    {
      text: "ustedes.",
      className: "text-blue-500",
    },
  ];
  return (
    <main className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-200 text-xl sm:text-base  ">
        Muchas Gracias por ver mi Portafolio.
      </p>
      <TypewriterEffectSmooth words={words} />
      <section className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a 
          className="bg-gradient-to-r border rounded-lg px-4 py-2 min-[2600px]:px-6 min-[2600px]:py-4 border-[#136949] from-[#00150D] to-[#00150D50] flex items-center justify-center gap-x-2 min-[2600px]:gap-x-4"
          href="https://wa.me/50557971984?text=Hola%2C+Brian.+Nos+llamo+la+atencion+tu+Portfolio+y+queremos+saber+mas+de+ti%21%21"
          target="_blank"
          rel="noopener noreferrer" 
        >
          <img src="./TecnologySVG/whatsapp.svg" alt="WhatsApp logo" className='w-[35px] h-[35px]' />
          <span className='text-sm min-[2600px]:text-4xl'>WhatsApp</span>
        </a>
        <a 
          className="bg-gradient-to-r border rounded-lg px-4 py-2 min-[2600px]:px-6 min-[2600px]:py-4 border-[#9D334B] from-[#1F0107] to-[#1F010750] flex items-center justify-center gap-x-2 min-[2600px]:gap-x-4"
          href="mailto:brian.rico378@gmail.com"
          target="_blank"
          rel="noopener noreferrer" 
        >
            <img src="./TecnologySVG/gmail.svg" alt="Gmail logo" className='w-[35px] h-[35px]' />
            <span className='text-sm min-[2600px]:text-4xl'>Gmail</span>
        </a>
      </section>
    </main>
  );
}
