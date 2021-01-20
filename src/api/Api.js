import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
});

export const pizzaApi = {
    getPizzas() {
        try {
            return instance.get(`pizzas`).catch(err => {
                if (err.response.status === 404) {
                   return axios.get('https://api.jsonbin.io/b/600464f9e31fbc3bdef4d235/2');
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

