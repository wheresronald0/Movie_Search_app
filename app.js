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
  return (
    <div
      style={{
        margin: "20px 0 30px 20px"
      }}
    >
      <form>
        <h3>Search for Movies Currently Playing </h3>
        <input />
        <select>
          <option />
        </select>
        <input />
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

  render() {
    return (
      <div>
        <SearchBar />

        <Movies allMovies={this.state.allMovies} />
      </div>
    );
  }
}

ReactDOM.render(<MovieDirectory />, document.getElementById("react-root"));
