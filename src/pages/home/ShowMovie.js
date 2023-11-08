import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IMG_BASE_URL } from "../../constants";

const Container = styled.section`
  padding: 60px 5%;
  @media screen and (max-width: 450px) {
    padding: 30px 5%;
  }
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
  @media screen and (max-width: 450px) {
    font-size: 30px;
  }
`;

const CoverBg = styled.div`
  height: 180px;
  background: url(${IMG_BASE_URL}/w1280/${(props) => props.$bg}) no-repeat
    center / cover;
  @media screen and (max-width: 450px) {
    height: 100px;
  }
`;

const MovieTitle = styled.h3`
  margin-top: 15px;
  line-height: 20px;
`;

const params = {
  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 5.2,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 3.2,
    },
    320: {
      spaceBetween: 15,
      slidesPerView: 2.2,
    },
  },
};

export const ShowMovie = ({ title, data }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Swiper slidesPerView={5.3} spaceBetween={20} {...params}>
        {data.map((movieData) => (
          <SwiperSlide key={movieData.id}>
            <Link to={`/detail/${movieData.id}`}>
              <CoverBg $bg={movieData.backdrop_path} />
              <MovieTitle>{movieData.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
