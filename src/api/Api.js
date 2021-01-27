import axios from "axios";

export const pizzaApi = {
    getPizzas(sortBy, category) {
        return axios
            .get(`/pizzas?${
                category !== null ? `category=${category}` : ''
            }&_sort=${sortBy.type}&_order=${sortBy.order}`)
            .catch((err) => alert(`Не удалось отправить запрос, ${err}`))
    }
}
