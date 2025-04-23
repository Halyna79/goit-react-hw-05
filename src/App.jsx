import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));

const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));


function App() {
    return (
        <div>
            <Navigation />
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/movies' element={<MoviesPage />} />
                    {/* <Route path='/movies/:moviesId' element={<MoviesDetailsPage />}>
                        <Route path='cast' element={<MoviesCast />} />
                        <Route path='reviews' element={<MoviesReviews />} />
                    </Route> */}
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}


export default App;
