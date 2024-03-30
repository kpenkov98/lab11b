import SingleFavorite from "./SingleFavorite.jsx";
import { useState } from "react";

const FavoriteList = (props) => {
  return (
    <ul className="columns is-multiline">
      {props.favList.map((m, indx) => (
        <SingleFavorite movie={m} key={indx} />
      ))}
    </ul>
  );
};
export default FavoriteList;
