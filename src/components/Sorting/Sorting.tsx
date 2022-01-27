import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../state/store";
import {HotelType} from "../../TYPES/TYPES";
import {cheapestHotels, popularHotels} from "../../state/hotels_reducer";


export const Sorting = () => {
    const dispatch = useDispatch();
    const hotels = useSelector<rootReducerType, Array<HotelType>>(state => state.hotels.hotels)

    useEffect(() => {
        dispatch(popularHotels);
    }, [hotels.length, dispatch]);

    return (
        <div>
            <button
                onClick={() => {
                    dispatch(popularHotels);
                }}>Самый популярный
            </button>
            <button
                onClick={() => {
                    dispatch(cheapestHotels);
                }}>Самый дешевый
            </button>
        </div>
    )
}