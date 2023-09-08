import style from './Contact.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const nav = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        // form validation
        validationSchema: Yup.object({
            name: Yup.string().max(20, 'Name must me less than 20 characters long.').required('Name is required.'),
            email: Yup.string().email('Invalid email address.').required('Email is required.'),
            message: Yup.string().min(20, 'Message must be more than 20 characters long.').required('Message is required.'),
        }),

        // submit form
        onSubmit: async (values) => {
            const body = new FormData();
            Object.entries(values).forEach(([key, val]) => {
                body.append(key, val);
            });

            await fetch(import.meta.env.VITE_CONTACT_URI, {
                method: 'POST',
                headers: { accept: 'application/json' },
                body,
            })
                .then(() => nav('/form-success'))
                .catch((err) => console.log(err));
        },
    });

    return (
        <section className={style.contact} id='contact'>
            <div className='container'>
                <h2 className='section-title'>Contact</h2>
                <form onSubmit={formik.handleSubmit} className={style.form}>
                    <input
                        type='text'
                        id='name'
                        placeholder='Name'
                        name='name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? <label htmlFor='name'>*{formik.errors.name}</label> : ''}

                    <input
                        type='email'
                        id='email'
                        placeholder='Email'
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? <label htmlFor='email'>*{formik.errors.email}</label> : ''}

                    <textarea
                        id='message'
                        placeholder='Message'
                        name='message'
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.message && formik.errors.message ? <label htmlFor='message'>*{formik.errors.message}</label> : ''}

                    <button type='submit' className={`btn ${style.submitBtn}`}>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
