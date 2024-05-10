import React from "react";
import Slider from "react-slick";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import "./topBrands.css";

const topBrandsList = [
  {
    id: 1,
    time: "25 min",
    title: "Domino's Pizza",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp",
  },
  {
    id: 2,
    time: "35 min",
    title: "Haldiram's",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp",
  },
  {
    id: 3,
    time: "28 min",
    title: "Subway",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp",
  },
  {
    id: 4,
    time: "55 min",
    title: "Burger Singh - Big Punjabi Burgers",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/a175a6938688350fb3da3018da6293db_1625244343.png?output-format=webp",
  },
  {
    id: 5,
    time: "48 min",
    title: "The Waffle Co.",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/798d657e25775febef6687da9c4d6e92_1514367872.png?output-format=webp",
  },
  {
    id: 6,
    time: "29 min",
    title: "K.F.C.",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/9/65279/0e79614ea14113b8b3d4b48574293d00.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
  },
  {
    id: 7,
    time: "39 min",
    title: "Burger King",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/0/18225860/5738bb829abcbb91e79d8893af950927.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
  },
  {
    id: 8,
    time: "41 min",
    title: "Chai Sutta Bar",
    cover:
      "https://b.zmtcdn.com/data/pictures/8/20017238/431c54fe26998da8ef30f5ec164c631c.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
  },
];

const settings = {
  infinite: true,
  slidesToShow: 6,
  SlidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand) => {
          return (
            <div>
              <div className="top-brands-cover">
                <img
                  src={brand.cover}
                  className="top-brands-image"
                  alt={brand.title}
                ></img>
              </div>
              <div>{brand.time}</div>
              <div className="top-brand-title">{brand.title}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
