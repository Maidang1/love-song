import { For, createEffect, createMemo, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { getPlayList } from "~/api/request";
import { PlayList } from "~/components/playlist";



const [songs, setSongs] = createStore<any[]>([])


export default function Home() {
  createEffect(async ()=>{
    const songs = await getPlayList(8290320380)
    setSongs(songs)
  })

  const playList = createMemo(()=>{
    return [{prefix:"*", children: songs.map(item => ({title: item.name, id: item.id, link:`/${item.id}`}))}]
  },[songs])
  return (
    <div class="main-body">
      <PlayList playList={playList}/>
    </div>
  );
}
