import { Accessor, For } from "solid-js";
import { A } from "solid-start";

type songTitleType = {
  prefix: string;
  children: {
      title: string;
      link: string;
      [key:string]:string
  }[];
}[]

export const PlayList = ({ playList }: { playList: Accessor<songTitleType> }) => {
  return <For each={playList()}>
    {
      ({prefix, children})=>(
        <div class="flex items-start border-b border-base last:border-0">
        <div class="flex items-center h-12 w-12 text-sm op-50 text-gray-300">
          {prefix}
        </div>
        <div class="flex-1">
          <For each={children} fallback={<div>Loading</div>}>
            {
              (item)=> (<A href={item.link} class="flex items-center gap-2 h-12 border-b border-base last:border-0 hv-base">
                <p>{item.title}</p>
              </A>)
            }
          </For>
        </div>
      </div>
      )
    }
  </For>

};