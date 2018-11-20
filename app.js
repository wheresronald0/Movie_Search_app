const Movie = props => {
  return (
    <div>
      <p>individual movie</p>
    </div>
  );
};

const Movies = props => {
  return (
    <div>
      <p>this is the movies section with an...</p>
      <Movie />
    </div>
  );
};
const SearchBar = props => {
  return (
    <div>
      <p>this is the search bar</p>
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

        <Movies />
      </div>
    );
  }
}

ReactDOM.render(<MovieDirectory />, document.getElementById("react-root"));
