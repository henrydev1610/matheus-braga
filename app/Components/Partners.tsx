"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/notion.png",
  "/bluehost.png",
  "/banco-do.png",
  "/btg.png",
  "/bancoOriginal.png",
  "/digitalOcean.png",
  "/obsidian.png",
  "/microsoft.png",
  "/rbr.png",
   "/bancoOriginal.png",
  "/digitalOcean.png",
  "/hostinger.png",

 
];


const marqueeLogos = [...logos, ...logos, ...logos];

const Partners: React.FC = () => {
  return (
    <div className="w-screen pb-[10rem] py-20 bg-background">
      {/* Título */}
      <section className="max-w-6xl mx-auto flex flex-col items-center px-4">
        <h1 className="text-4xl sm:text-5xl  font-bold text-center">
          Parcerias &amp; Tecnologias
        </h1>

        <p className="text-center my-5 font-medium text-muted-foreground">
          Empresas homologadas pela Henry-dev
        </p>
      </section>

      {/* CARROSSEL INFINITO */}
      <div className="relative w-screen select-none overflow-hidden mt-10 px-10">
        <motion.div
          className="flex items-center gap-16 min-w-max"
          // começa em 0 e vai até -1/3 da largura total do track [A][A][A]
          animate={{ x: ["0%", "-33.3333%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25, // controla a velocidade
            ease: "linear",
          }}
        >
          {marqueeLogos.map((src, index) => (
            <div key={index} className="shrink-0 flex justify-center">
              <Image
                src={src}
                width={200}
                height={80}
                alt={`logo-${index}`}
                className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
