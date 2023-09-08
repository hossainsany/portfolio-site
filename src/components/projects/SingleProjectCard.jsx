import './SingleProjectCard.scss';

const SingleProjectCard = ({ title, desc, liveLink, githubLink, tags, img }) => {
    const shortDesc = desc.slice(0, 298) + '...';

    return (
        <div className='singleProjectCard'>
            <div className='projectText'>
                <h3 className='title'>{title}</h3>
                <div>
                    <p className='desc'>{shortDesc}</p>
                    <ul className='tags'>
                        {tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                </div>

                <div className='buttons'>
                    <a href={liveLink} className='btn'>
                        View Demo
                    </a>
                    <a href={githubLink} className='btn'>
                        Souce Code
                    </a>
                </div>
            </div>
            <div className='projectImg'>
                <img src={img} alt='project screenshot' />
            </div>
        </div>
    );
};

export default SingleProjectCard;
