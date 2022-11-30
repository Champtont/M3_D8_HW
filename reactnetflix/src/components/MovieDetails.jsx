import { FaSadCry } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";

const MovieDetails = () => {
  const params = useParams();
  console.log(params.movieId);

  const [movie, setMovie] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  const fetchSpecifics = async () => {
    const APIKey = "eeb1760a";
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=${APIKey}&i=${params.movieId}`
      );
      if (response.ok) {
        let movie = await response.json();
        console.log(movie);
        setMovie(movie);
      } else {
        console.log("error fetching the movie :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSpecifics();
  }, []);

  return (
    <>
      {location.pathname === "/details/:movieId" && (
        <h1>
          <FaSadCry /> You Haven't Chosen A Movie Yet
        </h1>
      )}
      {typeof movie !== "undefined" && (
        <>
          <h1>{movie.Title}</h1>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={movie.Poster}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2>{movie.Director}</h2>
                  <p className="card-text">{movie.Plot}</p>
                  <p className="card-text">
                    <small className="text-muted">{movie.Genre}</small>
                  </p>
                  <Button variant="danger" onClick={() => navigate("/")}>
                    Home
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
