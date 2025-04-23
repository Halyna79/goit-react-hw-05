import s from './MoviesPage.module.css';

function MoviesPage() {
    return (
        <form className={s.form}>
            <input type="text" name='Search' />
            <button>Search</button>
        </form>
    );
}

export default MoviesPage;