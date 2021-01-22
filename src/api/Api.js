import axios from "axios";
import React from "react";

export const pizzaApi = {
    getPizzas(sortBy, category) {
        return axios
            .get(
                `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
                    sortBy.order
                }`,
            )
    }
}
