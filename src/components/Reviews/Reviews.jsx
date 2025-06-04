import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Reviews.module.css";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import {
  defaultImg,
  getSelectedMovieReviews,
  profileUrl,
} from "../../api/api.js";

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!movieId) return;

    const fetchReviews = async () => {
      try {
        setLoading(true);
        setErrorMessage("");

        const movieReviewsData = await getSelectedMovieReviews(movieId);
        if (movieReviewsData.results.length === 0)
          setErrorMessage("We don't have any reviews for this movie...");

        setMovieReviews(movieReviewsData);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  const { results } = movieReviews || {};
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {results &&
          results.map((review) => (
            <li key={review.id} className={styles.item}>
              <img
                className={styles.image}
                src={
                  review.author_details.avatar_path
                    ? `${profileUrl}${review.author_details.avatar_path}`
                    : defaultImg
                }
                width={185}
                height={278}
                alt="Movie poster image"
              />
              <p className={styles.author}>{review.author}</p>
              <p className={styles.content}>{review.content}</p>
            </li>
          ))}
      </ul>
      {loading && <Loader />}
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};

export default Reviews;
