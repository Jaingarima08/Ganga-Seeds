
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/images/agri1.webp"
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
    speed: 3000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "ease-in-out",
    fade: true,
    arrows: false,
    dots: true,
  };

  return (
    <div className="h-[20vh] sm:h-[30vh] lg:h-[55vh] relative shadow-md">
      <Slider {...settings} className="w-full h-full">
        {images.map((image, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[20vh] sm:h-[30vh] lg:h-[55vh] object-cover object-center"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
