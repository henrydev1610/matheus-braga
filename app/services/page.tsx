import Image from "next/image";

const Services = () => {
  return (
    <section className="w-full py-20 bg-white">
      {/* TÍTULO CENTRAL */}
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Soluções Inovadoras
        </h2>
        <p className="mt-3 text-gray-600">
          Transforme seu negócio com tecnologia e marketing eficazes.
        </p>
      </div>

      {/* GRID DE CARDS */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 mt-30 md:grid-cols-2 gap-8">
          
          {/* CARD 1 */}
          <div className="bg-white  overflow-hidden rounded-lg flex flex-col">
            {/* Texto */}
            <div className="bg-sky-50 p-16">
              <h3 className="text-xl font-semibold mb-3">
                Automação de Processos
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Otimize seu tempo com sistemas automatizados que <br/> geram leads
                e fecham vendas continuamente.
              </p>
            </div>

            {/* Imagem */}
            <div className="relative w-full h-100">
              <Image
                src="/automate1.jpg"
                alt="Automação de processos"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white shadow-sm overflow-hidden rounded-lg flex flex-col">
            {/* Texto */}
            <div className="bg-sky-50 p-16">
              <h3 className="text-xl font-semibold mb-3">
                Marketing Digital
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Aumente suas vendas com estratégias de marketing digital <br/> 
                personalizadas e tráfego pago acessível.
              </p>
            </div>

            {/* Imagem */}
            <div className="relative w-full h-100">
              <Image
                src="/office-new.jpg"
                alt="Marketing digital"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
