import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const options: AxiosRequestConfig = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50',
  },
  headers: {
    'x-rapidapi-key': '81fb2758c8msh6d7303361afcb32p10d588jsn43169ca614de',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
  },
};


const fetchData = async (): Promise<void> => {
  try {
    const response: AxiosResponse = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};

fetchData();
