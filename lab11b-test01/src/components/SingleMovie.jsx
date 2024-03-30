import heartIcon from "../assets/heart.svg";

const SingleMovie = (props) => {
  const handleClick = () => {
    props.button(props.movie.id);
  };

  return (
    <li className="column is-one-fifth-desktop is-half-tablet">
      <div className="card">
        <div className="card-image">
          <figure className="image is-2by3">
            <img src={`https://image.tmdb.org/t/p/w342${props.movie.poster}`} />
          </figure>
        </div>

        <div className="card-content has-text-centered content-rectangle">
          <h2 className="title is-5">{props.movie.title}</h2>
          <p className="is-size-7">{props.movie.tagline}</p>
        </div>
        <footer className="card-footer">
          <button className="button card-footer-item" onClick={handleClick}>
            <span className="icon is-small">
              <img
                className="svg-inline--fa fa-heart fa-w-16"
                src={heartIcon}
              />
            </span>
          </button>
        </footer>
      </div>
    </li>
  );
};

export default SingleMovie;
