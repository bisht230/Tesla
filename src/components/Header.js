import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import "material-icons/iconfont/material-icons.css";
export default function Header(props) {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <>
      <Container>
        <a>
          <img src="/images/logo.svg" />
        </a>
        <Menu>
          <a href="#">Model 3</a>
          <a href="#">Model S</a>
          <a href="#">Model Y</a>
          <a href="#">Model X</a>
          <a href="#">Solar roof</a>
          <a href="#">Solar panel</a>
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Account</a>
          {/* <CustomMenu /> */}
        </RightMenu>
        <RightContainer>
          <ExtremeRight>
            <a href="#" onClick={() => setBurgerStatus(true)}>
              Menu
            </a>
          </ExtremeRight>
        </RightContainer>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <Close onClick={() => setBurgerStatus(false)}></Close>
          </CloseWrapper>
          <li>
            <a href="#">Model S</a>
          </li>
          <li>
            <a href="#">Model 3</a>
          </li>
          <li>
            <a href="#">Model X</a>
          </li>
          <li>
            <a href="#">Model Y</a>
          </li>
          <li>
            <a href="#">Solar Roof</a>
          </li>
          <li>
            <a href="#">Solar Panels</a>
          </li>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-In</a>
          </li>
          <li>
            <a href="#">Test Drive</a>
          </li>
          <li>
            <a href="#">Insurance</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>
          <li>
            <a href="#">Charging</a>
          </li>
        </BurgerNav>
      </Container>
    </>
  );
}
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 0 18px;
  top: 0;
  left: 0;
  right: 0;
`;
const Menu = styled.div`
  margin-right: -15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    color: black;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0px 14px;
    flex-wrap: nowrap;
  }
  @media (max-width: 1280px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0;
  padding: 0;
  a {
    word-spacing: 13px;
    color: black;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 5px;
    flex-wrap: nowrap;
  }
  @media (max-width: 1280px) {
    display: none;
  }
`;
const RightContainer = styled.div`
  @media (max-width: 780px) {
    background: #0000000d;
    padding: 4px 8px;
    border-radius: 12px;
  }
`;
const ExtremeRight = styled.div`
  margin: 2px 8px;
  display: flex;
  align-items: center;
  a {
    color: black;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0px 0px;
    flex-wrap: nowrap;
  }
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 240px;
  list-style: none;
  padding: 20px;
  z-index: 16;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) =>
    props.show
      ? `translateX(0)`
      : `translateX(100%)`}; // if false then it will be 0 otherwise it will be 100%
  transition: transform 0.2s;
  li {
    padding: 10px 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: bolder;
  }
`;
const Close = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
