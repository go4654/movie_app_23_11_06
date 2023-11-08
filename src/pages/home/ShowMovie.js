import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Container = styled.section`
  padding: 60px 5%;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const CoverBg = styled.div`
  height: 150px;
  background: url(https://image.tmdb.org/t/p/w500/${(props) => props.$bg})
    no-repeat center / cover;
`;

const MovieTitle = styled.h3`
  margin-top: 15px;
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
