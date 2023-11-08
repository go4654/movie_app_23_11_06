import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { search } from "../../api";
import { Link } from "react-router-dom";
import { IMG_BASE_URL, NO_IMG_URL } from "../../constants";

const Wrap = styled.div`
  padding: 100px 5%;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 500;
  @media screen and (max-width: 450px) {
    font-size: 30px;
  }
`;

const Form = styled.form`
  margin-top: 30px;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  @media screen and (max-width: 450px) {
    height: 45px;
  }
`;

const Container = styled.div`
  margin-top: 50px;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;
  }
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 300px;
  @media screen and (max-width: 450px) {
    height: 180px;
  }
`;

const MovieTitle = styled.h3`
  margin-top: 10px;
  line-height: 20px;
`;

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
  });

  const [result, setResult] = useState();

  const onSubmit = async (data) => {
    const { search: keyword } = data;

    try {
      const { results } = await search(keyword);
      setResult(results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(result);

  return (
    <Wrap>
      <Title>찾으시는 영화가 있으세요?</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("search", {
            required: "내용을 입력해 주세요.",
          })}
          type="text"
          placeholder="영화 이름 입력"
        />
        {errors?.search?.message}
      </Form>

      <Container>
        {result && (
          <ConWrap>
            {result.map((data) => (
              <Con key={data.id}>
                <Link to={`/detail/${data.id}`}>
                  <Bg
                    style={{
                      background: `url(${
                        data.backdrop_path
                          ? `${IMG_BASE_URL}/w500/${data.backdrop_path}`
                          : `${NO_IMG_URL}`
                      }) no-repeat center / cover`,
                    }}
                  />
                  <MovieTitle>{data.title}</MovieTitle>
                </Link>
              </Con>
            ))}
          </ConWrap>
        )}
      </Container>
    </Wrap>
  );
};
