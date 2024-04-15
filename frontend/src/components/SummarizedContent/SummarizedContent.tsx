import React, { FC, useEffect } from "react";
import YouTube from "react-youtube";
import { History } from "../../interfaces/History";

interface ISummarizedContentProps {
  data: History | undefined
}

const SummarizedContent : FC<ISummarizedContentProps> = ({data}) => {

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="flex flex-col items-center mt-5">
      <div>
        <YouTube key={data?.videoId} opts={opts} videoId={data?.videoId} />
      </div>
      <div className="flex flex-col items-start w-[640px] mt-5">
        <p className="text-3xl">
        </p>
        <div className="mt-10">
          <p className="text-xl">Overall summary</p>
          <p>{data?.content}</p>
    </div>
      </div>
    </div>
  );
};

export default SummarizedContent;
