import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <div className="">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <div className="navbar-brand">
            <img src="images/logo.png" alt="Logo" style={{ height: 35 }} />
          </div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-info" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info" to="/addVideogame">
                Add videogame
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
