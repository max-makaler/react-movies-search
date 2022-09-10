export function Movie(props) {
  const { Title, Year, imdbID, Poster, Type } = props;

  return <div className="card" id={imdbID}>
      <img src={Poster === 'N/A' ? `https://via.placeholder.com/248x353&text=${Title.slice(0, 9)}...` : Poster} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{Year}</li>
        <li className="list-group-item">{Type}</li>
    </ul>
    <a className="btn btn-dark" href={`https://www.google.com/search?q=${Title}`} target="_blank" rel="noreferrer">Искать фильм</a>
    </div>
}
