
export default function Hero() {
  return (
    <div className="relative h-[80vh] flex items-center justify-center text-center text-white">

      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 px-4">
        <h1 className="text-5xl font-bold uppercase">Transforme neu negócio <br/> com tecnologia</h1>
        <p className="mt-4 text-lg">soluções automatizadas para aumentar vendas otimizar o seu tempo.</p>

        <button className="py-4 px-20 my-10 rounded-full bg-blue-400 transition-colors duration-300 hover:bg-blue-300 font-bold cursor-pointer">Saiba mais</button>
        <p className="" >
            &#9733;
            &#9733;
            &#9733;
            &#9733;
            &#9733;
        </p>
        <p className="font-bold uppercase">satistação garantida</p>


      </div>
    </div>
  );
}
