import React from "react";
import "./movieContent.css";
import titleImg from "../images/transformer-title.png";
import Button from "./Button";

function MovieContent() {
  return (
    <div className="content active">
      <img src={titleImg} alt="Movie Title" className="movie-title" />
      <h4>
        <span>Year</span>
        <span>
          <i>age</i>
        </span>
        <span>length</span>
        <span>category</span>
      </h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        praesentium aliquid est quasi debitis minima iure totam fugit, ipsum
        mollitia molestiae, facilis accusamus! Voluptate, labore. Nam
        repellendus earum voluptatum! Inventore pariatur, illo iste eveniet
        exercitationem odit, mollitia ullam, porro quis debitis praesentium
        architecto dolores dignissimos consectetur dolor adipisci facilis
        itaque.
      </p>
      <div className="button">
        <Button
          icon={<ion-icon name="bookmark-outline"></ion-icon>}
          name="Book"
          color="#ff3700"
          bgColor="#ffffff"
        />
        <Button
          icon={<ion-icon name="add-outline"></ion-icon>}
          name="My LIST"
        />
      </div>
    </div>
  );
}

export default MovieContent;
