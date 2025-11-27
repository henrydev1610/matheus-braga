import Image from "next/image"

const Services = () => {
    return (
        <div className="w-full bg-blue-100/50 py-10">
            <section className="w-full container m-auto">
                
                <h1 className="text-center text-5xl py-8 font-bold">Soluções Inteligentes</h1>
                <p  className="text-center text-black/50">Transformamos processos manuais em sistemas automatizados para aumentar <br/> suas vendas.</p>
                
                <div className="flex w-full items-start justify-center gap-10 mt-10">
                    
                    {/* Card 1 */}
                    <div className="w-[320px]">
                        <div className="w-[320px] h-[200px] overflow-hidden rounded-md">
                            <Image
                                src="/office-1.jpg"
                                width={1200}
                                height={800}
                                alt="office-1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-xl py-2 font-bold">Marketing Digital</h2>
                        <p className="text-black/50">
                            Atraia mais clientes com Estratégias de marketing digital e tráfego pago acessível.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="w-[320px]">
                        <div className="w-[320px] h-[200px] overflow-hidden rounded-md">
                            <Image
                                src="/mkt-1.jpg"
                                width={1200}
                                height={800}
                                alt="office-2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-xl py-2 font-bold">Funis Automatizados</h2>
                        <p className="text-black/50">
                            Crie funis de vendas que funcionam 24/7 para maximizar suas oportunidades de vendas.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="w-[320px]">
                        <div className="w-[320px] h-[200px] overflow-hidden rounded-md">
                            <Image
                                src="/office-3.jpg"
                                width={1200}
                                height={800}
                                alt="office-3"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-xl py-2 font-bold">Micro-Soluções</h2>
                        <p className="text-black/50">
                            Otimize seu tempo com sistemas que nutrem clientes automaticamente.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Services
