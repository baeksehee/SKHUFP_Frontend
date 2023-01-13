import Link from "next/link";
import { useCallback, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

export default function Grid() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  return (
    <Container>
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
      </StyledGrid>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 15vw 15vw 15vw;
  grid-template-rows: 15vw 15vw 15vw;
`;

const Item = styled.div`
  margin: 1rem;
  
  background-color: #eeeeee;
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