import { SingleProjectCard } from '../components';
import style from './ProjectsPage.module.scss';

import projects from '../constants/data';

const ProjectsPage = () => {
    return (
        <section className={style.projectsPage}>
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
