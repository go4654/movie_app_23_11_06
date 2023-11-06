import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import styled from "styled-components";
import { MainBanner } from "./MainBanner";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [nowPlayingData, setNowPlayingData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results: nowPlayingData } = await nowPlaying();
        setNowPlayingData(nowPlayingData);

        setLoading(false);
      } catch {
        console.log("error");
      }
    })();
  }, []);

  console.log(nowPlayingData);

  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div>
          {nowPlayingData && (
            <>
              <MainBanner data={nowPlayingData[0]} />
            </>
          )}
        </div>
      )}
    </>
  );
};
