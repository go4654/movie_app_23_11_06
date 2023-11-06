import styled from "styled-components";

const SMainBanner = styled.section`
  height: 90vh;
  background: url(https://image.tmdb.org/t/p/original/${(props) =>
      props.$bgUrl})
    no-repeat center / cover;
  padding: 350px 5% 0 5%;
  position: relative;
  @media screen and (max-width: 450px) {
    padding: 400px 5%;
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(0deg, rgb(0 0 0 / 80%) 26%, rgb(0 0 0 / 0%) 60%);
`;

const Title = styled.div`
  max-width: 700px;
  width: 100%;
  position: relative;
  h3 {
    font-size: 80px;
    line-height: 90px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    opacity: 0.8;
    line-height: 25px;
  }
  @media screen and (max-width: 450px) {
    h3 {
      font-size: 50px;
      line-height: 60px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const MainBanner = ({ data }) => {
  return (
    <SMainBanner $bgUrl={data?.backdrop_path}>
      <BlackBg />
      <Title>
        <h3>{data?.title}</h3>
        <p>{data?.overview.slice(0, 100) + "..."}</p>
      </Title>
    </SMainBanner>
  );
};
