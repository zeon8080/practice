import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 800px;
  height: 240px;
  margin-bottom: 20px;

  background-image: url("../../../../bg.png");
  background-repeat: no-repeat;
  text-align: center;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 800;
  color: white;
  padding-top: 80px;
  position: relative;
  margin-bottom: 40px;
`;

const ImgItem = styled.img`
  margin-left: 480px;
  padding-top: 80px;
  position: absolute;
  top: 0;
`;

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <ItemBox>
          Carousel
          <ImgItem src="/rocket.png" />
        </ItemBox>
        <ItemBox>
          Carousel
          <ImgItem src="/rocket.png" />
        </ItemBox>
        <ItemBox>
          Carousel
          <ImgItem src="/rocket.png" />
        </ItemBox>
      </Slider>
    </Wrapper>
  );
}
