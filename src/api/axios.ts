import axios from "axios";


export const instance = axios.create({
  baseURL: "https://netease-cloud-music-api-iota-weld.vercel.app"
})