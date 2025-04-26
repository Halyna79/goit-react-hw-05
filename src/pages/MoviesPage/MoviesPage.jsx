import s from './MoviesPage.module.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../components/services/api';
import MovieList from '../../components/MovieList/MovieList';

function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get(query) || '';

    useEffect(() => {
        if (!query) return;
        async function fetchMoviesPage() {
            try {
                const data = await searchMovies(query);
                setMovies(data);
            } catch (error) {
                console.error('Error searching movies:', error);
            }
        };
        fetchMoviesPage();
    }, [query]);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const searchForm = event.target;
        const searchValue = searchForm.elements.query.value.trim();
        if (!searchValue) return;
        setSearchParams({ query: searchValue });
        searchForm.reset();
    };

    return (
        <div>
            <form className={s.form} onSubmit={handleSearchSubmit}>
                <input type="text" name='query' placeholder='Search movies...' />
                <button type='submit'>Search</button>
            </form>
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );
}

export default MoviesPage;