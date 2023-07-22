import { For, createEffect, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { useParams } from "solid-start"
import { getLyrics } from "~/api/request";

interface LyricsList {
  time: string;
  originLyrics:string
  transformedLyrics:string
}

const [lyrics, setLyrics]= createStore<LyricsList[]>([])



const handleLyrics = (lyrics:string)=>{
  const regex = /^\[(\d{2}:\d{2}\.\d{3})\](.*)$/;
  const res:Record<string, string> = {}
  lyrics.split('\n').forEach(item => {
    const match = item.match(regex)
    if(!match) return
    const [_, time, lyric] = match
    if(!time || !lyric) return;
    res[time] = lyric
  })
  return res;
}

export default () => {

  const params = useParams();
  const [isLoading, setIsLoading] = createSignal<boolean>(false)
  createEffect(async ()=>{
    setIsLoading(true)
    const lyrics = await getLyrics(params.id)
    const { lyric:originLyric = '' } = lyrics?.lrc
    const {lyric:transformedLyric = ''} = lyrics?.tlyric
    const originLyricsMap = handleLyrics(originLyric)
    const transformedLyricsMap = handleLyrics(transformedLyric)

    const formatLyrics = Object.keys(originLyricsMap).map(time => (
      {
        time: time,
        originLyrics: originLyricsMap[time],
        transformedLyrics: transformedLyricsMap[time] || ''
      }
    ))
    setLyrics(formatLyrics)
    setIsLoading(false)
  })




  if(isLoading()) return <div>Loading</div>
  return (
    <div class="main-body">
      <For each={lyrics}>
        {
          (item) => {
            console.log(item, item.originLyrics, item.transformedLyrics)
            return (
              <div class="py-[0.3em]">
                <p>
                  {item.originLyrics}
                </p>
                <p>
                  {item.transformedLyrics}
                </p>
              </div>
            )
          }
        }
      </For>
    </div>
  );

}