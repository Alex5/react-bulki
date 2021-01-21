import axios from "axios";
import React from "react";

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
});

export const pizzaApi = {
    getPizzas(sortBy, category) {
        return instance
            .get(`pizzas?${
                category !== null ? `category=${category}` : ''
            }&_sort=${sortBy.type}&_order=${sortBy.order}`)
            .catch(() => {
                return axios.get(`https://react-bulki-default-rtdb.firebaseio.com/pizzas.json`)
            });
    }
}
