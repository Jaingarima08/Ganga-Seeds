import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/images/agri1.webp";
import Image2 from "../../assets/images/agri2.webp";
import Image3 from "../../assets/images/agri3.webp";
import Image4 from "../../assets/images/agri4.webp";

const images = [
  { src: Image1, alt: "Image 1" },
  { src: Image2, alt: "Image 2" },
  { src: Image3, alt: "Image 3" },
  { src: Image4, alt: "Image 4" },
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "ease-in-out",
  };

  return (
    <div className="w-full">
      <div className="h-[30vh] sm:h-[40vh] md:h-[60vh] relative shadow-md">
        <Slider {...settings} className="w-full h-full">
          {images.map((image, index) => (
            <div key={index} className="w-full h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[30vh] sm:h-[40vh] md:h-[60vh] object-cover object-center"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
