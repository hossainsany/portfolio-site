import { useHistory } from 'react-router-dom';
import style from './Contact.module.scss';

const Contact = () => {
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => history.push('/form-success'))
            .catch((error) => alert(error));
    };

    return (
        <section className={style.contact} id='contact'>
            <div className='container'>
                <h2 className='section-title'>Contact</h2>
                <form name='contact' method='POST' onSubmit={handleSubmit} data-netlify='true' netlify-honeypot='bot-field' className={style.form}>
                    <input type='text' placeholder='Name' name='name' required />
                    <input type='email' placeholder='Email' name='email' required />
                    <textarea placeholder='Message' name='message' required />
                    <button type='submit' className={`btn ${style.submitBtn}`}>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
