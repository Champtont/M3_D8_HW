import { FaSadCry } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  console.log(params.movieId);

  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      {location.pathname === "/details/:movieId" && (
        <h1>
          <FaSadCry /> You Haven't Chosen A Movie Yet
        </h1>
      )}
    </>
  );
};

export default MovieDetails;
