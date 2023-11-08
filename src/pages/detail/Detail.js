import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { detail } from "../../api";
import { IMG_BASE_URL } from "../../constants";

const Wrap = styled.div`
  padding: 150px 15%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 450px) {
    padding: 80px 5%;
    flex-direction: column;
  }
`;

const Bg = styled.div`
  width: 50%;
  height: 70vh;
  background: url(${IMG_BASE_URL}/original${(props) => props.$bgUrl}) no-repeat
    center / cover;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 50vh;
  }
`;

const TitleWrap = styled.div`
  width: 45%;

  h3 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 30px;
    line-height: 65px;
  }
  font-size: 18px;
  font-weight: 400;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const Rating = styled.div`
  margin-bottom: 20px;
`;

const Genres = styled.ul`
  margin-left: 22px;
  margin-bottom: 20px;
  li {
    list-style: disc;
    margin-bottom: 10px;
  }
`;

const ReleaseDate = styled.div`
  margin-bottom: 20px;
`;

const RunTime = styled.div``;

const Desc = styled.div`
  margin-top: 50px;
  line-height: 2em;
  opacity: 0.7;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  padding-top: 30px;
`;

export const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await detail(id);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log("detail error");
      }
    })();
  }, [data]);

  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <Wrap>
          <Bg $bgUrl={data?.poster_path} />
          <TitleWrap>
            <h3>{data.title}</h3>
            <Rating>평점 {Math.round(data.vote_average)}점</Rating>
            <Genres>
              {data.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </Genres>
            <ReleaseDate>개봉일 2023-10-25</ReleaseDate>
            <RunTime>런타임 110분</RunTime>
            <Desc>{data.overview}</Desc>
          </TitleWrap>
        </Wrap>
      )}
    </>
  );
};
