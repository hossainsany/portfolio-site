import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import style from './Navbar.module.scss';

import logo from '../../assets/hs-logo.svg';
import { BurgerMenuIcon } from '../../assets/icons';

const Navbar = ({ location }) => {
    const isHome = location.pathname;

    return (
        <nav className={`${style.navbar} ${location.pathname === '/projects' ? style.bgLight : style.bgDark}`}>
            {isHome === '/' ? (
                <ScrollLink activeClass='active' className={style.logo} spy={true} smooth={true} offset={0} duration={500} to='header'>
                    {' '}
                    <img src={logo} alt='hossain sany website logo' />
                </ScrollLink>
            ) : (
                <Link to='/' className={style.logo}>
                    <img src={logo} alt='hossain sany website logo' />
                </Link>
            )}

            <div className={style.burgerMenu}>
                <BurgerMenuIcon />
            </div>

            <ul className={style.navLinks}>
                <li>
                    {isHome === '/' ? (
                        <ScrollLink activeClass='active' spy={true} smooth={true} offset={0} duration={500} to='header'>
                            Home
                        </ScrollLink>
                    ) : (
                        <Link to='/'>Home</Link>
                    )}
                </li>
                <li>
                    {isHome === '/' ? (
                        <ScrollLink activeClass='active' spy={true} smooth={true} offset={0} duration={500} to='about'>
                            About
                        </ScrollLink>
                    ) : (
                        <Link to='/'>About</Link>
                    )}
                </li>
                <li>
                    <ScrollLink activeClass='active' spy={true} smooth={true} offset={0} duration={500} to='projects'>
                        Projects
                    </ScrollLink>
                </li>
                <li>
                    {isHome === '/' ? (
                        <ScrollLink activeClass='active' spy={true} smooth={true} offset={0} duration={500} to='contact'>
                            Contact
                        </ScrollLink>
                    ) : (
                        <Link to='/'>Contact</Link>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
