//individual movie component
const Movie = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "400px",
        width: "650px",
        margin: "0 10px 0 10px"
      }}
    >
      <div>
        <img
          src={props.img}
          style={{ height: "250px", width: "auto", marginRight: "20px" }}
        />
      </div>
      <div>
        <h3>{props.name}</h3>
        <p>Genre: {props.genre}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

// movies component containing all movies
const Movies = props => {
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {props.allMovies.map(movie => {
        return (
          <Movie
            name={movie.name}
            genre={movie.genre}
            description={movie.description}
            img={movie.img}
            key={movie.id}
          />
        );
      })}
    </div>
  );
};

//serach bar functional component
const SearchBar = props => {
  const genres = window.MoviesDirectory.genres;

  const newSearchData = evt => {
    props.movieSearchHandler(evt.target.value);
  };
  return (
    <div
      style={{
        margin: "20px 0 30px 20px"
      }}
    >
      <form>
        <h3>Search for Movies Currently Playing </h3>
        <input type="text" onChange={newSearchData} />
        <select>
          <option>Select</option>
          {genres.map(genre => {
            return <option key={genre}>{genre}</option>;
          })}
        </select>
        <input type="checkbox" />
      </form>
    </div>
  );
};
class MovieDirectory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: window.MoviesDirectory.movie,
      name: "",
      genre: "",
      id: "",
      description: "",
      comingSoon: false
    };
  }

  movieSearchHandler = movieSearchFor => {
    this.setState({ allMovies: movieSearchFor });
  };

  movieSearchHandler = movieSearchFor => {
    this.setState({ allMovies: movieSearchFor });
  };

  //get data back from child search
  //filter through APT and return new array

  render() {
    //     const listFilter = allMovies.filter((movieList) => {
    // if ()
    //     });
    return (
      <div>
        <SearchBar
          genres={this.state.genres}
          movieSearchHandler={this.movieSearchHandler}
        />

        <Movies allMovies={this.state.allMovies} />
      </div>
    );
  }
}

ReactDOM.render(<MovieDirectory />, document.getElementById("react-root"));
