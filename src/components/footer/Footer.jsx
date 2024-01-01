import style from './Footer.module.scss';
import { EmailIcon, LinkedinIcon, GithubIcon, UpworkIcon, UpIcon } from '../../assets/icons';
import { Link } from 'react-scroll';

const Footer = ({ location }) => {
    return (
        <footer
            className={`${style.footer} ${
                location.pathname === '/projects' ? style.bgLight : style.bgDark
            }`}
        >
            <div className={style.socials}>
                <div className={style.iconCard}>
                    <a href='mailto:contact@hossainsany.com'>
                        <EmailIcon />
                    </a>
                </div>
                <div className={style.iconCard}>
                    <a
                        href='https://www.linkedin.com/in/hossainsany/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <LinkedinIcon />
                    </a>
                </div>
                <div className={style.iconCard}>
                    <a
                        href='https://github.com/hossainsany/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <GithubIcon />
                    </a>
                </div>
                <div className={style.iconCard}>
                    <a
                        href='https://www.upwork.com/freelancers/~015fdcf2a10aec9174'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <UpworkIcon />
                    </a>
                </div>
            </div>
            <div className={style.copyright}>
                <p>
                    All the icons are powered by{' '}
                    <a href='https://icons8.com/' target='_blank' rel='noopener noreferrer'>
                        Icons8
                    </a>{' '}
                    and{' '}
                    <a
                        href='https://fontawesome.com/icons'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        FontAwesome
                    </a>
                    .
                </p>
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
