import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
export default function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>
            <strong>{title}</strong>
          </h1>
          <p>{description} </p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && (
              <RightButton>
                <strong> {rightBtnText} </strong>
              </RightButton>
            )}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}
const Wrap = styled.div`
  widht: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 780px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 255px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 14px;
  margin: 8px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  //taking reference to the left button
  background: white;
  opacity: 0.95;
  color: black;
`;
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.35s;
`;
const Buttons = styled.div``;
