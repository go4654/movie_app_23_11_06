import { useParams } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  padding: 150px 15%;
`;

const Bg = styled.div``;

const TitleWrap = styled.div``;

const Rating = styled.div``;

const Genres = styled.ul``;

const ReleaseDate = styled.div``;

const RunTime = styled.div``;

const Desc = styled.div``;

export const Detail = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <Wrap>
      <Bg />
      <TitleWrap>
        <h3>영화 이름</h3>
        <Rating>평점: 3점</Rating>
        <Genres>
          <li>공포</li>
          <li>미스터리</li>
        </Genres>
        <ReleaseDate>2023-10-25</ReleaseDate>
        <RunTime>110분</RunTime>
        <Desc></Desc>
      </TitleWrap>
    </Wrap>
  );
};
