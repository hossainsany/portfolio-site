import style from './Contact.module.scss';

const Contact = () => {
    return (
        <section className={style.contact} id='contact'>
            <div className='container'>
                <h2 className='section-title'>Contact</h2>
                <form name='contact' method='POST' action='/form-success' data-netlify='true' netlify-honeypot='bot-field' className={style.form}>
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
