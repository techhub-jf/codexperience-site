import logoCode from '@assets/logo_code.webp';
import logoCode2025 from '@assets/2025-logo-top.png';
import logoCodeSmall from '@assets/codeSmall.webp';
import codeSmall from '@assets/small2023.webp';
import codeMedium from '@assets/medium2023.webp';
import codeLarge from '@assets/large2023.webp';
import Header from '@components/Header';

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div id='1' className="w-full h-[39rem] relative flex flex-col items-center justify-center"> 
      <div className="absolute flex flex-col items-center justify-center z-50 md:top-52">
        
         
        <div className="relative flex items-center justify-center"> 
          <img
            src={logoCode2025}
            srcSet={`${logoCode2025} 400w, ${logoCode2025} 600w`}
            sizes="(max-width: 640px) 400px, 600px"
            alt="Logo CodeExperience"
            className="h-48 sm:h-[220px] md:h-[300px] object-contain"
          /> 
          <span
            className="
              absolute
              text-transparent 
              bg-clip-text 
              bg-gradient-to-r 
              from-purple-400 
              via-pink-500 
              to-blue-500 
              font-extrabold 
              text-6xl 
              md:text-7xl 
              drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]
              transform 
              rotate-[-20deg] 
              translate-x-[60%] 
              -translate-y-[40%]
              animate-pulse
            "
          >
            2025
          </span>
        </div>
        
        {/* CÓDIGO REVISADO: Data por extenso - Margem positiva (mt-6) garante que fique abaixo */}
        <p
          className="
            mt-6 /* Espaçamento de 1.5rem abaixo da logo */
            text-white 
            text-xl 
            sm:text-2xl 
            md:text-3xl 
            font-bold 
            drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]
            bg-cyan-500/80 
            px-4 py-1 
            rounded-md
          "
        >
          29 de novembro de 2025
        </p>

      </div>
      {/* Fim do Container da Logo e Data */}

      <Header />

      <div className='bg-black w-full h-full absolute opacity-60'></div>

      <img
        src={codeMedium}
        srcSet={`${codeSmall} 600w, ${codeMedium} 1200w, ${codeLarge} 1800w`}
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="Imagem codeXperience 2023"
        className="object-cover w-full h-full"
      />
    </div>

  );
}