import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { selectCars } from "../features/car/carSlice";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./common/Sidebar";
import { closeSidebar } from "../features/sidebar/sidebarSlice";

const Container = styled.div`
  height: 100vh;
`;

const listCar = [
  {
    title: "Model S",
    desc: "Order Online for Touchless Delivery",
    src: "./model-s.jpg",
    leftBtn: "Custom Order",
    rightBtn: "Existing Inventory",
  },
  {
    title: "Model 3",
    desc: "Order Online for Touchless Delivery",
    src: "./model-3.jpg",
    leftBtn: "Custom Order",
    rightBtn: "Existing Inventory",
  },
  {
    title: "Model X",
    desc: "Order Online for Touchless Delivery",
    src: "./model-x.jpg",
    leftBtn: "Custom Order",
    rightBtn: "Existing Inventory",
  },
  {
    title: "Model Y",
    desc: "Order Online for Touchless Delivery",
    src: "./model-y.jpg",
    leftBtn: "Custom Order",
    rightBtn: "Existing Inventory",
  },
  {
    title: "Solar Panels",
    desc: "Lowest Cost Solar Panels in America",
    src: "./solar-panel.jpg",
    leftBtn: "Order Now",
    rightBtn: "Learn More",
  },
  {
    title: "Solar Roof",
    desc: "Produce Clean Energy From Your Roof",
    src: "./solar-roof.jpg",
    leftBtn: "Order Now",
    rightBtn: "Learn More",
  },
  {
    title: "Accessories",
    src: "./accessories.jpg",
    leftBtn: "Shop Now",
  },
];

function Home() {
  const cars = useSelector(selectCars);
  const sidebar = useSelector((state) => state.sidebar.open);
  const dispatch = useDispatch();

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  return (
    <Container>
      {listCar &&
        listCar.map((item, index) => (
          <Section
            key={index}
            title={item?.title}
            desc={item?.desc}
            backgroundImg={item?.src}
            leftBtn={item?.leftBtn}
            rightBtn={item?.rightBtn}
          ></Section>
        ))}
      <Sidebar
        show={sidebar}
        data={cars}
        onClick={handleCloseSidebar}
      ></Sidebar>
    </Container>
  );
}

export default Home;
