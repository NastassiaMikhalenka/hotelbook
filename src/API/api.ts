import axios from 'axios';

export const getIdData = async (value: string) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/locations/search`, {
            params: {
                query: value,
            },
            headers: {
                'x-rapidapi-key': '139bebeb14mshd09f681140c93d4p116902jsnfa023b9aa5a3',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            },
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};


export const getHotelsData = async (local: string) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/hotels/get-details`, {
            params: {
                location_id: local,
            },
            headers: {
                'x-rapidapi-key': '139bebeb14mshd09f681140c93d4p116902jsnfa023b9aa5a3',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            },
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};
