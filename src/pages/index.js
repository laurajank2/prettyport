import React from "react";
import "./../styles/landing.css";

const Home = () => {
  return (
    <div>
      <div id="root"></div>
      <br />
      <div className="gallery">
        {/* <figure class="gallery__item gallery__item--1">
          <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/herring-cove-beach-sunset-square-bill-wakeley.jpg" class="gallery__img" alt="1" />
        </figure> */}
        <figure className="gallery__item gallery__item--2">
          <img
            src="https://i.ibb.co/yqgLVnz/IMG-1312.jpg"
            className="gallery__img"
            alt="2"
          />
        </figure>
        <figure className="gallery__item gallery__item--3">
          <img
            src="https://admission.brown.edu/sites/g/files/dprerj526/files/styles/wide_xlrg/public/2020-01/20191020_COMM_coheamarketing122_1.jpg?h=fcd14cb1&itok=Gb8NUuOa"
            className="gallery__img"
            alt="3"
          />
        </figure>
        {/* <figure className="gallery__item gallery__item--4">
          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/herring-cove-beach-sunset-square-bill-wakeley.jpg"
            className="gallery__img"
            alt="4"
          />
        </figure> */}
        {/* <figure className="gallery__item gallery__item--5">
          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/herring-cove-beach-sunset-square-bill-wakeley.jpg"
            className="gallery__img"
            alt="5"
          />
        </figure> */}
        <figure className="gallery__item gallery__item--6">
          <img
            src="https://i.ibb.co/JpjJHFj/http-www-dreamstime-com-royalty-free-stock-image-point-pacific-ocean-vicente-rancho-palos-verdes-los.jpg"
            className="gallery__img"
            alt="6"
          />
        </figure>
      </div>
    </div>
  );
};

export default Home;
