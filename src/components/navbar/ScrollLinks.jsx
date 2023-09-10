import { Link } from 'react-scroll';

const ScrollLinks = ({ navLinks, clickHandle }) => {
    return (
        <ul className={`navLinks ${navLinks}`}>
            <li>
                <Link activeClass='active' spy={true} smooth={true} offset={0} duration={800} to='top' onClick={clickHandle}>
                    Home
                </Link>
            </li>
            <li>
                <Link activeClass='active' spy={true} smooth={true} offset={0} duration={800} to='about' onClick={clickHandle}>
                    About
                </Link>
            </li>
            <li>
                <Link activeClass='active' spy={true} smooth={true} offset={0} duration={800} to='projects' onClick={clickHandle}>
                    Projects
                </Link>
            </li>
            <li>
                <Link activeClass='active' spy={true} smooth={true} offset={0} duration={800} to='contact' onClick={clickHandle}>
                    Contact
                </Link>
            </li>
        </ul>
    );
};

export default ScrollLinks;
