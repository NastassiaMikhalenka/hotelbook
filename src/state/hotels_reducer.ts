import {HotelType} from "../TYPES/TYPES";

type InitialStateType = {
    hotels: Array<HotelType>
    hotelsForFilter: Array<HotelType>
}
export const initialState: InitialStateType = {
    hotels: [] as Array<HotelType>,
    hotelsForFilter: [] as Array<HotelType>,
}

type ActionsType = setHotelsType | cheapestHotelsType | popularHotelsType | filterHotelsType

const SET_HOTELS = 'SET_HOTELS'
const CHEAPEST_HOTELS = 'CHEAPEST_HOTELS'
const POPULAR_HOTELS = 'POPULAR_HOTELS'
const HOTELS_FILTERED = 'HOTELS_FILTERED'

export const hotels_reducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_HOTELS : {
            return {
                ...state,
                hotels: action.payload.hotels,
                hotelsForFilter: action.payload.hotels,
            }
        }
        case CHEAPEST_HOTELS: {
            return {
                ...state,
                hotels: [...state.hotels.sort((a, b) => parseInt(a.price?.replace(/[^\d]/g, ' ')) - parseInt(b.price?.replace(/[^\d]/g, ' ')))],
                hotelsForFilter: [...state.hotelsForFilter.sort((a, b) => parseInt(a.price?.replace(/[^\d]/g, ' ')) - parseInt(b.price?.replace(/[^\d]/g, ' '))),
                ],
            }
        }
        case POPULAR_HOTELS:
            return {
                ...state,
                hotels: [
                    ...state.hotels.sort((a, b) => a.ranking_position > b.ranking_position ? 1 : -1),
                ],
                hotelsForFilter: [
                    ...state.hotelsForFilter.sort((a, b) => a.ranking_position > b.ranking_position ? 1 : -1),
                ],
            };
        case HOTELS_FILTERED:
            if (
                action.payload.filters.includes("all") ||
                !action.payload.filters.length
            ) {
                return {...state, hotelsForFilter: [...state.hotels]};
            } else {
                const newState = {...state};
                newState.hotelsForFilter = newState.hotels;
                action.payload.filters.map((item) => {
                    newState.hotelsForFilter = newState.hotelsForFilter.filter((hotels) =>
                        // hotels.hotel_class === item
                        hotels.hotel_class?.slice(0, 1) === item
                    );
                    return item;
                });
                return {
                    ...state,
                    hotelsForFilter: newState.hotelsForFilter,
                };
            }

        default:
            return state
    }
}

export type setHotelsType = ReturnType<typeof setHotels>
export const setHotels = (hotels: Array<HotelType>) => ({
        type: 'SET_HOTELS',
        payload: {
            hotels: hotels,
        },
    } as const
)

export type cheapestHotelsType = {
    type: 'CHEAPEST_HOTELS';
}
export const cheapestHotels = {
    type: 'CHEAPEST_HOTELS',
}

export type popularHotelsType = {
    type: 'POPULAR_HOTELS';
}
export const popularHotels = {
    type: 'POPULAR_HOTELS',
}

export type filterHotelsType = ReturnType<typeof filterHotels>
export const filterHotels = (filters: Array<string>) => ({
        type: 'HOTELS_FILTERED',
        payload: {
            filters: filters,
        },
    } as const
)


