import React from 'react'
import Image from 'next/image'

const Partners = () => {
  return (
    <div className="w-full py-20">
      <section className="container mx-auto flex flex-col items-center">

        <h1 className="text-5xl font-bold text-center">Parcerias & Tecnologias</h1>

        <p className="text-center my-5">
          Ferramentas homologadas pela Henry-dev
        </p>

        {/* GRID DE LOGOS */}
        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-6 
          gap-10 
          items-center 
          justify-items-center
          mt-10
        ">

          {/* LOGO 1 */}
          <Image
            src="/notion.png"
            width={1200}
            height={800}
            alt="logo"
            className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition"
          />

          {/* LOGO 2 */}
          <Image
            src="/bluehost.png"
            width={1200}
            height={800}
            alt="logo"
            className="h-20 w-auto object-contain opacity-90 hover:opacity-100 transition"
          />

          {/* LOGO 3 */}
          <Image
            src="/banco-do.png"
            width={1200}
            height={800}
            alt="logo"
            className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition"
          />

          {/* LOGO 4 */}
          <Image
            src="/notion.png"
            width={1200}
            height={800}
            alt="logo"
            className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition"
          />

          {/* LOGO 5 */}
          <Image
            src="/notion.png"
            width={1200}
            height={800}
            alt="logo"
            className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition"
          />

          {/* LOGO 6 */}
          <Image
            src="/notion.png"
            width={1200}
            height={800}
            alt="logo"
            className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition"
          />
          {/* LOGO 6 */}
          <Image
            src="/notion.png"
            width={1200}
            height={800}
            alt="logo"
            className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition"
          />
          {/* LOGO 6 */}
          <Image
            src="/notion.png"
            width={1200}
            height={800}
            alt="logo"
            className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition"
          />
          {/* LOGO 6 */}
          <Image
            src="/notion.png"
            width={1200}
            height={800}
            alt="logo"
            className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition"
          />
          {/* LOGO 6 */}
          <Image
            src="/notion.png"
            width={1200}
            height={800}
            alt="logo"
            className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition"
          />
          {/* LOGO 6 */}
          <Image
            src="/notion.png"
            width={1200}
            height={800}
            alt="logo"
            className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition"
          />
          {/* LOGO 6 */}
          <Image
            src="/notion.png"
            width={1200}
            height={800}
            alt="logo"
            className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition"
          />
          {/* LOGO 6 */}
          <Image
            src="/notion.png"
            width={1200}
            height={800}
            alt="logo"
            className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition"
          />
          {/* LOGO 6 */}
          <Image
            src="/notion.png"
            width={1200}
            height={800}
            alt="logo"
            className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition"
          />
          {/* LOGO 6 */}
          <Image
            src="/notion.png"
            width={1200}
            height={800}
            alt="logo"
            className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition"
          />
          {/* LOGO 6 */}
          <Image
            src="/notion.png"
            width={1200}
            height={800}
            alt="logo"
            className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition"
          />
          {/* LOGO 6 */}
          <Image
            src="/notion.png"
            width={1200}
            height={800}
            alt="logo"
            className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition"
          />

        </div>

      </section>
    </div>
  )
}

export default Partners
