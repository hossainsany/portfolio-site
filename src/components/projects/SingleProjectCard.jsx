import './SingleProjectCard.scss';

const SingleProjectCard = ({ title, desc, liveLink, githubLink, tags, img }) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className='singleProjectCard'>
            <div className='projectImg'>
                <img src={img} alt='project screenshot' loading='lazy' />
            </div>
            <div className='projectText'>
                <h3 className='title'>{title}</h3>
                <div>
                    <p className='desc'>{desc}</p>
                    <ul className='tags'>
                        {tags.map((tag) => (
                            <li key={tag}>{capitalizeFirstLetter(tag)}</li>
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
        </div>
    );
};

export default SingleProjectCard;
