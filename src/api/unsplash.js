import axios from 'axios';


//the method axios.creat() allows us to make a small instance of itself so that we can customize it 
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID E_qY6JuUBwRfaUhrlYImgNIvll5KMu8lsfPbHij7RDc'
    }
});
