import { Link } from 'react-router-dom';
import style from './NotFound.module.scss';

const NotFound = () => {
    return (
        <section className={style.notFound}>
            <div className='container'>
                <h2>404 - Page Not Found</h2>
                <p>
                    The requested URL or resource could not be found on the server. Please check the URL for typing errors, capitalization, and
                    spacing.
                </p>
                <p>
                    Return to the <Link to='/'>Homepage.</Link>
                </p>
            </div>
        </section>
    );
};

export default NotFound;
