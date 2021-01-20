import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
});

export const pizzaApi = {
    getPizzas(sortBy, category) {
        try {
            return instance
                .get(`pizzas?${
                    category !== null ? `category=${category}` : ''
                }&_sort=${sortBy.type}&_order=${sortBy.order}`)
                .catch(err => {
                    if (err) {
                        return axios.get(`https://api.jsonbin.io/b/600464f9e31fbc3bdef4d235/2`)
                    }
                });
        } catch (err) {
            console.log(err)
        }
    }

}

export const sortApi = {
    sortByCategory(index) {
        return instance.get(`pizzas?category=${index}`);
    }
}

