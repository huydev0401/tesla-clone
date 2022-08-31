import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { selectCars } from "../features/car/carSlice";
import { useSelector, useDispatch } from "react-redux";
import { openSidebar } from "../features/sidebar/sidebarSlice";

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

const Hamburger = styled(MenuIcon)`
  cursor: pointer;
`;

function Header() {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const handleOpenSidebar = () => {
    dispatch(openSidebar());
  };
  return (
    <Container>
      <a href="/" alt="logo tesla">
        <img src="./logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((item, index) => (
            <a key={index} href="/">
              {item}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Tesla Account</a>
        <Hamburger onClick={handleOpenSidebar} />
      </RightMenu>
    </Container>
  );
}

export default Header;
