import { Link } from 'react-scroll';
import { DoubleDownIcon } from '../../assets/icons';
import style from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={style.hero}>
            <div className='container'>
                <h1>
                    Hey, Im <span className={style.heroText}>Hossain Sany</span>.
                </h1>
                <h1>A Freelance Web Developer!</h1>

                <Link to='about' smooth={true} offset={0} duration={800} className={style.scroll}>
                    <DoubleDownIcon />
                </Link>
            </div>
        </div>
    );
};

export default Hero;
