import { useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  width: 50px;
  height: 50px;
  background: #fff7f7;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  transition: transform 2s ease;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  text-transform: uppercase;
  padding: 50px;
`;

const Image = styled.img`
  height: 80%;
`;

const Title = styled.h1`
  font-size: 70px;
  padding-right: 10px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  padding-right: 10px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
      console.log(sliderItems.length);
    }
  };

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon fontSize='inherit' />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => {
          return (
            <Slide bg={item.bg} key={item.id}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>Shop Now</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon fontSize='inherit' />
      </Arrow>
    </Container>
  );
};

export default Slider;
