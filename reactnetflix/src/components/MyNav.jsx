import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/netflix_logo.png";
import { BsSearch, BsBellFill } from "react-icons/bs";
import avatar from "../assets/avatar.png";

const MyNav = () => {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="">
      <Link to="/">
        <Navbar.Brand>
          <img id="logo" src={logo} alt="netflix logo" />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <div
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </div>
          </Link>
          <Link to="/tvShows">
            <div
              className={
                location.pathname === "/tvShows"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Tv Shows
            </div>
          </Link>
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">Recently Added</Nav.Link>
          <Link to="/details/:movieId">
            <div
              className={
                location.pathname === "/details/:movieId"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Details
            </div>
          </Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#">
            <BsSearch />
          </Nav.Link>
          <Nav.Link href="#">KIDS</Nav.Link>
          <Nav.Link href="#">
            <BsBellFill />
          </Nav.Link>
          <NavLink>
            <img id="avatar" src={avatar} alt="avatar" />
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
