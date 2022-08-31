import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

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

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 99;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const cars = useSelector(selectCars);
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
        <CustomMenu onClick={() => setOpenSidebar(true)} />
      </RightMenu>
      <Sidebar show={openSidebar}>
        <CloseWrapper>
          <CustomClose onClick={() => setOpenSidebar(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((item, index) => (
            <li>
              <a key={index} href="/">
                {item}
              </a>
            </li>
          ))}
      </Sidebar>
    </Container>
  );
}

export default Header;
