import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

import style from './Navbar.module.scss';
import ScrollLinks from './ScrollLinks';
import PageLinks from './PageLinks';
import logo from '../../assets/hs-logo.png';
import { BurgerMenuIcon, Xicon } from '../../assets/icons';

const Navbar = ({ location }) => {
    const route = location.pathname;
    const [burgerOpen, setBurgerOpen] = useState(false);

    const clickHandle = () => {
        burgerOpen ? setBurgerOpen(false) : setBurgerOpen(true);
        console.log('handling click');
    };

    return (
        <motion.nav
            initial={{ y: -85, x: '-50%' }}
            animate={{ y: 0, x: '-50%' }}
            transition={{ ease: 'easeOut', duration: 0.4, delay: 0.2 }}
            className={`${style.navbar}  ${location.pathname === '/projects' ? style.bgLight : style.bgDark}`}
        >
            {route === '/' ? (
                <ScrollLink className={`${style.logo} ${burgerOpen ? style.hidden : ''}`} to='top' smooth={true} offset={0} duration={800}>
                    <img src={logo} alt='website logo' />
                </ScrollLink>
            ) : (
                <Link className={`${style.logo} ${burgerOpen ? style.hidden : ''}`} to='/'>
                    <img src={logo} alt='website logo' />
                </Link>
            )}

            <div className={style.burgerMenu} onClick={clickHandle}>
                {burgerOpen ? <Xicon /> : <BurgerMenuIcon />}
            </div>

            {route === '/' ? (
                <ScrollLinks navLinks={`${style.navLinks} ${burgerOpen ? style.visible : ''}`} clickHandle={clickHandle} />
            ) : (
                <PageLinks navLinks={`${style.navLinks} ${burgerOpen ? style.visible : ''}`} clickHandle={clickHandle} />
            )}
        </motion.nav>
    );
};

export default Navbar;
