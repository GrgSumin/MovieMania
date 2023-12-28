import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="containers" style={{ display: "flex" }}>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              gap: "50px",
              padding: "20px",
            }}
          >
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
      <div className="">
        <h1 className="wwe">MovieMania</h1>
      </div>
      <div className="tablet">
        <div className="std">
          <h1 style={{ fontFamily: "'Quicksand',sans-serif" }}>Movies</h1>
          <p style={{ fontFamily: "'Quicksand',sans-serif" }}>
            Movies transport us to different worlds, invoking emotions and
            sparking imagination through captivating storytelling and visuals.
          </p>
        </div>
        <div className="tab">
          <img src="pop.jpg" alt="popcorn" height="300px" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
