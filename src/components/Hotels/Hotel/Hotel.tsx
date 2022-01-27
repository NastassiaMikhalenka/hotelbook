import React, {useState} from 'react';
import {HotelType} from "../../../TYPES/TYPES";
import {ModalWindow} from "../ModalWindow/ModalWindow";
import classes from "./hotel.module.css";


type PropsType = {
    hotel: HotelType
    index: number
}

export const Hotel = ({hotel, index}: PropsType) => {
    const [modalWindow, setModalWindow] = useState(false)

    let urlImg = hotel.photo?.images.medium.url
    // let rating = Number(hotel.rating)
    let hotelClass = hotel.hotel_class?.slice(0, 1)

    const onClickModal = () => {
        setModalWindow(false)
    }

    return (
        <>
            <div className={classes.hotelContainer}>
                <div className={classes.hotelPhotoWrapper}>
                    <img src={urlImg} alt={hotel.name}/>
                </div>
                <div className={classes.hotelInfoWrapper}>
                    <div className={classes.hotelInfoWrapper_main}>
                        <h2>{hotel.name}</h2>
                        <p><img src="https://img.icons8.com/office/30/000000/star--v1.png" alt={"#"}/>{hotelClass}</p>
                    </div>
                    <div className={classes.hotelInfoWrapper_des}>
                        <div className={classes.hotelInfoWrapper_des__price}>
                            <h3>{hotel.price}</h3>
                            <button className={classes.hotelInfoWrapper_des__priceBtn}
                                    onClick={() => setModalWindow(true)}
                            >Посмотреть
                            </button>
                            <p className={classes.hotelInfoWrapper_des__special}>{hotel.special_offers?.mobile[0]?.headline}</p>
                        </div>
                        <div className={classes.hotelInfoWrapper_des__addit}>
                            {/*<Rating value={rating}/>*/}
                            <p><img src="https://img.icons8.com/emoji/48/000000/green-circle-emoji.png"
                                    alt={"#"}/>{hotel.rating}</p>
                            <p>{hotel.num_reviews} reviews</p>
                            <p><b>#{index + 1}</b> по соотношению цены и качества в Минске, соответствующий Вашему
                                поисковому
                                запросу</p>
                            <p><img src="https://img.icons8.com/ios/50/000000/domain.png" alt={'#'}/><a
                                href={hotel.website}> Перейти на сайт отеля</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {
                modalWindow ? <ModalWindow modalWindow={modalWindow} onClickModal={onClickModal} hotel={hotel}/> : null
            }
        </>
    )
}