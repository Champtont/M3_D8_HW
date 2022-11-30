import { Component } from "react";
import { Alert, Carousel, Row, Spinner } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class HorrorGallery extends Component {
  state = {
    library: [],
    isLoading: true,
    isError: false,
  };

  fetchMovies = async () => {
    const APIKey = "eeb1760a";
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=${APIKey}&s=nightmare%20on%20elm%20street`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        let movies = data.Search;
        console.log(movies);
        this.setState({
          library: movies,
          isLoading: false,
        });
      } else {
        console.log("error fetching the movies :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <div className="movie-gallery m-2">
        <h5 className="text-left text-light mt-2 mb-2">
          Nightmare On Elm Street
        </h5>
        {this.state.isLoading && (
          <Spinner animation="border" variant="danger" />
        )}
        <Carousel>
          <Carousel.Item>
            <Row>
              {this.state.library.slice(0, 6).map((movie) => {
                return (
                  <SingleMovie
                    key={movie.imdbID}
                    id={movie.imdbID}
                    src={movie.Poster}
                    text={movie.Title}
                  ></SingleMovie>
                );
              })}
              {this.state.isError && (
                <Alert variant="danger">Uh oh, mistakes were made! =(</Alert>
              )}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              {this.state.library.slice(4, 10).map((movie) => {
                return (
                  <SingleMovie
                    key={movie.imdbID}
                    id={movie.imdbID}
                    src={movie.Poster}
                    text={movie.Title}
                  ></SingleMovie>
                );
              })}
              {this.state.isError && (
                <Alert variant="danger">Uh oh, mistakes were made! =(</Alert>
              )}
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default HorrorGallery;
