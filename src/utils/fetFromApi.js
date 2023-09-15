import axios from "axios"
const BaseUrl="https://youtube-v31.p.rapidapi.com"
const options = {
    url:BaseUrl,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key':import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
export const fetchFromAPI = async(url)=>{
    const searchUrl=`${BaseUrl}/${url}`;
    const {data}=await axios.get(searchUrl,options)
    return data
}