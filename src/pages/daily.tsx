import Link from "next/link";
import { useCallback, useState } from "react";

import styled from "styled-components";
import Modal from "../components/Modal";
import Nav from "../components/Nav";

export default function Daily() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  return (
    <>
      <Nav />
      <Container>
        <form>
          <h1>데일리룩 목록</h1>
          <Container2>
            <StyledGrid>
              <Item onClick={onClickToggleModal}>
                {openModal && (
                  <Modal onClickToggleModal={onClickToggleModal}>
                    <StyledDeleteBtn>x</StyledDeleteBtn>
                    <StyledBtnDiv>
                      <Link href="./m_edit">
                        <StyledButton>수정</StyledButton>
                      </Link>
                      <StyledButton>삭제</StyledButton>
                    </StyledBtnDiv>
                  </Modal>
                )}
              </Item>
              <Item onClick={onClickToggleModal}>
                {openModal && (
                  <Modal onClickToggleModal={onClickToggleModal}>
                    <StyledDeleteBtn>x</StyledDeleteBtn>
                    <StyledBtnDiv>
                      <Link href="./m_edit">
                        <StyledButton>수정</StyledButton>
                      </Link>
                      <StyledButton>삭제</StyledButton>
                    </StyledBtnDiv>
                  </Modal>
                )}
              </Item>
              <Item onClick={onClickToggleModal}>
                {openModal && (
                  <Modal onClickToggleModal={onClickToggleModal}>
                    <StyledDeleteBtn>x</StyledDeleteBtn>
                    <StyledBtnDiv>
                      <Link href="./m_edit">
                        <StyledButton>수정</StyledButton>
                      </Link>
                      <StyledButton>삭제</StyledButton>
                    </StyledBtnDiv>
                  </Modal>
                )}
              </Item>
              <StyledName>자주 입는 옷</StyledName>
              <StyledName>트레이닝복</StyledName>
              <StyledName>편한 옷</StyledName>
            </StyledGrid>
            <StyledGrid>
              <Item onClick={onClickToggleModal}>
                {openModal && (
                  <Modal onClickToggleModal={onClickToggleModal}>
                    <StyledDeleteBtn>x</StyledDeleteBtn>
                    <StyledBtnDiv>
                      <Link href="./m_edit">
                        <StyledButton>수정</StyledButton>
                      </Link>
                      <StyledButton>삭제</StyledButton>
                    </StyledBtnDiv>
                  </Modal>
                )}
              </Item>
              <Item onClick={onClickToggleModal}>
                {openModal && (
                  <Modal onClickToggleModal={onClickToggleModal}>
                    <StyledDeleteBtn>x</StyledDeleteBtn>
                    <StyledBtnDiv>
                      <Link href="./m_edit">
                        <StyledButton>수정</StyledButton>
                      </Link>
                      <StyledButton>삭제</StyledButton>
                    </StyledBtnDiv>
                  </Modal>
                )}
              </Item>
              <Item onClick={onClickToggleModal}>
                {openModal && (
                  <Modal onClickToggleModal={onClickToggleModal}>
                    <StyledDeleteBtn>x</StyledDeleteBtn>
                    <StyledBtnDiv>
                      <Link href="./m_edit">
                        <StyledButton>수정</StyledButton>
                      </Link>
                      <StyledButton>삭제</StyledButton>
                    </StyledBtnDiv>
                  </Modal>
                )}
              </Item>
              <StyledName>데이트룩</StyledName>
              <StyledName>자주 입는 옷</StyledName>
              <StyledName>잘 때 입는 옷</StyledName>
            </StyledGrid>
          </Container2>
        </form>
        <Link href="/d_add">
          <StyledAdd>➕</StyledAdd>
        </Link>
      </Container>
    </>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Container2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const StyledGrid = styled.div`
display: grid;
grid-template-columns: 15vw 15vw 15vw;
grid-template-rows: 15vw 60px;
`;

const Item = styled.div`
margin: 10px;

background-color: #eeeeee;
`;

const StyledName = styled.button`
margin: 1rem;

border: 1px solid #d0bcf2;
border-radius: 10px;
background-color: #d0bcf2;
opacity: 0.5;
cursor: pointer;
z-index: -1;
`;

const StyledAdd = styled.button`
width: 4rem;
height: 4rem;

border: none;

background-color: #d0bcf2;
font-size: 1.5rem;
cursor: pointer;
`;

const StyledDeleteBtn = styled.button`
  margin-left: 35vw;

  font-size: 2rem;

  background-color: white;
  border: none;
  cursor: pointer;
`;

const StyledBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: 20vw;
  padding-top: 320px;

  gap: 1vw;
`;

const StyledButton = styled.button`
  width: 6vw;
  height: 25px;
  margin-top: 5rem;

  text-align: center;

  border: 1px solid #d0bcf2;
  border-radius: 10px;

  background-color: #d0bcf2;
  cursor: pointer;

  &:hover {
    color: #d0bcf2;
    background-color: white;
  }
`;