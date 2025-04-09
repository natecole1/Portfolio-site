import React from 'react'

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 object-contain bg-[#000]">
      <video
        src="https://uploads-ssl.webflow.com/65b7bac85c1092089d510616/65b8c737f3618d8dd99da139_VIDEO%20HOME%20(DSK)-transcode.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default VideoBackground