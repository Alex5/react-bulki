import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
});

export const pizzaApi = {
    getPizzas() {
        return instance.get(`pizzas`);
    }
}

export const sortApi = {
    sortByCategory(index) {
        return instance.get(`pizzas?category=${index}`);
    }
}

export async function getPizzasServer() {
    try {
        const response = await axios.get('https://api.jsonbin.io/b/600464f9e31fbc3bdef4d235/1');
        return response
    } catch (error) {
        console.error(error);
    }
}
