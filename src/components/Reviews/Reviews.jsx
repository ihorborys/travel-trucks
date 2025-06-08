import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Reviews.module.css";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../redux/campersSlice.js";
// import {
//   defaultImg,
//   getSelectedMovieReviews,
//   profileUrl,
// } from "../../api/api.js";

const Reviews = () => {
  const loading = useSelector(selectLoading);
  const errorMessage = useSelector(selectError);
  // const { movieId } = useParams();
  // const [movieReviews, setMovieReviews] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  //
  // useEffect(() => {
  //   if (!movieId) return;
  //
  //   const fetchReviews = async () => {
  //     try {
  //       setLoading(true);
  //       setErrorMessage("");
  //
  //       const movieReviewsData = await getSelectedMovieReviews(movieId);
  //       if (movieReviewsData.results.length === 0)
  //         setErrorMessage("We don't have any reviews for this movie...");
  //
  //       setMovieReviews(movieReviewsData);
  //     } catch (error) {
  //       setErrorMessage(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //
  //   fetchReviews();
  // }, [movieId]);

  // const { results } = movieReviews || {};
  return (
    <div>
      {loading && <Loader />}
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};

export default Reviews;
