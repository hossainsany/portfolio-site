import style from './FormSuccess.module.scss';
import { Link } from 'react-router-dom';

const FormSuccess = () => {
    return (
        <section className={style.formSuccess}>
            <div className={`container ${style.container}`}>
                <h3>Thank You</h3>
                <p>Your form submission has been received. Thank you for your message.</p>
                <p>
                    Return to the{' '}
                    <Link to='/' className='active'>
                        Homepage.
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default FormSuccess;
