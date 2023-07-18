import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'be096df121404dfe908130b90ad136bd'
    }
}) 

