import React from "react";
import "./../styles/landing.css";

const Home = () => {
  return (
    <div>
      <div id="root"></div>
      <br />
      <div className="gallery">
        <figure class="gallery__item gallery__item--1">
          <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/herring-cove-beach-sunset-square-bill-wakeley.jpg" class="gallery__img" alt="Image 1" />
        </figure>
        <figure className="gallery__item gallery__item--2">
          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/herring-cove-beach-sunset-square-bill-wakeley.jpg"
            className="gallery__img"
            alt="Image 2"
          />
        </figure>
        <figure className="gallery__item gallery__item--3">
          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/herring-cove-beach-sunset-square-bill-wakeley.jpg"
            className="gallery__img"
            alt="Image 3"
          />
        </figure>
        <figure className="gallery__item gallery__item--4">
          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/herring-cove-beach-sunset-square-bill-wakeley.jpg"
            className="gallery__img"
            alt="Image 4"
          />
        </figure>
        <figure className="gallery__item gallery__item--5">
          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/herring-cove-beach-sunset-square-bill-wakeley.jpg"
            className="gallery__img"
            alt="Image 5"
          />
        </figure>
        <figure className="gallery__item gallery__item--6">
          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/herring-cove-beach-sunset-square-bill-wakeley.jpg"
            className="gallery__img"
            alt="Image 6"
          />
        </figure>
      </div>
    </div>
  );
};

export default Home;
