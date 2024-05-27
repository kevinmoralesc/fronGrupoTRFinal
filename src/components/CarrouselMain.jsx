import { Carousel } from "@material-tailwind/react";
 
export function GalleryWithCarousel() {
  return (
    <Carousel autoplayDelay={3000} loop={true} autoplay={true} className="w-full md:h-96 z-10 ">
      <img
        src="https://res.cloudinary.com/dgp8hrrbj/image/upload/v1716666638/jvfzxkbulfz4svbqe1ko.jpg"
        alt="image 1"
        className="h-full w-full object-cover object-center brightness-75"
      />
      <img
        src="https://res.cloudinary.com/dgp8hrrbj/image/upload/v1716666638/io0lcsrgeuhfr4x0fdlk.jpg"
        alt="image 2"
        className="h-full w-full object-cover object-center brightness-75"
      />
      <img
        src="https://res.cloudinary.com/dgp8hrrbj/image/upload/v1716666803/dcrivccnmdnq19gxjfu3.jpg"
        alt="image 3"
        className="h-full w-full object-cover object-center brightness-75"
      />
    </Carousel>
  );
}