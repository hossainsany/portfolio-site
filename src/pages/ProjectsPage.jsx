import { motion, AnimatePresence } from 'framer-motion';
import { SingleProjectCard } from '../components';
import style from './ProjectsPage.module.scss';
import projects from '../constants/data';
import { useState } from 'react';

const ProjectsPage = () => {
    const [filterSelected, setFilterSelected] = useState('all');

    const handleFilter = (e) => {
        let filterTag = e.target.id;
        setFilterSelected(filterTag);
    };

    return (
        <section className={style.projectsPage} id='top'>
            <h2 className='section-title'>Projects</h2>
            <div className='container'>
                <div className={style.filter}>
                    <button className={`${style.btn} btn ${filterSelected === 'all' ? style.active : ''}`} id='all' onClick={handleFilter}>
                        All
                    </button>
                    <button className={`${style.btn} btn ${filterSelected === 'react' ? style.active : ''}`} id='react' onClick={handleFilter}>
                        React
                    </button>
                    <button className={`${style.btn} btn ${filterSelected === 'html' ? style.active : ''}`} id='html' onClick={handleFilter}>
                        HTML/CSS
                    </button>
                    <button
                        className={`${style.btn} btn ${filterSelected === 'wordpress' ? style.active : ''}`}
                        id='wordpress'
                        onClick={handleFilter}
                    >
                        WordPress
                    </button>
                </div>

                <motion.div layout className={style.projectsContainer}>
                    <AnimatePresence>
                        {projects.map((project) => {
                            if (filterSelected === 'all' || project.tags.includes(filterSelected)) {
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
                            }
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsPage;
