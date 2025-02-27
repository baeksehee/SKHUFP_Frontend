import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

export default function Modal({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) {
  return (
    <ModalContainer>
      <DialogBox>{children}</DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 10%;
  left: 0;
  bottom: 0;
  right: 0;
`;

const DialogBox = styled.dialog`
  width: 43vw;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid black;
  border-radius: 3%;
  box-sizing: border-box;
  box-shadow: 5px 5px 5px gray;
  background-color: white;
  z-index: 10;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;

  backdrop-filter: blur(1px);
`;
