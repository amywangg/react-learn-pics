import axios from 'axios';

// all code related to axios request to unsplash
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID UNmBFOQ1sNQYZloBl-fza_WA7K9kGdULvZfERPKqP9I'
    }
});