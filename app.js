//individual movie component
const Movie = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "350px",
        width: "600px",
        margin: "0 10px 0 35px"
      }}
    >
      <div>
        <img
          src={props.img}
          style={{
            height: "250px",
            width: "auto",
            margin: "23px 20px 0px 0px"
          }}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: "0" }}>{props.name}</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "0"
          }}
        >
          <p style={{ marginRight: "20px" }}>
            Genre: <strong>{props.genre}</strong>
          </p>
          <p>
            Rating: <strong>{props.rating}</strong>
          </p>
        </div>

        <p style={{ marginTop: "0" }}>{props.description}</p>
      </div>
    </div>
  );
};

// movies component containing all movies
const Movies = props => {
  return (
    <div>
      <ReactTransitionGroup.TransitionGroup
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {props.allMovies.map(movie => {
          return (
            <ReactTransitionGroup.CSSTransition
              key={movie.id}
              classNames={{
                enter: "animated",
                enterActive: "fadeIn",
                exit: "animated",
                exitActive: "fadeOut"
              }}
              timeout={1000}
            >
              <Movie
                name={movie.name}
                genre={movie.genre}
                rating={movie.rating}
                description={movie.description}
                img={movie.img}
              />
            </ReactTransitionGroup.CSSTransition>
          );
        })}
      </ReactTransitionGroup.TransitionGroup>
    </div>
  );
};

//serach bar functional component
const SearchBar = props => {
  const genres = window.MoviesDirectory.genres;
  const ratings = window.MoviesDirectory.ratings;

  //need three handlers for name, genre, and coming soon (maybe a rating?)
  const newSearchName = evt => {
    props.movieSearchHandler("name", evt.target.value);
  };
  const newSearchGenre = evt => {
    props.movieSearchHandler("genre", evt.target.value);
  };
  const newSearchRating = evt => {
    props.movieSearchHandler("rating", evt.target.value);
  };
  const newSearchComingSoon = evt => {
    props.movieSearchHandler("comingSoon", evt.target.checked);
  };

  return (
    <div
      style={{
        margin: "-1px 0 30px 0",
        padding: "15px 20px 0 20px",
        boxShadow: "0px .1px 5px 0px grey",
        height: "90px"
      }}
    >
      <form>
        <h3 style={{ marginTop: "0px" }}>
          Search for Movies Currently Playing{" "}
        </h3>

        <label>Movie Name </label>
        <input
          type="text"
          onChange={newSearchName}
          style={{ margin: " 0px 30px 20px 0px" }}
        />

        <label>Genre </label>
        <select style={{ marginRight: "30px" }} onChange={newSearchGenre}>
          <option>Select </option>
          {genres.map(genre => {
            return <option key={genre}>{genre}</option>;
          })}
        </select>

        <label>Rating </label>
        <select style={{ marginRight: "30px" }} onChange={newSearchRating}>
          <option>Select </option>
          {ratings.map(rating => {
            return <option key={rating}>{rating}</option>;
          })}
        </select>

        <label>Coming Soon </label>
        <input type="checkbox" onChange={newSearchComingSoon} />

        {/* <input>Clear Search</input> */}
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
      rating: "",
      id: "",
      description: "",
      comingSoon: false
    };
    this.movieSearchHandler = this.movieSearchHandler.bind(this);
  }

  movieSearchHandler = (theKey, val) => {
    this.setState({ [theKey]: val }, this.updateMovies);
  };

  //get data back from child search
  //filter through API and return new array
  updateMovies() {
    const moviesFiltered = window.MoviesDirectory.movie.filter(
      function(movie) {
        return (
          movie.comingSoon === this.state.comingSoon &&
          //initial movie load is the full list from the API, and isn't effected by this .filter until you engage it
          (this.state.name === "" ||
            //this.state.name is empty starting point that's always true saying 'you can toggle, and once the onChange takes over, that's when the partial matching begins
            movie.name.toLowerCase().indexOf(this.state.name.toLowerCase()) !==
              -1) &&
          (this.state.genre === "" || movie.genre === this.state.genre) &&
          (this.state.rating === "" || movie.rating === this.state.rating)
        );
      }.bind(this)
    );

    this.setState({
      allMovies: moviesFiltered
    });
  }

  render() {
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
