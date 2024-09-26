/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

const Player = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlay = () => {
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg bg-gray-300 hover:shadow-xl transition-shadow duration-300"
      //   onMouseEnter={() => videoRef.current.play()}
      //   onMouseLeave={() => videoRef.current.pause()}
      onClick={handleVideoPlay}
    >
      <video
        ref={videoRef}
        src={video.img}
        className="w-full h-auto"
        controls={false}
        preload="metadata"
      />
      <div className="p-4">
        <h4 className="font-bold text-lg">{video.name}</h4>
        <div className="flex flex-row justify-between mt-[1rem] px-[10px]">
          <p className="text-[18px] text-black font-bold font-sans">By: {video.by}</p>
          <p className="text-sm text-gray-500">{video.time}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
