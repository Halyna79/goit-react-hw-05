import s from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <p className={s.title}>
            Not found page.
            <Link to='/' className={s.link}>Go to back</Link>
        </p>
    );
}

export default NotFoundPage;