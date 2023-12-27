import React from "react";
import { Link } from "react-router-dom";
import { BiSolidCameraMovie } from "react-icons/bi";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="containers">
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              gap: "50px",
              padding: "20px",
            }}
          >
            <BiSolidCameraMovie
              style={{
                fontSize: "100px",
              }}
            />
            <li>
              <Link to="/movie" className="Lists movie">
                <h1 style={{ fontSize: "50px, " }}>MovieMania</h1>
              </Link>
            </li>

            <li>
              <Link to="/status" className="Lists status">
                <h1 style={{ fontSize: "50px, " }}>Status</h1>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
