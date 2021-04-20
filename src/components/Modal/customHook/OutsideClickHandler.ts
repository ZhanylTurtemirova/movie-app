import React, { useEffect } from "react";

const useOutsideClickHandler = (
  wrapperRef: React.RefObject<HTMLDivElement>,
  onClose: () => void
): void => {
  useEffect(() => {
    function handleClickOutside(event: React.MouseEvent) {
      if (
        wrapperRef &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    const eventListener = (((e: React.MouseEvent) => {
      handleClickOutside(e);
    }) as unknown) as EventListener;

    document.addEventListener("mousedown", eventListener);
    return () => {
      document.removeEventListener("mousedown", eventListener);
    };
  }, [onClose, wrapperRef]);
};

export default useOutsideClickHandler;
