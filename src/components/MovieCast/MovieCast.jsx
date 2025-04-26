import s from './MovieCast.module.css';
import { getMovieCast } from '../services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast]  = useState([]);

    useEffect(() => {
        async function fetchCast() {
            try {
                const data = await getMovieCast(movieId);
                setCast(data);
            } catch (error) {
                console.error('Error fetching cast:', error);
            }
        };
        fetchCast();
    }, [movieId]);

    if (!Array.isArray(cast) || cast.length === 0) {
       return <p>No cast available.</p>;
    };

    return (
        <ul className={s.list}>
            {cast.map(actor => (
                <li key={actor.id} className={s.item}>
                    {actor.profile_path && (
                        <div className={s.imageBox}>
                            <img className={s.image}
                                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                alt={actor.name}
                                width="100"
                            />
                        </div>
                    )}

                    <div className={s.desc}>
                        <h3 className={s.name}>{actor.name}</h3>
                        <p className={s.character}>{actor.character}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default MovieCast;