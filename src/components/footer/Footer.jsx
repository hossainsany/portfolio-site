import style from './Footer.module.scss';
import { icons } from '../../assets/icons/icons';
import { Link } from 'react-scroll';

const Footer = ({ location }) => {
    return (
        <footer className={`${style.footer} ${location.pathname === '/projects' ? style.bgLight : style.bgDark}`}>
            <div className={style.socials}>
                <div className={style.iconCard}>
                    <a href='mailto:contact@hossainsany.com'>
                        <img src={icons.email} alt='envelope icon' />
                    </a>
                </div>
                <div className={style.iconCard}>
                    <a href='https://www.linkedin.com/in/hossainsany/' target='_black'>
                        <img src={icons.linkedin} alt='linkedin icon' />
                    </a>
                </div>
                <div className={style.iconCard}>
                    <a href='https://github.com/hossainsany/' target='_black'>
                        <img src={icons.github} alt='github icon' />
                    </a>
                </div>
                <div className={style.iconCard}>
                    <a href='https://www.upwork.com/freelancers/~015fdcf2a10aec9174' target='_black'>
                        <img src={icons.upwork} alt='upwork icon' />
                    </a>
                </div>
            </div>
            <div className={style.copyright}>
                <p>
                    All rights reserved <span className='active'>© 2024 Hossain Sany.</span>
                </p>
            </div>
            <Link to='header' smooth={true} offset={0} duration={500} className={style.scrollTop}>
                <img src={icons.up} alt='arrow pointing up' />
            </Link>
        </footer>
    );
};

export default Footer;
