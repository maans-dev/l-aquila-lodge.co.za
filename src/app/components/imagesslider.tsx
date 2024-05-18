"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import king from '../../../public/king-protea.jpg'
import bunches from '../../../public/bunches.jpg'
import pin from '../../../public/pin-cushion.jpg'

import dried3 from '../../../public/dried-flowers.jpg'
import dried2 from '../../../public/dried-flowers2.jpg'
import dried from '../../../public/dried-flowers3.jpg'

import wreathes from '../../../public/wreathes.jpg'
import wreathes2 from '../../../public/wreathes2.jpg'


export function ImagesSliderDemo() {
    const images = [king, bunches, pin].map((image) => image.src);
    const driedImages = [wreathes, dried2, wreathes2,dried, dried3 ].map((image) => image.src);

  return (
    <div className="flex justify-between p-[200px] bg-white">
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Fresh Flowers
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border border-white text-white mx-auto text-center rounded-full relative mt-4">
  <span>Shop now →</span>
  <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-white to-transparent" />
</button>
      </motion.div>
    </ImagesSlider>
    <ImagesSlider className="h-[40rem]" images={driedImages}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Dried Flowers
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border border-white text-white mx-auto text-center rounded-full relative mt-4">
  <span>Shop now →</span>
  <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-white to-transparent" />
</button>

      </motion.div>
    </ImagesSlider>
   
    </div>

  );
}
