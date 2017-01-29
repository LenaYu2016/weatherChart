import axios from 'axios';
const API_KEY="c38ef910980c42891a1e34ea3f701c7a";
export const FETCH_WEATHER='FETCH_WEATHER';
export const FETCH_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export function fetchWeather(city){
    const url=`${FETCH_URL}&q=${city},us`;
    const request=axios.get(url);
   return {
       type:FETCH_WEATHER,
       payload:request

   };
}
