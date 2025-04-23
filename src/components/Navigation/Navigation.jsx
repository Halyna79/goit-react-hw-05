import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';

function Navigation() {
    const setActiveClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.active);
    };
    return (
        <nav className={s.nav}>
            <NavLink to="/" className={setActiveClass}>
                Home
            </NavLink>
            <NavLink to="/movies" className={setActiveClass}>
                Movies
            </NavLink>
        </nav>
    );
}


export default Navigation;