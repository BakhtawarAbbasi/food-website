"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ClientReview = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        What people say about us
      </h1>
      <div className="mt-16 w-[80%] mx-auto">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          <ReviewCard reviewTitle="GreatWork!" userName="Jassica Doa" userImage="/images/c1.webp" role="UI/UX Designer"/>
          <ReviewCard reviewTitle="Creative Work" userName="Tany Doe" userImage="/images/c2.webp" role="Web Developer"/>
          <ReviewCard reviewTitle="Awesome Work" userName="Jasson Doe" userImage="/images/c3.webp" role="App Developer"/>
        </Carousel>
      </div>
    </div>
  );
};

export default ClientReview;
