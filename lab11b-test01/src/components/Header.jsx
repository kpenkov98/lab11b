import React from "react";
import FavoriteList from "./FavoriteList.jsx";

const Header = (props) => {
  return (
    
      <section className="favorites">
      <h1 className="title is-4">Favorites</h1>
        <div className="columns is-multiline">
          <FavoriteList favList={props.data} />
        </div>
      </section>
  );
};
export default Header;
