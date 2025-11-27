import React from 'react'

const Transform = () => {
    return (
        <div className="w-full h-[60vh] flex items-center justify-center">
            <div className="container m-auto flex flex-col items-center">

                <h1 className="text-5xl my-10 font-bold text-center">
                    Transforme seu negócio hoje
                </h1>

                <p className="text-black mb-8 text-center">
                    Automatize processos e aumente suas vendas
                </p>

                <div className="flex flex-col items-start gap-3 w-full max-w-lg">

                    <label className="text-sm font-medium text-black/70">
                        Nome da sua empresa
                    </label>
                    <div className="flex flex-col w-150  items-center">
                        <input
                            type="text"
                            placeholder="Digite o nome da sua empresa"
                            className="w-full px-4 py-3 border  rounded-md outline-none 
                       focus:ring-2 focus:ring-black/20 text-black/70"
                        />

                        <button className="bg-black  text-white font-bold px-8 py-3 rounded-full mt-5 
                             hover:bg-black/80 transition-colors duration-300">
                            Enviar informações
                        </button>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Transform
