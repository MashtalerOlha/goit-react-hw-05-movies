import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
  
    useEffect(() => {
        fetchMovieReviews(movieId)
        .then(({ results }) => setReviews(results));
    }, [movieId]);
    console.log(reviews)
  
    return (
      <>
        {reviews && reviews.length > 0 ? (
          <ul>
            {reviews.map( review => {
              const { id, author, content } = review;
              return (
                <li key={id}>
                  <h3>{author}</h3>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </>
    );
  }