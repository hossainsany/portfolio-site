import { motion } from 'framer-motion';
import {
    CssIcon,
    HtmlIcon,
    JsIcon,
    NextjsIcon,
    NodejsIcon,
    ReactIcon,
    TailwindIcon,
    WordpressIcon,
    SassIcon,
    BootstrapIcon,
    ExpressIcon,
    MongoIcon,
    ViteIcon,
    ElementorIcon,
    RapidIcon,
    YoutubeIcon,
} from '../../assets/icons/index';

import './SingleProjectCard.scss';

const SingleProjectCard = ({ title, desc, liveLink, githubLink, tags, img }) => {
    const tagIcons = (icon) => {
        const iconLower = icon.toLowerCase();

        if (iconLower === 'html') {
            return <HtmlIcon />;
        } else if (iconLower === 'css') {
            return <CssIcon />;
        } else if (iconLower === 'javascript') {
            return <JsIcon />;
        } else if (iconLower === 'react') {
            return <ReactIcon />;
        } else if (iconLower === 'tailwind css') {
            return <TailwindIcon />;
        } else if (iconLower === 'sass') {
            return <SassIcon />;
        } else if (iconLower === 'bootstrap') {
            return <BootstrapIcon />;
        } else if (iconLower === 'next js') {
            return <NextjsIcon />;
        } else if (iconLower === 'vite') {
            return <ViteIcon />;
        } else if (iconLower === 'exoress js') {
            return <ExpressIcon />;
        } else if (iconLower === 'mongodb') {
            return <MongoIcon />;
        } else if (iconLower === 'wordpress') {
            return <WordpressIcon />;
        } else if (iconLower === 'node js') {
            return <NodejsIcon />;
        } else if (iconLower === 'rapidapi') {
            return <RapidIcon />;
        } else if (iconLower === 'elementor') {
            return <ElementorIcon />;
        } else if (iconLower === 'youtube v3 api') {
            return <YoutubeIcon />;
        }
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='singleProjectCard'
        >
            <div className='projectImg'>
                <img src={img} alt='project screenshot' loading='lazy' />
            </div>
            <div className='projectText'>
                <h3 className='title'>{title}</h3>
                <div>
                    <p className='desc'>{desc}</p>
                    <ul className='tags'>
                        {tags.map((tag) => (
                            <li key={tag}>
                                {tagIcons(tag)} {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='buttons'>
                    <a href={liveLink} className='btn' target='_blank' rel='noopener noreferrer'>
                        View Demo
                    </a>
                    <a href={githubLink} className='btn' target='_blank' rel='noopener noreferrer'>
                        Souce Code
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default SingleProjectCard;
