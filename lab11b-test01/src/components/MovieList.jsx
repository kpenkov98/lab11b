import { useEffect } from "react";
import SingleMovie from "./SingleMovie.jsx";

const MovieList = (props) => {
  return (
    
    <ul className="columns is-multiline">
      {props.data.map((m, indx) => (
        <SingleMovie movie={m} key={indx} button={props.addToFav} />
      ))}
    </ul>
  );
};

export default MovieList;
