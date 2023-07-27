import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  let mode = 1;
  let modesetting = document.getElementById("modesetting");
  // let css = document.getElementsByName("*")
  let maincom = document.getElementById("maincom")

  const changeMode = () => {
    console.log("you have clicked on the change mode");
    if (mode === 1) {
      modesetting.classList.remove("fa-sun");
      modesetting.classList.add("fa-moon");
      mode = 0;
    } else if (mode === 0) {
      modesetting.classList.add("fa-sun");
      modesetting.classList.remove("fa-moon");
      mode = 1;
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
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
          <div
            className="collapse main navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item marleft">
                <Link
                  className="nav-link active mx-3"
                  aria-current="page"
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-3"
                  aria-current="page"
                  to="/about"
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-3"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex"> */}
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
            <i
              style={{ color: "white", cursor: "pointer" }}
              className="fa-solid fa-sun mode"
              id="modesetting"
              onClick={changeMode}
            ></i>
            <Link  style={{color:"white", textDecoration:"none"}} to="/hireme"><button type="button" className="btn btn-outline-secondary" style={{marginLeft:"20px"}}>
              Hire Me
            </button></Link>
          </div>
        </div>
      </nav>
    </>
  );
}
