class MovieDirectory extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Hi from React!</p>
      </div>
    );
  }
}

ReactDOM.render(<MovieDirectory />, document.getElementById("react-root"));
