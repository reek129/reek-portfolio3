// import React from "react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";

const textOptions = [
  "Machine Learning", "Deep Learning", "Generative AI",
  "Frontend Development", "Backend Development", "CyberSecurity Analysis", "Quantum Machine Learning",
  "AI Research", "Data Science", "Computer Vision", "Reinforcement Learning",
  "Software Engineering",  "Cloud Computing", "Environmental Detection", "Natural Language Processing",
];


const numRows = 3; // Adjust for your layout
const numCols = 5; // Adjust for your layout


const Hero = () => {

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % textOptions.length);
    }, 500); // Change every second

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto flex flex-col items-center justify-center">
      <h1 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm <span className="text-[#915EFF]">Reek Majumder, PhD</span>
      </h1>
      <h3 className={`${styles.heroSubText} text-white`}>
        I have worked on
      </h3>

      <div
        className="grid gap-4"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 1fr)`,
          gridTemplateRows: `repeat(${numRows}, 1fr)`,
          gap: "10px",
        }}
      >
        {/* <p mt-2 text-white-100>I have worked on</p> */}
        {textOptions.map((text, index) => (
          <motion.div
            key={text}
            className="p-4 text-center text-white font-bold bg-[#222] rounded-lg"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: visibleIndex === index ? 1.2 : 1,
              opacity: visibleIndex >= index ? 1 : 0.3,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {text}
          </motion.div>
        ))}
      </div>
    </section>
  );

  // return (
  //   <section className="relative w-full h-screen mx-auto">
  //     <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
  //       <div className="flex flex-col justify-center items-center mt-5">
  //         <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
  //         <div className="w-1 sm:h-80 h-40 violet-gradient" />
  //       </div>

  //       <div>
  //         <h1 className={`${styles.heroHeadText} text-white`}>
  //           Hi, I'm <span className="text-[#915EFF]">Reek</span>
  //         </h1>
  //         <p className={`${styles.heroSubText} mt-2 text-white-100`}>
  //           I do
  //           <Typewriter
  //             options={{
  //               strings: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Frontend Development","AI in CyberSecurity Analysis", "Quantum Machine Learning"],
  //               autoStart: true,
  //               loop: true,
  //               loopCount: Infinity,
  //               deleteSpeed: "natural",
  //               pauseFor: 1000,
  //             }}
  //           />
  //         </p>
  //       </div>
  //     </div>

  //     {/* <ComputersCanvas /> */}

  //     <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
  //       <a href="#about">
  //         <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
  //           <motion.div
  //             animate={{
  //               y: [0, 24, 0],
  //             }}
  //             transition={{
  //               duration: 1.5,
  //               repeat: Infinity,
  //               repeatType: "loop",
  //             }}
  //             className="w-3 h-3 rounded-full bg-secondary mb-1"
  //           />
  //         </div>
  //       </a>
  //     </div>
  //   </section>
  // );
};

export default Hero;
