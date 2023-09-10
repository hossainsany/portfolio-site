import { Link } from 'react-scroll';
import { easeInOut, motion } from 'framer-motion';

import { DoubleDownIcon } from '../../assets/icons';
import style from './Hero.module.scss';

const Hero = () => {
    const textVariants = {
        hidden: { opacity: 0, pathLength: 0 },
        visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: 'easeInOut' } },
    };

    return (
        <div className={style.hero}>
            <div className='container'>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <motion.svg
                        variants={textVariants}
                        initial='hidden'
                        animate='visible'
                        id='Layer_1'
                        data-name='Layer 1'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 819.8 140.8'
                        className={style.text}
                    >
                        <motion.polygon
                            variants={textVariants}
                            className={style.span}
                            points='353.2 20.7 332.2 20.7 332.2 1.2 324 1.2 324 48.1 332.2 48.1 332.2 27.3 353.2 27.3 353.2 48.1 361.3 48.1 361.3 1.2 353.2 1.2 353.2 20.7'
                        />
                        <motion.path
                            variants={textVariants}
                            className={style.span}
                            d='m384.9,48.8c3.2,0,6.1-.7,8.5-2.2,2.5-1.5,4.4-3.6,5.7-6.3s2-5.8,2-9.2v-1.8c-.3-5-1.9-9-4.8-12.1s-6.8-4.5-11.5-4.5-6,.7-8.4,2.2c-2.4,1.5-4.4,3.6-5.7,6.3s-2,5.8-2,9.2v.4c0,5.5,1.5,9.8,4.4,13.1,3,3.3,6.9,4.9,11.8,4.9Zm-6.2-26.8c1.5-2,3.5-3,6.1-3s4.7,1,6.2,3.1,2.3,4.9,2.3,8.4-.7,7-2.2,9.1c-1.5,2.1-3.5,3.1-6.2,3.1s-4.7-1-6.2-3-2.2-4.8-2.2-8.4.8-7.1,2.3-9.1Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className={style.span}
                            d='m425.7,41.7c-1.1.8-2.6,1.2-4.7,1.2s-3.8-.5-5.1-1.5-2-2.4-2.1-4.3h-7.6c0,2.1.6,4,1.9,5.8s3,3.2,5.2,4.3,4.8,1.5,7.6,1.5c4.2,0,7.6-1,10.2-2.9,2.6-1.9,3.9-4.5,3.9-7.6s-.4-3.5-1.3-4.8c-.8-1.3-2.1-2.4-3.9-3.4s-4.2-1.7-7.2-2.4-5.1-1.3-6.1-2c-1-.7-1.5-1.6-1.5-2.8s.5-2.4,1.6-3.2c1.1-.8,2.5-1.2,4.2-1.2s3.3.5,4.4,1.5,1.7,2.3,1.7,3.8h7.8c0-3.3-1.3-6-3.9-8-2.6-2.1-5.9-3.1-10.1-3.1s-7.1,1-9.7,3c-2.5,2-3.8,4.5-3.8,7.5s2,6.3,5.9,8.2c1.8.9,4,1.6,6.7,2.1,2.7.6,4.6,1.2,5.7,1.9,1.1.7,1.7,1.8,1.7,3.2s-.5,2.3-1.6,3.1Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className={style.span}
                            d='m469,38.2c0-1.9-.4-3.5-1.3-4.8-.8-1.3-2.1-2.4-3.9-3.4-1.8-.9-4.2-1.7-7.2-2.4-3.1-.7-5.1-1.3-6.1-2-1-.7-1.5-1.6-1.5-2.8s.5-2.4,1.6-3.2c1.1-.8,2.5-1.2,4.2-1.2s3.3.5,4.4,1.5c1.1,1,1.7,2.3,1.7,3.8h7.8c0-3.3-1.3-6-3.9-8s-5.9-3.1-10.1-3.1-7.1,1-9.7,3c-2.5,2-3.8,4.5-3.8,7.5s2,6.3,5.9,8.2c1.8.9,4,1.6,6.7,2.1,2.7.6,4.6,1.2,5.7,1.9,1.1.7,1.7,1.8,1.7,3.2s-.5,2.3-1.6,3.1c-1.1.8-2.6,1.2-4.7,1.2s-3.8-.5-5.1-1.5-2-2.4-2.1-4.3h-7.6c0,2.1.6,4,1.9,5.8,1.2,1.8,3,3.2,5.2,4.3,2.2,1,4.8,1.5,7.6,1.5,4.2,0,7.6-1,10.2-2.9,2.6-1.9,3.9-4.5,3.9-7.6Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className={style.span}
                            d='m503.4,24.3c0-3.7-1.3-6.6-3.7-8.7-2.4-2.1-5.7-3.1-9.8-3.1s-5.1.5-7.3,1.4c-2.2.9-3.9,2.3-5.2,3.9-1.3,1.7-1.9,3.5-1.9,5.4h7.8c0-1.4.6-2.5,1.7-3.4,1.1-.9,2.6-1.3,4.4-1.3s3.6.5,4.6,1.6c1,1.1,1.5,2.5,1.5,4.3v2.3h-4.8c-5.1,0-9.1,1-11.8,3-2.8,2-4.1,4.8-4.1,8.6s1.1,5.4,3.3,7.4,5.1,3,8.6,3,6.7-1.3,9.2-3.9c.3,1.5.6,2.6.9,3.3h8v-.5c-.9-1.9-1.3-4.4-1.3-7.5v-15.7Zm-7.8,14c-.7,1.3-1.7,2.3-3.1,3-1.4.8-2.8,1.1-4.4,1.1s-3-.4-4-1.3c-1-.9-1.5-2.1-1.5-3.6s.7-3.3,2.2-4.3c1.5-1,3.6-1.5,6.5-1.5h4.2v6.6Z'
                        />
                        <rect className={style.span} x='512.1' y='13.2' width='7.8' height='34.9' />
                        <motion.path
                            variants={textVariants}
                            className={style.span}
                            d='m516,8.3c1.4,0,2.5-.4,3.3-1.2.8-.8,1.2-1.8,1.2-2.9s-.4-2.2-1.2-3c-.8-.8-1.9-1.2-3.3-1.2s-2.5.4-3.3,1.2c-.8.8-1.1,1.8-1.1,3s.4,2.2,1.1,2.9c.8.8,1.9,1.2,3.3,1.2Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className={style.span}
                            d='m536.1,23.3c1.5-2.9,3.9-4.3,7.1-4.3s3.7.5,4.7,1.6,1.4,2.7,1.4,4.9v22.6h7.8v-23c-.1-8.3-3.8-12.5-11.1-12.5s-7.6,1.6-10.2,4.7l-.2-4h-7.4v34.9h7.8v-24.8Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className={style.span}
                            d='m610.5,45.3c3-2.3,4.5-5.4,4.5-9.3s-.5-4.5-1.5-6.3c-1-1.8-2.7-3.4-4.9-4.8s-5.1-2.6-8.8-3.7c-3.7-1.1-6.3-2.2-7.9-3.4-1.6-1.1-2.4-2.6-2.4-4.3s.7-3.6,2.2-4.8c1.5-1.1,3.5-1.7,6.2-1.7s5.1.7,6.6,2.1,2.3,3.3,2.3,5.8h8.1c0-2.7-.7-5.2-2.2-7.4s-3.5-3.9-6-5.1c-2.6-1.2-5.5-1.8-8.7-1.8-4.9,0-8.9,1.2-12,3.7-3.1,2.4-4.6,5.6-4.6,9.3s2.1,7.8,6.4,10.5c2.2,1.4,5.2,2.7,9,3.8,3.8,1.1,6.4,2.3,7.8,3.4,1.5,1.1,2.2,2.7,2.2,4.8s-.7,3.4-2.1,4.6c-1.4,1.1-3.6,1.7-6.4,1.7s-5.8-.7-7.6-2.2c-1.8-1.5-2.6-3.5-2.6-6.2h-8.2c0,2.9.8,5.5,2.4,7.7,1.6,2.2,3.8,3.9,6.6,5.2s6,1.9,9.4,1.9c5.1,0,9.2-1.2,12.2-3.5Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className={style.span}
                            d='m632.2,48.8c3.6,0,6.7-1.3,9.2-3.9.3,1.5.6,2.6.9,3.3h8v-.5c-.9-1.9-1.3-4.4-1.3-7.5v-15.7c0-3.7-1.3-6.6-3.7-8.7-2.4-2.1-5.7-3.1-9.8-3.1s-5.1.5-7.3,1.4c-2.2.9-3.9,2.3-5.2,3.9-1.3,1.7-1.9,3.5-1.9,5.4h7.8c0-1.4.6-2.5,1.7-3.4,1.1-.9,2.6-1.3,4.4-1.3s3.6.5,4.6,1.6c1,1.1,1.5,2.5,1.5,4.3v2.3h-4.8c-5.1,0-9.1,1-11.8,3-2.8,2-4.1,4.8-4.1,8.6s1.1,5.4,3.3,7.4,5.1,3,8.6,3Zm-1.9-15.5c1.5-1,3.6-1.5,6.5-1.5h4.2v6.6c-.7,1.3-1.7,2.3-3.1,3-1.4.8-2.8,1.1-4.4,1.1s-3-.4-4-1.3c-1-.9-1.5-2.1-1.5-3.6s.7-3.3,2.2-4.3Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className={style.span}
                            d='m678,25.5v22.6h7.8v-23c-.1-8.3-3.8-12.5-11.1-12.5s-7.6,1.6-10.2,4.7l-.2-4h-7.4v34.9h7.8v-24.8c1.5-2.9,3.9-4.3,7.1-4.3s3.7.5,4.7,1.6,1.4,2.7,1.4,4.9Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className={style.span}
                            d='m701.3,50.9c-.6,1.7-1.4,2.9-2.4,3.6-1,.7-2.5,1.1-4.5,1.1h-1.5c0,0,0,6,0,6,1.4.4,2.6.6,3.8.6,5.1,0,8.7-2.9,10.8-8.8l13.9-40.2h-8.3l-7.1,23.7-7.4-23.7h-8.4l12.2,34.7-1.1,3Z'
                        />
                        <polygon
                            className='cls-1'
                            points='100.7 27.3 121.7 27.3 121.7 48.1 129.8 48.1 129.8 1.2 121.7 1.2 121.7 20.7 100.7 20.7 100.7 1.2 92.6 1.2 92.6 48.1 100.7 48.1 100.7 27.3'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m167.5,42.2l-4.2-4c-2.3,2.9-5.2,4.4-8.8,4.4s-4.7-.8-6.4-2.5c-1.7-1.7-2.6-4-2.9-6.8h22.8v-3.2c0-5.5-1.3-9.8-3.9-12.9-2.6-3-6.3-4.5-11-4.5s-5.7.8-8.1,2.3c-2.4,1.5-4.3,3.7-5.7,6.4-1.3,2.7-2,5.8-2,9.3v1c0,5.2,1.5,9.4,4.6,12.5,3.1,3.1,7.1,4.7,12.1,4.7s5.5-.6,7.8-1.7c2.3-1.1,4.2-2.8,5.6-4.9Zm-19.6-21c1.3-1.5,3.1-2.3,5.2-2.3s3.9.7,5.1,2c1.2,1.3,1.9,3.3,2.1,5.9v.6h-14.9c.4-2.7,1.2-4.8,2.5-6.3Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m193,13.2l-7.1,23.7-7.4-23.7h-8.4l12.2,34.7-1.1,3c-.6,1.7-1.4,2.9-2.4,3.6-1,.7-2.5,1.1-4.5,1.1h-1.5c0,0,0,6,0,6,1.4.4,2.6.6,3.8.6,5.1,0,8.7-2.9,10.8-8.8l13.9-40.2h-8.3Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m200.6,46.6c0,1.5-.3,3-.7,4.4-.5,1.5-1.3,3.2-2.6,5.1l4.2,2.5c1.8-1.5,3.2-3.4,4.4-5.7s1.7-4.6,1.7-6.8v-5.6s-7,0-7,0v6.1Z'
                        />
                        <rect className='cls-1' x='232.6' y='1.2' width='8.1' height='46.9' />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m280.9,20.4c1.1-1,2.6-1.4,4.4-1.4s3.8.5,4.8,1.5,1.5,2.7,1.5,4.9v22.7h7.8v-22.9c0-4.1-1-7.3-2.9-9.4-1.9-2.1-4.7-3.2-8.6-3.2s-8.2,1.8-10.7,5.3c-1.7-3.6-4.9-5.3-9.6-5.3s-7.6,1.4-10.1,4.3l-.2-3.6h-7.4v34.9h7.8v-25.3c1.3-2.6,3.5-3.8,6.7-3.8s6.2,2.1,6.3,6.2v22.9h7.8v-23.9c.4-1.5,1.2-2.8,2.3-3.8Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m726.3,48.5c1.5,0,2.6-.4,3.4-1.2.8-.8,1.2-1.8,1.2-3s-.4-2.3-1.2-3.1c-.8-.8-1.9-1.2-3.4-1.2s-2.6.4-3.4,1.2c-.8.8-1.2,1.9-1.2,3.1s.4,2.3,1.2,3.1c.8.8,1.9,1.2,3.3,1.2Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m17.7,80.5L0,127.4h8.5l3.8-10.9h18.2l3.8,10.9h8.5l-17.8-46.9h-7.3Zm-3.2,29.4l6.8-19.5,6.8,19.5h-13.6Z'
                        />
                        <polygon
                            className='cls-1'
                            points='64.5 127.4 72.7 127.4 72.7 107.5 91.6 107.5 91.6 101 72.7 101 72.7 87.1 94.4 87.1 94.4 80.5 64.5 80.5 64.5 127.4'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m106.9,96.4l-.2-3.9h-7.5v34.9h7.8v-23.8c1.2-2.8,3.7-4.1,7.3-4.1s2.2,0,3.2.3v-7.3c-.7-.3-1.6-.5-2.7-.5-3.4,0-6,1.5-7.9,4.5Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m136.3,91.9c-3,0-5.7.8-8.1,2.3-2.4,1.5-4.3,3.7-5.7,6.4-1.3,2.7-2,5.8-2,9.3v1c0,5.2,1.5,9.4,4.6,12.5,3.1,3.1,7.1,4.7,12.1,4.7s5.5-.6,7.8-1.7c2.3-1.1,4.2-2.8,5.6-4.8l-4.2-4c-2.3,2.9-5.2,4.4-8.8,4.4s-4.7-.8-6.4-2.5c-1.7-1.7-2.6-4-2.9-6.8h22.8v-3.2c0-5.5-1.3-9.8-3.9-12.9-2.6-3-6.3-4.5-11-4.5Zm7.2,14.8h-14.9c.4-2.7,1.2-4.8,2.5-6.3s3.1-2.3,5.2-2.3,3.9.7,5.1,2,1.9,3.3,2.1,5.9v.6Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m171.7,91.9c-3,0-5.7.8-8.1,2.3-2.4,1.5-4.3,3.7-5.7,6.4-1.3,2.7-2,5.8-2,9.3v1c0,5.2,1.5,9.4,4.6,12.5,3.1,3.1,7.1,4.7,12.1,4.7s5.5-.6,7.8-1.7c2.3-1.1,4.2-2.8,5.6-4.8l-4.2-4c-2.3,2.9-5.2,4.4-8.8,4.4s-4.7-.8-6.4-2.5c-1.7-1.7-2.6-4-2.9-6.8h22.8v-3.2c0-5.5-1.3-9.8-3.9-12.9-2.6-3-6.3-4.5-11-4.5Zm7.2,14.8h-14.9c.4-2.7,1.2-4.8,2.5-6.3s3.1-2.3,5.2-2.3,3.9.7,5.1,2,1.9,3.3,2.1,5.9v.6Z'
                        />
                        <rect className='cls-1' x='193.1' y='77.9' width='7.8' height='49.5' />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m237,103.6c0-3.7-1.3-6.6-3.7-8.7-2.4-2.1-5.7-3.1-9.8-3.1s-5.1.5-7.3,1.4c-2.2.9-3.9,2.3-5.2,3.9-1.3,1.7-1.9,3.5-1.9,5.4h7.8c0-1.4.6-2.5,1.7-3.4,1.1-.9,2.6-1.3,4.4-1.3s3.6.5,4.6,1.6c1,1.1,1.5,2.5,1.5,4.3v2.3h-4.8c-5.1,0-9.1,1-11.8,3-2.8,2-4.1,4.8-4.1,8.6s1.1,5.4,3.3,7.4c2.2,2,5.1,3,8.6,3s6.7-1.3,9.2-3.9c.3,1.5.6,2.6.9,3.3h8v-.5c-.9-1.9-1.3-4.4-1.3-7.5v-15.7Zm-7.8,14c-.7,1.3-1.7,2.3-3.1,3-1.4.8-2.8,1.1-4.4,1.1s-3-.4-4-1.3-1.5-2.1-1.5-3.6.7-3.3,2.2-4.3c1.5-1,3.6-1.5,6.5-1.5h4.2v6.6Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m262.8,91.9c-4.2,0-7.6,1.6-10.2,4.7l-.2-4h-7.4v34.9h7.8v-24.8c1.5-2.9,3.9-4.3,7.1-4.3s3.7.5,4.7,1.6c1,1.1,1.4,2.7,1.4,4.9v22.6h7.8v-23c-.1-8.3-3.8-12.5-11.1-12.5Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m290.4,100.9c1.4-1.8,3.3-2.8,5.9-2.8s3.6.6,4.9,1.9c1.3,1.3,2,2.9,2,4.9h7.4c-.1-3.9-1.5-7.1-4.1-9.5-2.6-2.4-6-3.6-10.1-3.6s-8.8,1.6-11.6,4.8c-2.8,3.2-4.3,7.4-4.3,12.7v.8c0,5.6,1.4,9.9,4.3,13.1,2.9,3.2,6.7,4.7,11.6,4.7s4.9-.5,7-1.6c2.2-1.1,3.9-2.6,5.2-4.5,1.3-1.9,1.9-3.9,2-6.1h-7.4c0,1.7-.8,3.1-2.1,4.2s-2.9,1.7-4.9,1.7-4.5-.9-5.9-2.8c-1.4-1.9-2-4.7-2-8.5v-1.3c0-3.7.7-6.5,2.1-8.4Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m330.9,91.9c-3,0-5.7.8-8.1,2.3-2.4,1.5-4.3,3.7-5.7,6.4-1.3,2.7-2,5.8-2,9.3v1c0,5.2,1.5,9.4,4.6,12.5,3.1,3.1,7.1,4.7,12.1,4.7s5.5-.6,7.8-1.7c2.3-1.1,4.2-2.8,5.6-4.8l-4.2-4c-2.3,2.9-5.2,4.4-8.8,4.4s-4.7-.8-6.4-2.5c-1.7-1.7-2.6-4-2.9-6.8h22.8v-3.2c0-5.5-1.3-9.8-3.9-12.9-2.6-3-6.3-4.5-11-4.5Zm7.2,14.8h-14.9c.4-2.7,1.2-4.8,2.5-6.3s3.1-2.3,5.2-2.3,3.9.7,5.1,2,1.9,3.3,2.1,5.9v.6Z'
                        />
                        <polygon
                            className='cls-1'
                            points='405.9 115.8 397 80.5 390.2 80.5 381.2 115.8 373.9 80.5 365.8 80.5 376.7 127.4 384.5 127.4 393.6 93.2 402.5 127.4 410.3 127.4 421.2 80.5 413.1 80.5 405.9 115.8'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m439.8,91.9c-3,0-5.7.8-8.1,2.3-2.4,1.5-4.3,3.7-5.7,6.4-1.3,2.7-2,5.8-2,9.3v1c0,5.2,1.5,9.4,4.6,12.5,3.1,3.1,7.1,4.7,12.1,4.7s5.5-.6,7.8-1.7c2.3-1.1,4.2-2.8,5.6-4.8l-4.2-4c-2.3,2.9-5.2,4.4-8.8,4.4s-4.7-.8-6.4-2.5c-1.7-1.7-2.6-4-2.9-6.8h22.8v-3.2c0-5.5-1.3-9.8-3.9-12.9s-6.3-4.5-11-4.5Zm7.2,14.8h-14.9c.4-2.7,1.2-4.8,2.5-6.3s3.1-2.3,5.2-2.3,3.9.7,5.1,2,1.9,3.3,2.1,5.9v.6Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m477.7,91.9c-3.8,0-6.9,1.3-9.1,4v-18h-7.8v49.5h7.1l.4-3.8c2.3,2.9,5.5,4.4,9.5,4.4s7.6-1.6,10-4.8,3.6-7.5,3.6-12.9v-.5c0-5.7-1.2-10.1-3.6-13.2s-5.8-4.7-10-4.7Zm5.8,18.8c0,3.7-.7,6.5-2.1,8.3s-3.2,2.7-5.7,2.7-5.8-1.5-7.2-4.5v-14.4c1.4-3,3.8-4.4,7.2-4.4s4.5.9,5.8,2.8,2,4.7,2,8.5v1Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m540,83.3c-3.2-1.8-6.9-2.8-11-2.8h-13.9v46.9h13.5c4.2,0,8-.9,11.3-2.7s5.8-4.4,7.6-7.8,2.7-7.3,2.7-11.7v-2.4c0-4.4-.9-8.3-2.6-11.7s-4.2-6-7.5-7.9Zm1.9,22.1c0,5-1.2,8.8-3.5,11.5-2.3,2.7-5.6,4-9.8,4h-5.3v-33.8h5.7c4.2,0,7.4,1.3,9.6,4,2.2,2.7,3.3,6.6,3.3,11.7v2.6Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m572,91.9c-3,0-5.7.8-8.1,2.3-2.4,1.5-4.3,3.7-5.7,6.4-1.3,2.7-2,5.8-2,9.3v1c0,5.2,1.5,9.4,4.6,12.5,3.1,3.1,7.1,4.7,12.1,4.7s5.5-.6,7.8-1.7c2.3-1.1,4.2-2.8,5.6-4.8l-4.2-4c-2.3,2.9-5.2,4.4-8.8,4.4s-4.7-.8-6.4-2.5c-1.7-1.7-2.6-4-2.9-6.8h22.8v-3.2c0-5.5-1.3-9.8-3.9-12.9s-6.3-4.5-11-4.5Zm7.2,14.8h-14.9c.4-2.7,1.2-4.8,2.5-6.3s3.1-2.3,5.2-2.3,3.9.7,5.1,2,1.9,3.3,2.1,5.9v.6Z'
                        />
                        <polygon
                            className='cls-1'
                            points='604.8 117.5 597.3 92.5 589.2 92.5 601.4 127.4 608.2 127.4 620.3 92.5 612.2 92.5 604.8 117.5'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m639.2,91.9c-3,0-5.7.8-8.1,2.3-2.4,1.5-4.3,3.7-5.7,6.4-1.3,2.7-2,5.8-2,9.3v1c0,5.2,1.5,9.4,4.6,12.5,3.1,3.1,7.1,4.7,12.1,4.7s5.5-.6,7.8-1.7c2.3-1.1,4.2-2.8,5.6-4.8l-4.2-4c-2.3,2.9-5.2,4.4-8.8,4.4s-4.7-.8-6.4-2.5c-1.7-1.7-2.6-4-2.9-6.8h22.8v-3.2c0-5.5-1.3-9.8-3.9-12.9s-6.3-4.5-11-4.5Zm7.2,14.8h-14.9c.4-2.7,1.2-4.8,2.5-6.3s3.1-2.3,5.2-2.3,3.9.7,5.1,2,1.9,3.3,2.1,5.9v.6Z'
                        />
                        <rect className='cls-1' x='660.6' y='77.9' width='7.8' height='49.5' />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m703.2,96.4c-2.9-3-6.8-4.5-11.5-4.5s-6,.7-8.4,2.2c-2.4,1.5-4.4,3.6-5.7,6.3-1.4,2.7-2,5.8-2,9.2v.4c0,5.5,1.5,9.8,4.4,13.1s6.9,4.9,11.8,4.9,6.1-.7,8.5-2.2c2.5-1.5,4.4-3.6,5.7-6.3s2-5.8,2-9.2v-1.8c-.3-5-1.9-9-4.8-12.1Zm-5.2,22.3c-1.5,2.1-3.5,3.1-6.2,3.1s-4.7-1-6.2-3c-1.5-2-2.2-4.8-2.2-8.4s.8-7.1,2.3-9.1c1.5-2,3.5-3,6.1-3s4.7,1,6.2,3.1,2.3,4.9,2.3,8.4-.7,7-2.2,9.1Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m731.5,91.9c-4,0-7.1,1.4-9.4,4.2l-.3-3.5h-7.2v48.3h7.8v-16.5c2.3,2.5,5.4,3.8,9.2,3.8s7.4-1.6,9.9-4.8c2.4-3.2,3.7-7.5,3.7-12.9v-.5c0-5.6-1.2-10-3.6-13.2s-5.8-4.8-10-4.8Zm3.7,26.9c-1.4,2-3.4,3-5.8,3s-5.5-1.4-7-4.1v-15.5c1.4-2.6,3.7-4,6.9-4s4.6,1,5.9,3.1,2.1,4.8,2.1,8.3-.7,7.1-2.1,9.1Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m766.2,91.9c-3,0-5.7.8-8.1,2.3s-4.3,3.7-5.7,6.4c-1.3,2.7-2,5.8-2,9.3v1c0,5.2,1.5,9.4,4.6,12.5,3.1,3.1,7.1,4.7,12.1,4.7s5.5-.6,7.8-1.7c2.3-1.1,4.2-2.8,5.6-4.8l-4.2-4c-2.3,2.9-5.2,4.4-8.8,4.4s-4.7-.8-6.4-2.5-2.6-4-2.9-6.8h22.8v-3.2c0-5.5-1.3-9.8-3.9-12.9-2.6-3-6.3-4.5-11-4.5Zm7.2,14.8h-14.9c.4-2.7,1.2-4.8,2.5-6.3s3.1-2.3,5.2-2.3,3.9.7,5.1,2,1.9,3.3,2.1,5.9v.6Z'
                        />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m794.8,96.4l-.2-3.9h-7.5v34.9h7.8v-23.8c1.2-2.8,3.7-4.1,7.2-4.1s2.2,0,3.2.3v-7.3c-.7-.3-1.6-.5-2.7-.5-3.4,0-6,1.5-7.9,4.5Z'
                        />
                        <polygon className='cls-1' points='818.7 113.6 819.4 80.5 811.2 80.5 811.9 113.6 818.7 113.6' />
                        <motion.path
                            variants={textVariants}
                            className='cls-1'
                            d='m818.7,120.7c-.8-.8-1.9-1.2-3.3-1.2s-2.5.4-3.3,1.2-1.2,1.8-1.2,3,.4,2.2,1.2,3c.8.8,1.9,1.2,3.3,1.2s2.5-.4,3.3-1.2c.8-.8,1.2-1.8,1.2-3s-.4-2.2-1.2-3Z'
                        />
                    </motion.svg>
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.5, ease: easeInOut }}>
                    <Link to='about' smooth={true} offset={0} duration={800} className={style.scroll}>
                        <DoubleDownIcon />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
