import React from "react";
import YouTube from "react-youtube";

const SummarizedContent = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <div className="flex flex-col items-center mt-5">
      <div>
        <YouTube opts={opts} videoId="2g811Eo7K8U" />
      </div>
      <div className="flex flex-col items-start w-[640px] mt-5">
        <p className="text-3xl">
          My Biggest Studying Mistake - The Feynman Technique{" "}
        </p>
        <div className="mt-10">
          <p className="text-xl">Overall summary</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto quia inventore temporibus atque reprehenderit, ipsa blanditiis dolor dolores repudiandae corporis, aut eius. Dolorum nobis consectetur, maiores et quam placeat.</p>

          <p className="mt-5 text-lg">00:00-05:00</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic id, nobis earum illum sunt culpa eos dolorum suscipit quas quia cumque praesentium similique veniam odio consectetur accusamus, ducimus, est ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam nam nihil ducimus illo, dolor odio alias necessitatibus inventore autem, obcaecati voluptate a. Architecto dolorum, aliquid iusto deserunt aut eaque?</p>
        </div>
      </div>
    </div>
  );
};

export default SummarizedContent;
