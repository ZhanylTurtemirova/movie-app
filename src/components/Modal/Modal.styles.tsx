import styled from "styled-components";

export const ModalWrapper = styled.div<{ isHidden: boolean }>`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  padding-top: 100px;
  overflow: auto;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s linear;
  width: 100%;
  height: 100%;
`;
export const ModalContent = styled.div`
  background-color: var(--mainDark);
  margin: auto;
  padding: 40px;
  border-radius: 4px;
  width: 60%;
`;
export const ModalTitle = styled.h3`
  text-align: left;
  font-weight: 300;
  font-size: 32px;
  text-transform: uppercase;
  color: var(--mainWhite);
`;
export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #aaaaaa;
  font-size: 32px;
  cursor: pointer;

  &::focus {
    color: #000;
    text-decoration: none;
  }
`;
