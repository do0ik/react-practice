import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.css";
import common from "./Common.module.css";
import Loading from "../components/Loading.js";

function Detail() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({})

    const getMovie = async () => {
        const movieData = (await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).data.data.movie;
        setMovie(movieData);
        setLoading(false);
    }

    useEffect(() => {
        getMovie();
    }, [id])

    return (
        <>
            {
                !loading
                ? <div
                    className={styles.background}
                    style={{
                        backgroundImage: `url(${movie["background_image_original"]})`
                }}>
                    <span className={`${common.fontDS} ${styles.backBtn}`} onClick={() => navigate(-1)}>← Back</span>
                    <div className={styles.introduction}>
                        <div className={styles.introText}>
                            <span className={`${common.fontDS} ${styles.introTitle}`}>{movie["title_long"]}</span>

                            <div className={`${common.fontJS} ${styles.introDetails}`}>
                                <span className={styles.introDetail}>⭐{movie.rating}</span>
                                {
                                    movie.genres.map((genre, idx) =>
                                        <span key={idx} className={styles.introDetail}>{genre}</span>
                                    )
                                }
                                {
                                    movie.runtime !== 0 &&
                                    <span className={`${common.mlAuto} ${styles.introDetail}`}>{`${movie.runtime}m`}</span>
                                }
                            </div>

                            <span className={`${common.fontJS} ${styles.introSummary}`}>
                                {
                                    movie["description_full"].length !== 0
                                    ? ( movie["description_full"].length > 235
                                        ? movie["description_full"].substring(0, 235) + "..."
                                        : movie["description_full"]
                                    )
                                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in quam mauris. Nunc pulvinar ac nisl malesuada lobortis. Vestibulum consectetur purus nec turpis sagittis, efficitur dignissim nisl mattis. Donec tempus nec mauris nunc."
                                }
                            </span>
                        </div>
                        <img className={styles.coverImg} src={movie["large_cover_image"]} alt={movie.title_long}/>
                    </div>
                </div>
                :
                <Loading />
            }
        </>
    );
}

export default Detail;
