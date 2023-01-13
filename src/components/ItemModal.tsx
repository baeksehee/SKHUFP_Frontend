import Link from "next/link";
import { useCallback, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

export default function ItemModal() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <Item onClick={onClickToggleModal}>
      {isOpenModal && (
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
  );
}
const Item = styled.div`
  margin: 1rem;
  background-color: #eeeeee;
`;

const StyledDeleteBtn = styled.button`
  margin-left: 33vw;

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
