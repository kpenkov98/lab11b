import { useState } from "react";
import "../lab11b-test01.css";
import Header from "./components/Header.jsx";
import MovieList from "./components/MovieList.jsx";

function App() {
  //favorites, initially empty
  const [favorites, setFavorites] = useState([]);
  //function to handle adding to favorites
  const addToFavorites = (id) => {
    const movie = movieData.find((movie) => movie.id === id);
    if (movie) {
      if (!favorites.find((fav) => fav.id === id)) {
        setFavorites([...favorites, movie]);
      }
    }
    console.log(favorites);
  };

  return (
    <main className="section">
    <article className="container">
      <Header data={favorites} />

      <MovieList data={movieData} addToFav={addToFavorites} />
    </article>
    </main>
  );
}

export default App;
