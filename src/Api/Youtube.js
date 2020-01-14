import Axios from 'axios';

const API= 'AIzaSyBU2qf75i6dDvB1PxQLaF_hDqHF7CcXLI0';
export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: API
    }
});