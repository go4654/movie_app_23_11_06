import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { mainColors } from "../style/GlobalStyled";

const SHeader = styled.header`
  width: 100%;
  padding: 20px 5%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

const Logo = styled.div`
  font-size: 26px;
  font-weight: 700;
  a {
    color: ${mainColors.pointColor};
  }
`;

const Nav = styled.ul`
  display: flex;
  li {
    font-size: 18px;
    font-weight: 500;
    margin-left: 50px;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={routes.home}>MOIVE</Link>
      </Logo>

      <Nav>
        <li>
          <Link to={routes.home}>HOME</Link>
        </li>
        <li>
          <Link to={routes.search}>SERACH</Link>
        </li>
      </Nav>
    </SHeader>
  );
};
