import axios from 'axios'

const instance = axios.create({
    baseURL:"https://tinder-backendup.herokuapp.com/",
 });
  
 export default instance;