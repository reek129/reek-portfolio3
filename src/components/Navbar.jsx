import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';
import {FaGithubSquare , FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
// import resumeUrl from "../../src/assets/"



const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    // const resumeUrl = '/Reek_Resume.pdf';
    const resumeUrl = `${import.meta.env.BASE_URL}/Reek_Resume3.pdf`;

    window.open(resumeUrl);
  };

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const renderNavLinks = (isSecondary) => (
    <ul className={`list-none ${isSecondary ? 'flex sm:hidden' : 'hidden sm:flex'} flex-row gap-6`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : isSecondary ? 'text-secondary' : 'text-white'
          } hover:text-white text-[20px] font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            if (isSecondary) {
              setToggle(false);
            }
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
      <li
        className={`text-${
          isSecondary ? 'secondary' : 'white'
        } hover:text-white text-[20px] font-medium cursor-pointer`}
      >
        <button onClick={toggleResume}>Resume</button>
      </li>
    </ul>
  );

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[20px] font-bold cursor-pointer flex">
              Reek&nbsp;
              <span className="sm:block hidden">Majumder</span>&nbsp;&nbsp;
              
            </p>
          </Link>
                    {/* Social Media Links */}
            <div className="flex items-center space-x-4 mr-auto"> 
            <a href="https://github.com/reek129" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className="text-2xl text-white hover:text-gray-400" />
            </a>
            <a href="https://www.linkedin.com/in/reek-majumder-19274333/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-white hover:text-gray-400" />
            </a>
            <a href="https://scholar.google.com/citations?user=0faAjkoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              <SiGooglescholar className="text-2xl text-white hover:text-gray-400" />
            </a>
           </div>



          {renderNavLinks(false)}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass ${
                toggle ? 'flex' : 'hidden'
              }`}
            >
              {renderNavLinks(true)}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
