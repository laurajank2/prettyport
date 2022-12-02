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
        <figure className="gallery__item--2">
          <img
            src="https://i.ibb.co/yqgLVnz/IMG-1312.jpg"
            className="gallery__img"
            alt="laura_portrait"
          />
        </figure>
        
        <figure className="gallery__item--3">
          <img
            src="https://admission.brown.edu/sites/g/files/dprerj526/files/styles/wide_xlrg/public/2020-01/20191020_COMM_coheamarketing122_1.jpg?h=fcd14cb1&itok=Gb8NUuOa"
            className="gallery__img"
            alt="brown"
          />
        </figure>
        <figure className="gallery__item--3-1">
          <img
            src="https://i.ibb.co/YXYLSm0/Untitled-Artwork-4.png"
            className="gallery__word"
            alt="brown_words"
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
            src="https://www.stevens.edu/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmviowpldu823%2F9ceb260f53f108d6185043478b9ae6c2%2F6b49fdd1022912ec78fc019c4955fe49%2FMachine-Learning-v2-shutterstock_1092234560_0.jpg%3Fw%3D1200%26h%3D675%26f%3Dface%26q%3D80%26fit%3Dfill&w=1200&q=80"
            className="gallery__img"
            alt="PV img"
          />
        </figure>
        <figure className="gallery__item gallery__item--6-1">
          <img
            src="https://i.ibb.co/T2jf9dk/Untitled-Artwork-7.png"
            className="gallery__word"
            alt="PV words"
          />
        </figure>
      </div>
    </div>
  );
};

export default Home;
