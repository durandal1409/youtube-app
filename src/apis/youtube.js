import axios from 'axios';


const KEY='AIzaSyCanF0d4StbSTMo6hVbYvzchv3VXe3xgyw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
})