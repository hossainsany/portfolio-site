import { Link } from 'react-router-dom';
import projects from '../../constants/data';

import style from './Projects.module.scss';
import SingleProjectCard from './SingleProjectCard';

const Projects = () => {
    const limitedProjects = projects.slice(0, 3);

    return (
        <section className={style.projects} id='projects'>
            <div className='container'>
                <h2 className={`${style.sectionTitle} section-title`}>Projects</h2>
                <div className={style.projectsContainer}>
                    {limitedProjects.map((project) => {
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
                <div className={style.seeMoreBtn}>
                    <Link to='/projects' className={`btn ${style.seeMore}`}>
                        See More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
