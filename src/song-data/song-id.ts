import musicApi from "NeteaseCloudMusicApi";

export const songId = {
  FallinForYa: 1299563528,
};

const main = async () => {
  const res = await musicApi.song_url({ id: 1299563528 });
  console.log(res.body.data);
};
main();
