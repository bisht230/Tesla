import React from "react";
import styled from "styled-components";
import Section from "./Section";

export default function Home() {
  return (
    <Container>
      {/* Home */}
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="ORDER NOW"
        rightBtnText="LEARN MORE"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
      />
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
`;
