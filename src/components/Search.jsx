import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };
  searchMovie = (e) => {
    e.preventDefault();
    this.setState({ 
        search: e.target.search.value,
        type: e.target.type.value
    });
    this.props.moviesUpdate(e.target.search.value, e.target.type.value);
  };
  handleFilter = (e) => {
    this.setState({ type: e.target.value });
  }

  render() {
    return (
      <form role="search" onSubmit={this.searchMovie}>
        <div className="d-flex">
          <input
            className="form-control me-2"
            name="search"
            data-type="search"
            type="search"
            placeholder="Введите название фильма"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Искать
          </button>
        </div>

        <div className="d-flex search-check">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              id="all"
              value="all"
              checked={this.state.type === 'all'}
              onChange={this.handleFilter}
            />
            <label className="form-check-label" htmlFor="all">
              All
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              id="movie"
              value="movie"
              checked={this.state.type === 'movie'}
              onChange={this.handleFilter}
            />
            <label className="form-check-label" htmlFor="movie">
              Movie
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              id="series"
              value="series"
              checked={this.state.type === 'series'}
              onChange={this.handleFilter}
            />
            <label className="form-check-label" htmlFor="series">
                Series
            </label>
          </div>
        </div>
      </form>
    );
  }
}

export { Search };
