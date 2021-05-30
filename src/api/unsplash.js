import axios from "axios";

export default axios.create({
    baseURL : "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID fp96HmUpfknkY2t9o1-kChhn4amfrG0qM-6b_7Z6MHM",
    },
})