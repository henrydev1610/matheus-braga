import Image from "next/image";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="w-full bg-blue-950">
      <section
        className="
          w-full container mx-auto 
          px-4 
          py-10 md:py-14 
          flex flex-col md:flex-row 
          justify-between 
          items-start 
          gap-10 md:gap-20
        "
      >
        {/* COLUNA 1 - CONTATO */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <h1 className="font-bold text-3xl md:text-4xl text-white text-center md:text-left">
            Contato
          </h1>
          <p className="text-white text-center md:text-left">
            Entre para mais informações
          </p>

          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/gitLogo.svg"
              width={100}
              height={100}
              alt="github"
              className="
                w-16 md:w-20 cursor-pointer
                invert brightness-0
                hover:invert-0 hover:brightness-150 
                hover:drop-shadow-[0_0_8px_#7cc4ff]
                transition-all duration-300
              "
            />

            <Image
              src="/linkedinLogo.svg"
              width={100}
              height={100}
              alt="linkedin"
              className="
                w-16 md:w-20 cursor-pointer
                invert brightness-0
                hover:invert-0  
                hover:drop-shadow-[0_0_8px_#7cc4ff]
                transition-all duration-300
              "
            />
          </div>

          <p className="text-white text-center md:text-left">
            © {date} All rights reserved.
          </p>
        </div>

        {/* COLUNA 2 - SIGA-NOS */}
        <div className="flex flex-col gap-2 w-full md:w-auto items-center md:items-start">
          <h2 className="text-white text-2xl font-bold text-center md:text-left">
            Siga-nos
          </h2>
          <p className="text-white text-center md:text-left">
            contato@email.com
          </p>
        </div>

        {/* COLUNA 3 - SUPORTE */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <h2 className="text-white text-2xl font-bold text-center md:text-left">
            Suporte
          </h2>

          <label className="text-sm font-medium text-white/70 text-center md:text-left">
            Nome da sua empresa
          </label>

          <div className="flex flex-col w-full md:w-80 gap-4">
            <input
              type="text"
              placeholder="Digite o nome da sua empresa"
              className="
                w-full px-4 py-3 
                border rounded-md outline-none 
                focus:ring-2 focus:ring-white/20 
                text-black/70 bg-white
              "
            />

            <button
              className="
                bg-blue-400 text-white font-bold 
                px-8 py-3 rounded-full 
                hover:bg-blue-500 
                transition-colors duration-300
                w-full md:w-auto
              "
            >
              Enviar informações
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
