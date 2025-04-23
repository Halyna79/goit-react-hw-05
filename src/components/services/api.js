import axios from "axios";

const ACCESS_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDk3ZDdjNGMwNjMyMjVlY2UwYzE0NzQ1YzMzZmJmNiIsIm5iZiI6MTc0NTI2NTMzNC43NzksInN1YiI6IjY4MDZhMmI2M2Y4ODg1NGM0OWVlN2UwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9svJB5yK-9blnHSBMMxgrS79PuvWlQNui-UBXauBikk';
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query, page = 1) => {
    const options = {
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        params: {
            query,
            page,
            include_adult: false,
            language: 'en-US',
        },
    };
    const response = await axios.get(`${BASE_URL}/search/movie`, options);
    return response.data;
};