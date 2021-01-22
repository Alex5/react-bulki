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
            .catch((err) => {console.log(err)});
    }
}
