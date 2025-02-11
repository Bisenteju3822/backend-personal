import { Link, useNavigate, Outlet } from "react-router-dom";
import "../Style.css";
import { useState } from "react";

const Nav = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    switch (searchInput.toLowerCase()) {
      // Routes
      case "insert":
        navigate("/insert");
        break;
      case "display":
        navigate("/display");
        break;
      case "update":
        navigate("/update");
        break;
      case "search":
        navigate("/search");
        break;
      case "edit employee":
        navigate("/empedit/:id");
        break;
      case "home":
        navigate("/");
        break;
      case "about":
        navigate("/about");
        break;
      case "dashboard":
        navigate("/dashboard");
        break;
      default:
        alert("Page not found");
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top animated-navbar"
        data-bs-theme="blue"
      >
        <div className="container-fluid">
          <Link
            style={{ fontSize: "40px", transition: "all 0.3s" }}
            className="navbar-brand animated-brand"
            to="/"
          >
            Penny<span style={{ color: "black" }}>Pilot</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {[
                { to: "/", text: "Home" },
                { to: "/about", text: "About" },
                { to: "/insert", text: "Insert" },
                { to: "/display", text: "Display" },
                { to: "/update", text: "Update" },
                { to: "/search", text: "Search" },
                { to: "/empedit/:id", text: "Edit" },
                { to: "/dashboard", text: "Dashboard" },
              ].map((link, index) => (
                <li className="nav-item animated-nav-item" key={index}>
                  <Link
                    className="nav-link"
                    style={{ transition: "all 0.3s", marginLeft: "10px" }}
                    to={link.to}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  transition: "all 0.3s",
                }}
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
