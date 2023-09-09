import style from './Skills.module.scss';
import {
    CssIcon,
    FigmaIcon,
    GitIcon,
    HtmlIcon,
    JsIcon,
    NextjsIcon,
    NodejsIcon,
    NpmIcon,
    ReactIcon,
    TailwindIcon,
    MuiIcon,
    WordpressIcon,
} from '../../assets/icons/index';

const Skills = () => {
    return (
        <div className={style.skills}>
            <h3>Skills:</h3>
            <div className={style.skillCards}>
                <div className={style.iconCard}>
                    <NextjsIcon />
                    <p>NextJS</p>
                    <div></div>
                </div>
                <div className={style.iconCard}>
                    <ReactIcon />
                    <p>ReactJS</p>
                </div>
                <div className={style.iconCard}>
                    <JsIcon />
                    <p>JavaScript</p>
                </div>
                <div className={style.iconCard}>
                    <TailwindIcon />
                    <p>Tailwind</p>
                </div>
                <div className={style.iconCard}>
                    <MuiIcon />
                    <p>MaterialUI</p>
                </div>
                <div className={style.iconCard}>
                    <CssIcon />
                    <p>CSS</p>
                </div>
                <div className={style.iconCard}>
                    <HtmlIcon />
                    <p>HTML</p>
                </div>
                <div className={style.iconCard}>
                    <NodejsIcon />
                    <p>NodeJS</p>
                </div>
                <div className={style.iconCard}>
                    <NpmIcon />
                    <p>NPM</p>
                </div>

                <div className={style.iconCard}>
                    <GitIcon />
                    <p>Git</p>
                </div>
                <div className={style.iconCard}>
                    <WordpressIcon />
                    <p>WordPress</p>
                </div>
                <div className={style.iconCard}>
                    <FigmaIcon />
                    <p>Figma</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;
