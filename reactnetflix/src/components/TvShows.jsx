import { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

const TvShows = () => {
  const [cartoons, setCartoons] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const fetchCartoons = async () => {
    const APIKey = "eeb1760a";
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=${APIKey}&s=cartoons`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        let cartoons = data.Search;
        console.log(cartoons);
        setCartoons(cartoons);
      } else {
        console.log("error fetching the toons :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCartoons();
  }, []);

  return (
    <>
      <h1>TV Shows</h1>
      <Row>
        {cartoons.map((toons) => {
          return (
            <SingleMovie
              key={toons.imdbID}
              id={toons.imdbID}
              src={toons.Poster}
              text={toons.Title}
            ></SingleMovie>
          );
        })}
      </Row>
    </>
  );
};
export default TvShows;
