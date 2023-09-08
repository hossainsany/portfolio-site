import style from './Skills.module.scss';
import { icons } from '../../assets/icons/icons';

const Skills = () => {
    return (
        <div className={style.skills}>
            <h3>Skills:</h3>
            <div className={style.styleCards}>
                <div className={style.iconCard}>
                    <img src={icons.nextjs} alt='next js icon' />
                    <p>NextJS</p>
                    <div></div>
                </div>
                <div className={style.iconCard}>
                    <img src={icons.react} alt='react js icon' />
                    <p>ReactJS</p>
                </div>
                <div className={style.iconCard}>
                    <img src={icons.js} alt='js icon' />
                    <p>JavaScript</p>
                </div>
                <div className={style.iconCard}>
                    <img src={icons.tailwind} alt='tailwind icon' />
                    <p>Tailwind</p>
                </div>
                <div className={style.iconCard}>
                    <img src={icons.mui} alt='material ui icon' />
                    <p>MaterialUI</p>
                </div>
                <div className={style.iconCard}>
                    <img src={icons.css} alt='css icon' />
                    <p>CSS</p>
                </div>
                <div className={style.iconCard}>
                    <img src={icons.html} alt='html icon' />
                    <p>HTML</p>
                </div>
                <div className={style.iconCard}>
                    <img src={icons.nodejs} alt='node js icon' />
                    <p>NodeJS</p>
                </div>
                <div className={style.iconCard}>
                    <img src={icons.npm} alt='npm icon' />
                    <p>NPM</p>
                </div>

                <div className={style.iconCard}>
                    <img src={icons.git} alt='git icon' />
                    <p>Git</p>
                </div>
                <div className={style.iconCard}>
                    <img src={icons.wordpress} alt='wordpress icon' />
                    <p>WordPress</p>
                </div>
                <div className={style.iconCard}>
                    <img src={icons.figma} alt='figma icon' />
                    <p>Figma</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;
