import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { mainColors } from "../style/GlobalStyled";
import { useEffect, useRef } from "react";

const SHeader = styled.header`
  width: 100%;
  padding: 20px 5%;
  position: absolute;
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
  const headerRef = useRef(null);

  const scrollHandler = () => {
    const pageY = window.scrollY;
    if (pageY > 300) {
      headerRef.current.style.position = "fixed";
      headerRef.current.style.backgroundColor = "rgba(0,0,0,0.7)";
      headerRef.current.style.backdropFilter = "blur(2px)";
    } else {
      headerRef.current.style.position = "absolute";
      headerRef.current.style.backgroundColor = "transparent";
    }
  };

  useEffect(() => {
    return window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <SHeader ref={headerRef}>
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
