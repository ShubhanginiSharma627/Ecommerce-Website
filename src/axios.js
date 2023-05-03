import axios from "axios";

const instance = axios.create({
    baseURL:"https://backendassignment-o6hd.onrender.com",
})

export default instance;