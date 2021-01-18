import axios from "axios";

export async function getPizzas() {
    try {
        const response = await axios.get('https://api.jsonbin.io/b/600464f9e31fbc3bdef4d235/1');
        return response
    } catch (error) {
        console.error(error);
    }
}
