import style from './About.module.scss';
import photo from '../../assets/hossainsany.jpg';
import Skills from './Skills';

const About = () => {
    return (
        <section className={style.about} id='about'>
            <div className={`container ${style.container}`}>
                <div className={style.text}>
                    <div className={style.aboutText}>
                        <h2>About Me</h2>
                        <p>
                            Hello, Im Hossain Sany, a passionate web developer and designer with over three years of experience in crafting
                            exceptional online experiences. My journey in the world of web development has been marked by a commitment to excellence,
                            attention to detail, and a dedication to client satisfaction.
                        </p>
                        <p>
                            My work is defined by a strong track record of 5-star ratings and a 100% Job Success Score on
                            <a href='https://www.upwork.com/freelancers/~015fdcf2a10aec9174' className={style.link}>
                                Upwork
                            </a>
                            , reflecting my unwavering commitment to delivering top-notch results. I specialize in front-end development, utilizing
                            technologies like NextJS, React, JavaScript, Tailwind CSS, Node JS and Git to create seamless online experiences.
                        </p>
                        <p>
                            When Im not coding, I enjoy traveling, photography, and staying updated with the latest technologies to enhance my skills.
                            Lets collaborate on your next web project!
                        </p>
                    </div>
                    <Skills />
                </div>
                <div className={style.aboutImg}>
                    <img src={photo} alt='picture of hossain sany' />
                </div>
            </div>
        </section>
    );
};

export default About;
