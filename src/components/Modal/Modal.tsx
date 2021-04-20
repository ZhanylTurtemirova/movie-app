import React, {
  FC,
  ReactElement,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import {
  ModalWrapper,
  ModalContent,
  CloseButton,
  ModalTitle,
} from "./Modal.styles";
import ReactDOM from "react-dom";
import useOutsideClickHandler from "./customHook/OutsideClickHandler";

interface ModalProps {
  isHidden: boolean;
  children: any;
  title?: string;
  onClose: () => void;
}

const Modal: FC<React.PropsWithChildren<ModalProps>> = ({
  isHidden,
  children,
  title,
  onClose,
}): ReactElement | null => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const domNode: HTMLElement = useMemo(() => {
    const node = document.createElement("div");
    node.setAttribute("id", "Popup-root");
    return node;
  }, []);

  const handleClose = useCallback(() => {
    if (domNode) {
      document.body.removeChild(domNode);
    }
    onClose();
  }, [onClose, domNode]);

  useOutsideClickHandler(wrapperRef, handleClose);

  useEffect(() => {
    if (domNode) {
      document.body.appendChild(domNode);
    }
  }, [domNode]);
  if (!domNode) {
    return null;
  }
  return (
    <>
      {ReactDOM.createPortal(
        <ModalWrapper isHidden={isHidden}>
          <ModalContent ref={wrapperRef}>
            <CloseButton onClick={onClose}>&times;</CloseButton>
            {title && <ModalTitle>{title}</ModalTitle>}
            {children}
          </ModalContent>
        </ModalWrapper>,
        domNode
      )}
    </>
  );
};

export default Modal;
