import { motion, AnimatePresence } from 'framer-motion';
import { SingleProjectCard } from '../components';
import style from './ProjectsPage.module.scss';
import projects from '../constants/data';
import { useState } from 'react';

const ProjectsPage = () => {
    const [filterSelected, setFilterSelected] = useState('all');

    const handleFilter = (e) => {
        let filterTag = e.target.id.toLowerCase();
        console.log(filterTag);
        setFilterSelected(filterTag);
    };

    return (
        <section className={style.projectsPage} id='top'>
            <h2 className='section-title'>Projects</h2>
            <div className='container'>
                <div className={style.filter}>
                    <button
                        className={`${style.btn} btn ${
                            filterSelected === 'all' ? style.active : ''
                        }`}
                        id='all'
                        onClick={handleFilter}
                    >
                        All
                    </button>
                    <button
                        className={`${style.btn} btn ${
                            filterSelected === 'react' ? style.active : ''
                        }`}
                        id='react'
                        onClick={handleFilter}
                    >
                        React
                    </button>
                    <button
                        className={`${style.btn} btn ${
                            filterSelected === 'html' ? style.active : ''
                        }`}
                        id='html'
                        onClick={handleFilter}
                    >
                        HTML/CSS
                    </button>
                    <button
                        className={`${style.btn} btn ${
                            filterSelected === 'wordpress' ? style.active : ''
                        }`}
                        id='wordpress'
                        onClick={handleFilter}
                    >
                        WordPress
                    </button>
                </div>

                <motion.div layout className={style.projectsContainer}>
                    <AnimatePresence>
                        {projects.map(
                            ({ title, description, liveLink, githubLink, id, tags, img }) => {
                                const projectTags = tags.map((tag) => tag.toLowerCase());
                                console.log(projectTags);
                                if (
                                    filterSelected === 'all' ||
                                    projectTags.includes(filterSelected)
                                ) {
                                    return (
                                        <SingleProjectCard
                                            title={title}
                                            desc={description}
                                            liveLink={liveLink}
                                            githubLink={githubLink}
                                            key={id}
                                            tags={tags}
                                            img={img}
                                        />
                                    );
                                }
                            }
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsPage;
