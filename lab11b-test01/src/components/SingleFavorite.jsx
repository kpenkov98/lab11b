const SingleFavorite = (props) => {
  return (
    <li className="column is-2">
      <div>
          <img src={`https://image.tmdb.org/t/p/w342${props.movie.poster}`} />
      </div>
    </li>
  );
};
export default SingleFavorite;
