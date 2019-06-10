import axios from 'axios';
const KEY = 'AIzaSyCG8_Ax4Rx1WzOrDXOK8_M6AAEEYv1dKIs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

