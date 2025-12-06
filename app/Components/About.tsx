import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="select-none container mx-auto w-full py-16 px-4">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Transformando <br className="hidden md:block" />
            negócios com <br className="hidden md:block" />
            tecnologia
          </h1>

          <p className="text-black/60 mt-4 text-sm sm:text-base leading-relaxed">
            Aqui nós ajudamos empreendedores a automatizar processos,
            aumentar vendas e otimizar tempo — focando no que realmente importa
            para o seu negócio.
          </p>

          <button className="
            py-3 px-10 sm:px-16 
            border rounded-full mt-10 
            cursor-pointer font-bold 
            transition-colors duration-300 
            hover:bg-blue-300 hover:text-white
          ">
            Saiba mais
          </button>
        </div>

        {/* IMAGEM + CARD */}
        <div className="relative flex justify-center md:justify-end md:flex-col">
          <Image
            src="/foto-home-1.jpg"
            width={1200}
            height={800}
            alt="foto-home-office"
            className="
              w-full max-w-md md:max-w-lg 
              object-cover rounded-2xl shadow-2xl
            "
          />

          {/* CARD SOBREPOSTO */}
          <div className="
            absolute 
            bottom-[-40px] md:bottom-[-50px] 
            right-4 md:right-20
            bg-blue-100 rounded-md 
            py-6 px-6 md:py-10 md:px-10 
            shadow-xl
          ">
            <p className="text-xl md:text-3xl font-semibold">
              "Resultados em pouco tempo!"
            </p>
            <p className="text-black/70 mt-2">Claudimar</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
