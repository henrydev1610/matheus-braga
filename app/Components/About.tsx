import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className=' select-none container m-auto w-full h-[60vh]'>
      <section className='my-20 grid grid-cols-1 place-items-center md:grid-cols-2 gap-8'>
        <div>
            <h1 className='text-5xl font-bold leading-16 '>Transformando <br/> negócios
            com <br/> tecnologia</h1>
            <p className='text-black/60'>
                Aqui nós ajudamos empreendedores a automatizar processos, <br/> aumentar vendas e otimizar tempo, focando no que realmente <br/> importa para o seu negócio.
            </p>
            <button className='py-4 px-20 border-1 rounded-full mt-20 cursor-pointer font-bold  transition-colors duration-300 hover:bg-blue-300 hover:text-white' >Saiba mais</button>
        </div>
        <div className=' '>     
            <Image
            src='/foto-home-1.jpg'
            width={1200}
            height={800}
            alt='foto-home-office'
            className='w-150 h-auto object-cover rounded-2xl shadow-2xl'
            
            
            />

            <div className='bg-blue-100 ml-10 mt-[-80] rounded-md inline-block py-10 px-10 shadow-2xl'>
                <p className='text-3xl '>" Resultados em pouco tempo!</p>
                <p>Claudimar</p>
            </div>


        </div>
      </section>
    </div>
  )
}

export default About
