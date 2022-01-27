import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {filterHotels} from "../../state/hotels_reducer";

type FilterType = {
    id: number;
    title: string;
    value: string;
};

export const Filters = () => {
    const filters: Array<FilterType> = [
        {id: 0, title: "Все", value: "all"},
        {id: 1, title: "5 звезд", value: "5"},
        {id: 2, title: "4 звезды", value: "4"},
        {id: 3, title: "3 звезды", value: "3"},
        {id: 4, title: "2 звезды", value: "2"},
    ]


    const dispatch = useDispatch();
    const [activeFilters, setActiveFilters] = useState<string[]>([]);

    const handleFilterCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === "all") {
            setActiveFilters(
                activeFilters.includes("all") ? [] : filters.map((el) => el.value)
            );
        } else {
            setActiveFilters(
                activeFilters.includes(e.target.id)
                    ? activeFilters.filter((el) => el !== e.target.id && el !== "all")
                    : [...activeFilters, e.target.id]
            );
        }
    };


    useEffect(() => {
        dispatch(filterHotels(activeFilters));
    }, [dispatch, activeFilters]);

    return (
        <>
            <div>
                <div>Класс отеля</div>
                {filters.map((filter) => (
                    <div key={filter.id}>
                        <input
                            type="checkbox"
                            id={filter.value}
                            checked={activeFilters.includes(filter.value)}
                            onChange={handleFilterCheck}
                        />
                        <label htmlFor={filter.value}>{filter.title}</label>
                    </div>
                ))}
            </div>
        </>
    );
}



