import style from './Header.module.scss';
import Hero from './Hero';

const Header = () => {
    return (
        <header className={style.header} id='top'>
            <Hero />
        </header>
    );
};

export default Header;
