import { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = ({ theme, setTheme }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${theme === 'light' ? 'bg-gray-800' : 'bg-primary'}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'><span className="sm:block hidden">| Pranav Pise</span></p>
        </Link>
        <ul className='list-none hidden md:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text=[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li
            className={`text-secondary hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
          >
            <a href="https://github.com/TheCaptain1810" target='_blank' title='Github'>
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li
            className={`text-secondary hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
          >
            <a href='https://github.com/TheCaptain1810/Resume/blob/main/Main%20Resume.pdf' target='_blank'>Download Resume</a>
          </li>
          <li>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className={`text-secondary hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
            >
              {theme === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
            </button>
          </li>
        </ul>

        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white"
                      : "text-secondary"
                  } hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li
                className={`text-secondary hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
              >
                <a href="https://github.com/TheCaptain1810" target='_blank' title='Github'>
                  <i class="fa-brands fa-github"></i>
                </a>
              </li>
              <li
                className={`text-secondary hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
              >
                <a href='https://github.com/TheCaptain1810/Resume/blob/main/Main%20Resume.pdf' target='_blank'>Download Resume</a>
              </li>
              <li>
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className={`text-secondary hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
                >
                  {theme === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar