import { ChangeEvent, useState } from "react";

import styled from "styled-components";
import Nav from "../components/Nav";

import axios from "axios";
import router from "next/router";

export default function M_add() {
  const [season, setSeason] = useState<string>('spring');

  const [category, setCategory] = useState<string>('tops');

  const [name, setName] = useState<string>('');

  const [comment, setComment] = useState<string>('');

  const [file, setFile] = useState<File>();

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    // formData.append("name", "file")
    console.log(e.target.files);
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];
    // e.target.files instanceof FileList
    //   ? formData.append("file", e.target.files[0]) : 'handle exception'

    console.log(files);
    
      formData.append("file", e.currentTarget.value[0])
      console.log(formData);
      
    setFile(files);
  };

  const onChangeSeason = (e: ChangeEvent<HTMLSelectElement>) => {
    setSeason(e.target.value);
  }

  const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  }
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  const onChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  }

  // const file = new FormData();
  // file.append("name", "file");
  // file.append("key", e.target.files[0])

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(localStorage.getItem("accessToken"));

    // axios.post('https://skhufp.ddns.net/api/clothes/{id}/image', {
    //   data: file,

    // }, {withCredentials: true,       headers: {
    //   "Content-Type": "multipart/form-data",
    //   "Authorization": "Bearer " + localStorage.getItem("accessToken"),
    //   withCredentials: true,
    // },})
    //   .then(res => {
    //     console.log(res.data);
    //     router.push('/s_main');
    //   })
    //   .catch(res => {
    //     console.log(res.data);
    //   })

    console.log({
      season: [season],
      category: category,
      name: name,
      comment: comment,
    });

    axios.post('https://skhufp.ddns.net/api/clothes', {
      seasons: [season],
      type: category,
      name: name,
      comment: comment,
    }, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("accessToken"),
        withCredentials: true,
      },
    })
      .then(res => {
        // console.log(file);
        if (file === undefined) {
          router.push('/s_main');
          return;
        }

        const id: number = res.data.data.id;
        const formData = new FormData();
        formData.append('file', file);
        axios.post(`https://skhufp.ddns.net/api/clothes/${id}/image`, formData, {
          withCredentials: true, headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": "Bearer " + localStorage.getItem("accessToken"),
            withCredentials: true,
          },
        })
          .then(res => {
            console.log(res.data);
          })
          .catch(res => {
            console.log(res.data);
          })
        router.push('/s_main');
      })
      .catch(res => {
        console.log(res.data);
      })
  }

  return (
    <>
      <Nav />
      <Container>
        <StyledForm onSubmit={onSubmit}>
          <h1>옷 등록</h1>
          <ImgInput type="file" onChange={onChangeFile} accept="image/*" />
          <InputDiv>
            <InputSmallDiv>
              <StyledLongSpan>계절</StyledLongSpan>
              <StyledSelect onChange={onChangeSeason} name="season">
                <option value="spring" selected>봄</option>
                <option value="summer">여름</option>
                <option value="autumn">가을</option>
                <option value="winter">겨울</option>
              </StyledSelect>
            </InputSmallDiv>
            <InputSmallDiv>
              <StyledLongSpan>카테고리(택1)</StyledLongSpan>
              <StyledSelectTwo onChange={onChangeCategory} name="season">
                <option value="tops" selected>상의</option>
                <option value="bottoms">하의</option>
                <option value="outerwear">아우터</option>
                <option value="shoes">신발</option>
                <option value="bags">가방</option>
                <option value="etc">잡화</option>
              </StyledSelectTwo>
            </InputSmallDiv>
            <InputSmallDiv>
              <StyledSpan>이름</StyledSpan>
              <StyledNameInput onChange={onChangeName}></StyledNameInput>
            </InputSmallDiv>
            <InputSmallDiv>
              <StyledSpan>메모</StyledSpan>
              <StyledMemoInput onChange={onChangeComment}></StyledMemoInput>
            </InputSmallDiv>
          </InputDiv>
          <StyledButton>옷 등록</StyledButton>
        </StyledForm>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgInput = styled.input`
  margin-left: 12.5vw;
  margin-top: 32px;

  width: 10rem;
  height: 10rem;

  background-color: #efefef;
`;

const StyledForm = styled.form`
  height: 813px;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 5vh;
`;

const StyledLongSpan = styled.span`
  width: 12vw;
  float: left;

  font-size: 21px;
`;

const StyledSpan = styled.span`
  float: left;

  font-size: 21px;
`;

const InputSmallDiv = styled.div`
  margin-bottom: 3vh;
  padding: 0;

  width: 40vw;
`;

const StyledSelect = styled.select`
  width: 27.5vw;
  height: 23px;

  float: right;
  text-align: center;

  font-size: 15px;

  background-color: #efefef;
  border: none;
`;

const StyledSelectTwo = styled.select`
  width: 27.5vw;
  height: 23px;

  float: right;
  text-align: center;

  font-size: 15px;

  background-color: #efefef;
  border: none;
`;

const StyledNameInput = styled.input`
  width: 27.5vw;
  height: 23px;

  float: right;
  text-align: center;

  font-size: 15px;

  background-color: #efefef;
  border: none;
  outline: none;
`;

const StyledMemoInput = styled.input`
  width: 27.5vw;
  height: 143px;

  float: right;

  font-size: 15px;

  background-color: #efefef;
  border: none;
  outline: none;
`;

const StyledButton = styled.button`
  width: 15vw;
  height: 25px;

  float: right;

  background-color: #d0bcf2;
  border: 1px solid #d0bcf2;
  cursor: pointer;

  &:hover {
    color: #d0bcf2;
    background-color: white;
  }
`;