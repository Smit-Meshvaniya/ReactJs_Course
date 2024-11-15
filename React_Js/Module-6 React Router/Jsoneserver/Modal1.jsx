import React from "react";
import styled from 'styled-components';


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; 
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;



const Modal1 = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose} ></CloseButton>
        {children}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal1;
