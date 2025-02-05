import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[120px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-2 px-4 min-h-[5px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-10 h-10 object-contain" loading="lazy" />

        <h3 className="text-white text-[12px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const groupedServices = services.reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = [];
  }
  acc[service.category].push(service);
  return acc;
}, {});

const About = () => {
  return (
    <>
    <h2 className={styles.sectionHeadText}>Summary</h2>
     <div className="flex flex-col md:flex-row items-center gap-10 "> 
     <motion.div variants={textVariant()} className="w-full md:w-1/3 flex justify-center">
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        
        <img src="/public/my_pic.jpg" alt="Profile" className="w-full max-w-xs rounded-lg shadow-lg" />
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="w-full md:w-2/3 mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] justify-around"
        // className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a versatile professional with a Ph.D. in Civil Engineering (Transportation Cyber-Physical Systems, May 2025) and an
        M.S. in Computer Science, reflecting my ability to adapt seamlessly to diverse domains. My academic journey bridges computational expertise
        and practical problem-solving, showcased by three years of industry experience in Java and web-based software development and a strong
        portfolio of AI/ML research in autonomous vehicles and Unmanned Aerial Vehicles (UAVs). I excel in developing advanced solutions like hybrid
        quantum-classical models for traffic sign classification, adversarial learning, and graph-based ML systems for intrusion detection, leveraging my
        deep technical acumen to address real-world challenges. My expertise spans software development, data science, machine learning, quantum
        machine learning (QML), and cloud computing, enabling me to design innovative, scalable solutions across interdisciplinary domains.
      </motion.p>


    </div>
      

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
      <div className="mt-20">
      <h2 className="text-white text-[32px] font-bold">Skills</h2>
    {Object.entries(groupedServices).map(([category, items]) => (
      <div key={category} className="mb-10">
        <h3 className="text-white text-[22px] font-bold">{category}</h3> {/* ✅ Display Category */}
        <div className="flex flex-wrap gap-5 mt-2">
          {items.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    ))}
  </div>

    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
