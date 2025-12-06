import React from 'react'

const Transform = () => {
  return (
    <div className="w-full py-16 md:py-24 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col items-center">

        {/* TÍTULO */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl my-6 font-bold text-center">
          Transforme seu negócio hoje
        </h1>

        {/* SUBTÍTULO */}
        <p className="text-black mb-8 text-center text-base sm:text-lg">
          Automatize processos e aumente suas vendas
        </p>

        {/* FORMULÁRIO */}
        <div className="flex flex-col gap-3 w-full max-w-md">

          <label className="text-sm font-medium text-black/70">
            Nome da sua empresa
          </label>

          <div className="flex flex-col w-full gap-4">
            <input
              type="text"
              placeholder="Digite o nome da sua empresa"
              className="
                w-full px-4 py-3 border rounded-md outline-none 
                focus:ring-2 focus:ring-black/20 text-black/70
              "
            />

            <button
              className="
                bg-black text-white font-bold px-8 py-3 rounded-full 
                hover:bg-black/80 transition-colors duration-300
                w-full
              "
            >
              Enviar informações
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Transform;
