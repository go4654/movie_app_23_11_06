import styled from "styled-components";

const Container = styled.div`
  padding: 100px 0;
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
