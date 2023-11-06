import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";

export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results: nowPlayingData } = await nowPlaying();
        setNowPlayingData(nowPlayingData);
      } catch {
        console.log("error");
      }
    })();
  }, []);

  console.log(nowPlayingData);

  return <div>HOme</div>;
};
