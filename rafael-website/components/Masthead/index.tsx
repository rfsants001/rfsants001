import React, { useRef, useContext, useState, useCallback, ReactElement } from "react";
import Image, { ImageProps } from "next/image";
import { motion } from "framer-motion";

import { ScrollContext } from "../../utils/ScrollObserver";

const Masthead: React.FC<ImageProps> = ({onLoad}): ReactElement => {
  const [imageLoader, setImageLoader] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 3,
      fill: "rgba(255, 255, 255, 1)"
    }
  };

  return (
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col items-center justify-center strick top-0 -z-10"
      style={{
        transform: `translateY(-${progress * 50}vh)`,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full z-0 h-full object-cover"
      >
        <source src={"../../assets/video.mp4"} type="video/mp4" />
      </video>

      <div className={`flex-grow-0 pt-10 transition-opacity duration-1000 ${imageLoader ? 'opacity-100' : 'opaticy-0'}`}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 200
            }}>
          <Image
              src={"/assets/logo.svg"}
              width={200 / 3}
              height={200 / 3}
              alt="logo"
            />
      </motion.div>
        
      </div>
      <div className="p-12 font-bold z-10 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl text-white	">Rafael</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight text-white	">
          <span>App Develpment,</span> <span>done right.</span>
        </h2>
      </div>
      <div className={`
            drop-shadow-[0_5px_3px_rgba(0,0,0,0.7)] 
            flex-grow-0 pb-20 md:pb-10
            `}>
        <motion.svg
          xmlns="https://www.svgrepo.com/show/175769/down-arrow.svg"
          viewBox="178 230 100 100"
          className="item mx-auto">
          <motion.path
            d="M8.347 0L245 490L481.653 0L245.001 150.769L8.347 0zM369.968 125.622L245.001 384.372L120.033 125.622L220.318 189.512L245.00099 205.23799L269.684 189.512L369.968 125.622z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 4, ease: [1, 0, 0.8, 1] }
            }}
          />
      </motion.svg>
      </div>
    </div>
  );
};

export default Masthead;
