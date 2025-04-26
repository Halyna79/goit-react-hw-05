import s from './MovieDetailsPage.module.css';
import { Outlet, Link, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getMovieDetails } from '../../components/services/api';

function MovieDetailsPage() {
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/movies');
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchMovie() {
            try {
                const data = await getMovieDetails(movieId);
                setMovie(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
        fetchMovie();
    }, [movieId]);

    if (!movie) return <p>Loading...</p>;

    const { title, overview, genres, poster_path, vote_average } = movie;

    return (
        <div className={s.container}>
            <Link to={backLinkHref.current} className={s.backlink}>Go Back</Link>
            <div className={s.details}>
                {poster_path && (
                    <img
                        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                        alt="{title}"
                        width="300"
                    />
                )}
                <div>
                    <h2>{title}</h2>
                    <p>User score: {vote_average}</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <ul>{genres.map(genre => {
                        <li
                            className={s.genre}
                            key={genre.id}>
                            {genre.name}
                        </li>
                    })}
                    </ul>
                </div>
            </div>
            <h2>Additional information</h2>
            <ul className={s.list}>
                <li className={s.item}>
                    <Link to="cast" className={s.link}>Cast</Link>
                </li>
                <li className={s.item}>
                    <Link to="reviews" className={s.link}>Reviews</Link>
                </li>
            </ul>
            <div className={s.outlet}>
                <Outlet />
            </div>
        </div>
    );
}

export default MovieDetailsPage;