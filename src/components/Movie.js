import PropTypes from "prop-types";
import common from "../pages/Common.module.css";
import styles from "./Movie.module.css";
import { useNavigate } from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}) {

    const navigate = useNavigate();

    return (
        <div className={styles.movieCard} onClick={() => navigate(`movie/${id}`)}>
            <img className={styles.movieCoverImg} src={coverImg} alt={title} />

            <div className={`${styles.movieInfo}`}>
                <div className={styles.movieInfoInner}>
                    <span className={`${common.fontDS} ${styles.movieTitle}`}>{title}</span>
                    {
                        genres.map(g => (
                            <li key={g} className={`${common.fontDS} ${styles.movieGenre}`}>{g}</li>
                        ))
                    }
                    <p className={`${common.fontJS} ${styles.movieSummary}`}>{summary.length > 200 ? `${summary.substring(0, 200)}...` : summary}</p>
                </div>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired
    , coverImg: PropTypes.string.isRequired
    , title: PropTypes.string.isRequired
    , summary: PropTypes.string.isRequired
    , genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
