import { Link } from 'react-router-dom';
const PageLinks = ({ navLinks, clickHandle }) => {
    return (
        <ul className={`navLinks ${navLinks}`}>
            <li>
                <Link to='/' onClick={clickHandle}>
                    Home
                </Link>
            </li>
            <li>
                <Link to='/' onClick={clickHandle}>
                    About
                </Link>
            </li>
            <li>
                <Link to='/' onClick={clickHandle}>
                    Projects
                </Link>
            </li>
            <li>
                <Link to='/' onClick={clickHandle}>
                    Contact
                </Link>
            </li>
        </ul>
    );
};

export default PageLinks;
