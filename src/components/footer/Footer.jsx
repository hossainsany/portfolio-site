import style from './Footer.module.scss';
import { EmailIcon, LinkedinIcon, GithubIcon, UpworkIcon, UpIcon } from '../../assets/icons';
import { Link } from 'react-scroll';

const Footer = ({ location }) => {
    return (
        <footer className={`${style.footer} ${location.pathname === '/projects' ? style.bgLight : style.bgDark}`}>
            <div className={style.socials}>
                <div className={style.iconCard}>
                    <a href='mailto:contact@hossainsany.com'>
                        <EmailIcon />
                    </a>
                </div>
                <div className={style.iconCard}>
                    <a href='https://www.linkedin.com/in/hossainsany/' target='_black'>
                        <LinkedinIcon />
                    </a>
                </div>
                <div className={style.iconCard}>
                    <a href='https://github.com/hossainsany/' target='_black'>
                        <GithubIcon />
                    </a>
                </div>
                <div className={style.iconCard}>
                    <a href='https://www.upwork.com/freelancers/~015fdcf2a10aec9174' target='_black'>
                        <UpworkIcon />
                    </a>
                </div>
            </div>
            <div className={style.copyright}>
                <p>
                    All rights reserved <span className='active'>© 2024 Hossain Sany.</span>
                </p>
            </div>
            <Link to='top' smooth={true} offset={0} duration={800} className={style.scrollTop}>
                <UpIcon />
            </Link>
        </footer>
    );
};

export default Footer;
