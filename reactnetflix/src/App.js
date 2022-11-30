import "./App.css";
import "./oldnetflix.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import GenreDetails from "./components/GenreDetails";
import HorrorGallery from "./components/HorrorGallery";
import ActionGallery from "./components/ActionGallery";
import ComedyGallery from "./components/ComedyGallery";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNav></MyNav>
        <Routes>
          <Route
            element={
              <>
                <GenreDetails />
                <HorrorGallery />
                <ActionGallery />
                <ComedyGallery />
              </>
            }
            path="/"
          />
          <Route element={<TvShows />} path="/tvShows" />
          <Route element={<MovieDetails />} path="/details/:movieId" />
        </Routes>
        <MyFooter></MyFooter>
      </div>
    </BrowserRouter>
  );
}

export default App;

//realized that components cannot have the same path under routes...
//but, they can be wrapped in a fragment within the same route
//  <Route element={<GenreDetails />} path="/" />
//<Route element={<ActionGallery />} path="/" />
