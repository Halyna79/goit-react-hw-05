import axios from "axios";

const ACCESS_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDk3ZDdjNGMwNjMyMjVlY2UwYzE0NzQ1YzMzZmJmNiIsIm5iZiI6MTc0NTI2NTMzNC43NzksInN1YiI6IjY4MDZhMmI2M2Y4ODg1NGM0OWVlN2UwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9svJB5yK-9blnHSBMMxgrS79PuvWlQNui-UBXauBikk';
const BASE_URL = 'https://api.themoviedb.org/3';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: ACCESS_TOKEN,
    },
});

export async function getTrendingMovies() {
    const response = await instance.get('/trending/movie/day');
    return response.data.results;
};

export async function searchMovies(query) {
    const response = await instance.get('/search/movie', { params: {query} });
    return response.data.results;
};

export async function getMovieDetails(movieId) {
    const response = await instance.get(`/movie/${movieId}`);
    const details = { ...response.data };
    details.poster_patch = getImagePatch(details.poster_patch);
    return details;
};

export async function getMovieCast(movieId) {
    const response = await instance.get(`/movie/${movieId}/credits`);
    return response.data.cast;
};

export async function getMovieReviews(movieId) {
    const response = await instance.get(`/movie/${movieId}/reviews`);
    return response.data.results;
};

function getImagePatch(fileName) {
    if (!fileName) return '';
    return `https://image.tmdb.org/t/p/w500${fileName}`;
};