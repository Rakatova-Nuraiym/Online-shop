import { FC, ReactNode } from "react";
import scss from "./modal.module.scss";
import { Button } from "@mui/material";

interface ModalType {
  isOpen: boolean;
  OnClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalType> = ({ isOpen, OnClose, children }) => {
  console.log(isOpen);

  if (!isOpen) {
    return null;
  }
  return (
    <div className={scss.MainModal}>
      <div className={scss.modal}>
        <div className={scss.products}>
          {children}
          <Button variant="contained" onClick={OnClose}>
            close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
