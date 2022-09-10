import { Movie } from "./Movie";

export function Movies(props) {
    const {movies = []} = props;
  return (
    <div className="movies_container">
      {movies.length ? movies.map((movie) => (
        <Movie 
        key={movie.imdbID} 
        {...movie}
        />
      )) : <h4>Ничего не найдено =(</h4> }
    </div>
  );
}
