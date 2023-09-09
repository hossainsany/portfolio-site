import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import style from './Navbar.module.scss';

import logo from '../../assets/hs-logo.png';
import { BurgerMenuIcon, Xicon } from '../../assets/icons';
import { useState } from 'react';

const Navbar = ({ location }) => {
    const isHome = location.pathname;
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        isActive ? setIsActive(false) : setIsActive(true);
    };

    return (
        <nav
            className={`${style.navbar} ${isActive ? style.overflowVisible : style.overflowHidden} ${
                location.pathname === '/projects' ? style.bgLight : style.bgDark
            }`}
        >
            {isHome === '/' ? (
                <ScrollLink
                    activeClass='active'
                    className={`${style.logo} ${isActive ? style.hidden : style.show}`}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                    to='top'
                >
                    <img src={logo} alt='hossain sany website logo' />
                </ScrollLink>
            ) : (
                <Link to='/' className={`${style.logo} ${isActive ? style.hidden : style.show}`}>
                    <img src={logo} alt='hossain sany website logo' />
                </Link>
            )}

            <div className={style.burgerMenu} onClick={handleClick}>
                {!isActive ? <BurgerMenuIcon /> : <Xicon />}
            </div>

            <ul className={`${style.navLinks} ${isActive ? style.show : style.hidden}`}>
                <li>
                    {isHome === '/' ? (
                        <ScrollLink activeClass='active' onClick={handleClick} spy={true} smooth={true} offset={0} duration={800} to='top'>
                            Home
                        </ScrollLink>
                    ) : (
                        <Link to='/' onClick={handleClick}>
                            Home
                        </Link>
                    )}
                </li>
                <li>
                    {isHome === '/' ? (
                        <ScrollLink activeClass='active' onClick={handleClick} spy={true} smooth={true} offset={0} duration={800} to='about'>
                            About
                        </ScrollLink>
                    ) : (
                        <Link to='/' onClick={handleClick}>
                            About
                        </Link>
                    )}
                </li>
                <li>
                    <ScrollLink activeClass='active' onClick={handleClick} spy={true} smooth={true} offset={0} duration={800} to='projects'>
                        Projects
                    </ScrollLink>
                </li>
                <li>
                    {isHome === '/' ? (
                        <ScrollLink activeClass='active' onClick={handleClick} spy={true} smooth={true} offset={0} duration={800} to='contact'>
                            Contact
                        </ScrollLink>
                    ) : (
                        <Link to='/' onClick={handleClick}>
                            Contact
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
