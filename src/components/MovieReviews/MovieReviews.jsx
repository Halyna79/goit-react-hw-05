import s from './MovieReviews.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../services/api';

function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const data = await getMovieReviews(movieId);
                setReviews(data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
        fetchReviews();
    }, [movieId]);

    if (!Array.isArray(reviews) || reviews.length === 0) { 
        return <p>No reviews found for this movie.</p>
    };

    return (
        <ul className={s.list}>
            {reviews.map(review => (
                <li key={review.id} className={s.item}>
                    <h3 className={s.author}>Arthor: {review.author}</h3>
                    <p className={s.review}>{review.content}</p>
                </li>
            ))}
        </ul>
    );
}

export default MovieReviews;