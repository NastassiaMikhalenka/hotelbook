import React from 'react';
import {useSelector} from "react-redux";
import {rootReducerType} from "../../state/store";
import {Sorting} from "../Sorting/Sorting";
import {Filters} from "../Filters/Filters";
import classes from "./hotels.module.css";
import {Main} from "../Main/Main";
import {Hotel} from "./Hotel/Hotel";


export const Hotels = () => {
    const store = useSelector((state: rootReducerType) => state.hotels)
    console.log(store)
    return (
        <>
            {store.hotelsForFilter.length ?
                (
                    <div>
                        <Sorting/>
                        <Filters/>
                        <div className={classes.hotelsContainer}>
                            {
                                store.hotelsForFilter.map((hotel, i) => <Hotel hotel={hotel} index={i}/>)
                            }
                        </div>
                    </div>
                )
                : store.hotels.length ?
                    (
                        <div>
                            <Sorting/>
                            <Filters/>
                            <div>
                                {
                                    store.hotels.map((hotel, index) => <Hotel hotel={hotel} index={index}/>)
                                }
                            </div>
                        </div>
                    )
                    :
                    (
                        <Main/>
                    )
            }
        </>
    )
}