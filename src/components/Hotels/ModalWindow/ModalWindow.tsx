import React from 'react';
import classes from "./modalWindow.module.css";
import {HotelType} from "../../../TYPES/TYPES";

type propsType = {
    onClickModal: () => void
    modalWindow: boolean
    hotel: HotelType
}

export const ModalWindow = ({onClickModal, modalWindow, hotel}: propsType) => {
    return (
        <div className={modalWindow ? classes.modal + classes.active : classes.modal}>
            <div className={classes.modalWindowContent}>
                <button className={classes.btnModal} onClick={onClickModal}>X</button>
                <p>ModalWindow</p>
            </div>
        </div>
    )
}