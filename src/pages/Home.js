import Movie from "../components/Movie";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import axios from "axios";
import Loading from "../components/Loading.js";

function Home() {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const movieData = (await axios(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).data.data.movies;

    setMovies(movieData);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.background} style={{backgroundImage: `url("images/main-background.jpg")`}}>
      <div className={styles.rootContainer}>
      {
        !loading
          ? <div className={styles.movieContainer}>
            {
              movies.map((movie) =>
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.large_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              )
            }
          </div>
          : <Loading />
      }
      </div>
    </div>
  );
}

export default Home;
