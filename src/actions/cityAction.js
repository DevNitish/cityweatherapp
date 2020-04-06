import {FETCH_CITIES} from "./type"
import axios from "axios";

// let fetchURL="https://api.openweathermap.org/data/2.5/forecast";
let fetchURL="https://www.mocky.io/v2/5e8a053a3100006800d39f64";

export const fetchCities=(q)=>dispatch=>{

  axios.get(fetchURL)
  .then(res=>{
    console.log("fetch called: ",res.data)
    dispatch({
      type:FETCH_CITIES,
      payload:res.data
    })
  }).catch(err=>{
    console.log("fetch err: ",err)

  })

}