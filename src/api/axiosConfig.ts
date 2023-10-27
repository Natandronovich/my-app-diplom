import axios from "axios";

export const axiosApiConfig = axios.create({
    baseURL:"https://api.spoonacular.com/recipes/",
    headers:{ 
        "x-api-key": "e14e7905f7ae46fc8c3f11cf7c49d213",
},
});