import React, {useState} from 'react';
import './App.css';
import {Preloader} from "./common/Preloader/Preloader";
import {getHotelsData, getIdData} from "./API/api";
import {popularHotels, setHotels} from "./state/hotels_reducer";
import {useDispatch} from "react-redux";
import {Hotels} from "./components/Hotels/Hotels";

function App() {
    const [city, setCity] = useState('minsk')
    const [isLoader, setIsLoader] = useState(false)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     getPlacesData(city)
    //         .then((data) => {
    //             return data[0].result_object.location_id
    //         }).then((res) => {
    //             getHotelsData(res)
    //                 .then((data) => {
    //                     setHotels(data)
    //                 })
    //             // console.log(res)
    //         }
    //     )
    // }, []);

    const handleChange = (event: any) => {
        setCity(event.target.value);
    }

    const handleSubmit = (event: any) => {
        setIsLoader(true)
        getIdData(city)
            .then((data) => {
                return data[0].result_object.location_id
            }).then((res) => {
                getHotelsData(res)
                    .then((data) => {
                        let newData = JSON.parse(JSON.stringify(data));
                        dispatch(setHotels(newData))
                        dispatch(popularHotels);
                        // setHotels(newData)
                        setIsLoader(false)
                        console.log(newData)
                    })
            }
        )
        event.preventDefault();
    }
    // console.log(city)
    // console.log(hotels)

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" value={city} onChange={handleChange}/>
                </label>
                <input type="submit" value="Search"/>
            </form>
            {
                isLoader ? <Preloader/> : <Hotels/>
            }
        </div>

    );
}

export default App;
