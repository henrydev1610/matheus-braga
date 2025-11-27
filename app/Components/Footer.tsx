import Image from "next/image";



const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <div className="w-full h-[50vh] bg-blue-950">
            <section className="w-full container mx-auto py-14 flex justify-between items-start gap-20">

                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-4xl text-white">Contato</h1>
                    <p className="text-white">Entre para mais informações</p>

                    <div className="flex gap-5">

                        <Image
                            src="/gitLogo.svg"
                            width={100}
                            height={100}
                            alt="github"
                            className="
                             w-20 cursor-pointer
                            invert brightness-0
                            hover:invert-0 hover:brightness-150 hover:drop-shadow-[0_0_8px_#7cc4ff]
                            transition-all duration-300"
                        />

                        <Image
                            src="/linkedinLogo.svg"
                            width={100}
                            height={100}
                            alt="linkedin"
                            className="
                            w-20 cursor-pointer
                            invert brightness-0
                            hover:invert-0  hover:drop-shadow-[0_0_8px_#7cc4ff]
                            transition-all duration-300"
                            />

                    </div>


                    <p className="text-white">© {date} All rights reserved.</p>
                </div>


                <div className="flex flex-col gap-4">
                    <h2 className="text-white text-2xl font-bold">Siga-nos</h2>
                    <p className="text-white">contato@email.com</p>
                </div>


                <div className="flex flex-col gap-4">
                    <h2 className="text-white text-2xl font-bold">Suporte</h2>

                    <label className="text-sm font-medium text-white/70">
                        Nome da sua empresa
                    </label>

                    <div className="flex flex-col w-80 gap-4">
                        <input
                            type="text"
                            placeholder="Digite o nome da sua empresa"
                            className="w-full px-4 py-3 border rounded-md outline-none 
              focus:ring-2 focus:ring-white/20 text-black/70 bg-white"
                        />

                        <button className="bg-blue-400 text-white font-bold px-8 py-3 rounded-full 
            hover:bg-blue-500 transition-colors duration-300">
                            Enviar informações
                        </button>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Footer;
