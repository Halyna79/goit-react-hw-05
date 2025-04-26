import s from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

function MovieList({ movies }) {
    const location = useLocation();
    return (
        <ul className={s.list}>
            {movies.map(movie => (
                movie.id && (
                    <li className={s.item} key={movie.id}>
                        <Link
                            to={`/movies/${movie.id}`}
                            state={{ from: location }}
                        >
                            {movie.title || movie.name}
                        </Link>
                    </li>
                )
            ))}
        </ul>
    );
}

export default MovieList;