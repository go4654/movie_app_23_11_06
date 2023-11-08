import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated } from "../../api";
import { MainBanner } from "./MainBanner";
import { ShowMovie } from "./ShowMovie";
import { Layout } from "../../components/Layout";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [nowPlayingData, setNowPlayingData] = useState();
  const [topRatedData, setTopRatedData] = useState();
  const [popularData, setPopularData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results: nowPlayingData } = await nowPlaying();
        setNowPlayingData(nowPlayingData);

        const { results: topRatedData } = await topRated();
        setTopRatedData(topRatedData);

        const { results: popularData } = await popular();
        setPopularData(popularData);

        setLoading(false);
      } catch {
        console.log("error");
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div>
          {nowPlayingData && (
            <>
              <MainBanner data={nowPlayingData[0]} />
              <Layout>
                <ShowMovie title={"현재 상영 영화"} data={nowPlayingData} />
                <ShowMovie title={"인기가 높은"} data={popularData} />
                <ShowMovie title={"평점이 높은"} data={topRatedData} />
              </Layout>
            </>
          )}
        </div>
      )}
    </>
  );
};
