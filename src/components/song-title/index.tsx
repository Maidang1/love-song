import { type songTitleType } from "../../song-data";

export const SongTitle = ({ songTitle }: { songTitle: songTitleType }) => {
  return songTitle.map((item) => {
    const { prefix, children } = item;

    return (
      <div className="flex items-start border-b border-base last:border-0">
        <div className="flex items-center h-12 w-12 text-sm op-50 text-gray-300">
          {prefix}
        </div>
        <div className="flex-1">
          {children.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className="flex items-center gap-2 h-12 border-b border-base last:border-0 hv-base"
            >
              <p>{item.title}</p>
            </a>
          ))}
        </div>
      </div>
    );
  });
};
