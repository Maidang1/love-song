import { instance } from "./axios"


export const getPlayList = async (id: number) => {

  const response = await instance.get(`/playlist/track/all?id=${id}`)
  return response.data.songs
}

export const getLyrics = async (id: string) => {
  const response = await instance.get(`/lyric?id=${id}`)
  return response.data
}