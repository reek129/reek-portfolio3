import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const PublicationCard = ({ title, description, authors, venue, year, link }) => {

    const myName = "Reek"; // Change this to match the name you want to bold
    const lastNames = ["Majumder", "Majumdar"];

    // Make "Reek" bold in the authors list
    // const formattedAuthors = authors.replace(myName, `<strong>${myName}</strong>`);
    let formattedAuthors = authors;
    lastNames.forEach((lastName) => {
        const fullName = `${myName} ${lastName}`;
        formattedAuthors = formattedAuthors.replace(fullName, `<strong>${fullName}</strong>`);
    });
    

  return (
    <motion.div variants={fadeIn("up", "spring")} className="bg-tertiary p-3 rounded-2xl sm:w-[360px] w-full">
      <div className="mt-1">
        <h3 className="text-white font-bold text-[18px]">{title}</h3>
        {/* <p className="mt-1 text-secondary text-[14px] italic">{authors}</p>
         */}
         <p
          className="mt-1 text-secondary text-[14px] italic"
          dangerouslySetInnerHTML={{ __html: formattedAuthors }}
        />
        <p className="mt-1 text-gray-400 text-[14px]">{venue}, {year}</p>
        <p className="mt-2 text-secondary text-[12px]">{description}</p>
      </div>
      <div className="mt-1">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#915EFF] font-semibold hover:underline"
        >
          Read More
        </a>
      </div>
    </motion.div>
  );
};

export default PublicationCard;
