import React from 'react';
import YouTube from 'react-youtube';
import useFetchFunction from "../../fetch/useFetchFunction";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

const YoutubeEmbeded = ({ title }) => {

  const { data, isPending, error } = useFetchFunction(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_TOUTUBE_API}&order=relevance&type=video&part=snippet&q=${title} Official Trailer&maxResults=1`);

  return (<>
    {isPending && <LoadingComponent />}
    {error && <div>{error}</div>}
    {data && (

      <div className="grid grid-cols-12 pt-10 content-center">
        <div className=" col-span-0 lg:col-span-2" ></div>
        <div className="col-span-12  lg:col-span-8 lg:px-0 px-5">

          {data.items.map((movie) => {
            const {
              id,
            } = movie;
            return (
              <div key={id.videoId}>
                <YouTube videoId={id.videoId} className=" w-full" />
              </div>
            );
          }
          )}

        </div>
        <div className=" col-span-0 lg:col-span-2" ></div>
      </div>

    )}

  </>);
}

export default YoutubeEmbeded;