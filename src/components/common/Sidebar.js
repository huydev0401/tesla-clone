import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

const SidebarStyle = styled.div`
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
  ${(props) =>
    props.show ? "transform: translateX(0)" : "transform: translateX(100%)"};
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

function Sidebar({ data, onClick, show }) {
  return (
    <SidebarStyle show={show}>
      <CloseWrapper>
        <CustomClose onClick={onClick} />
      </CloseWrapper>
      {data &&
        data.map((item, index) => (
          <li>
            <a key={index} href="/">
              {item}
            </a>
          </li>
        ))}
    </SidebarStyle>
  );
}

export default Sidebar;
