import { motion, useScroll } from 'framer-motion';
import { SingleProjectCard } from '../components';
import style from './ProjectsPage.module.scss';
import projects from '../constants/data';

const ProjectsPage = () => {
    const { scrollY } = useScroll();
    console.log(scrollY);

    return (
        <section className={style.projectsPage} id='top'>
            <motion.div
                style={{
                    scaleX: scrollY,
                }}
                className={style.progressBar}
            ></motion.div>
            <h2 className='section-title'>Projects</h2>
            <div className='container'>
                <div className={style.projectsContainer}>
                    {projects.map((project) => {
                        return (
                            <SingleProjectCard
                                title={project.title}
                                desc={project.description}
                                liveLink={project.liveLink}
                                githubLink={project.githubLink}
                                key={project.id}
                                tags={project.tags}
                                img={project.img}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
