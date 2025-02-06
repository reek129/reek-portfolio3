import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { publications } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import PublicationCard from "./PublicationCard";


const Publications = () => {
    return (
      <section id="publication" className="relative w-full h-auto mx-auto">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>Research Work</p>
          <h2 className={`${styles.sectionHeadText}`}>Publications</h2>
        </motion.div>
  
        <div className="w-full flex">
          <motion.p variants={fadeIn("", "", 0.1)} className="mt-1 text-secondary text-[17px] max-w-3xl leading-[20px]">
            Below are some of my research publications showcasing my work in machine learning, cybersecurity, and quantum computing.
          </motion.p>
        </div>
  
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {publications.map((publication, index) => (
            <PublicationCard key={`publication-${index}`} {...publication} />
          ))}
        </div>
      </section>
    );
  };
  

// const Publications = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText}`}>Research Work</p>
//         <h2 className={`${styles.sectionHeadText}`}>Publications</h2>
//       </motion.div>

//       <div className="w-full flex">
//         <motion.p variants={fadeIn("", "", 0.1)} className="mt-1 text-secondary text-[17px] max-w-3xl leading-[20px]">
//           Below are some of my research publications showcasing my work in machine learning, cybersecurity, and quantum computing.
//         </motion.p>
//       </div>

//       <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {publications.map((publication, index) => (
//           <PublicationCard key={`publication-${index}`} {...publication} />
//         ))}
//       </div>
//     </>
//   );
// };

export default SectionWrapper(Publications, "");













// V1

// import React from "react";

// const Publication = () => {
//   const publications = [
//     { title: "Graph-Powered Defense: Controller Area Network Intrusion Detection for UAVs", link: "https://your-link.com" },
//     { title: "Hybrid Quantum-Classical Neural Network for Incident Detection", link: "https://your-link.com" },
//   ];

//   return (
//     <section className="p-6 bg-gray-900 text-white">
//       <h2 className="text-3xl font-bold mb-4">Publications</h2>
//       <ul className="list-disc pl-6">
//         {publications.map((pub, index) => (
//           <li key={index} className="mb-2">
//             <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-[#915EFF] hover:underline">
//               {pub.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Publication;
