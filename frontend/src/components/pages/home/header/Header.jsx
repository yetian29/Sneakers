"use client"

import Slider from "react-slick";

const images = [
    { image: "/img/header/Image1.avif"},
    { image: "/img/header/Image2.avif"},
    { image: "/img/header/Image3.avif"},
]
const Header = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500, 
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return(
     <Slider {...settings}>
        {images.map(( item, index) => (
            <img src={item.image} key={index} className="w-full h-auto"/>
        ))}
     </Slider>
    )
}
export default Header;