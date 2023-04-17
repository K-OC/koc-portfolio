import React from "react";
import styled from "styled-components";

const VideoWrapper = styled.div`
  overflow: hidden;
  padding-bottom: 50%;
  position: relative;
  
  height: 0;
  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;
const VidEmbed = ({ embedId }) => {
  return (
    <VideoWrapper className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </VideoWrapper>
  );
};

export default VidEmbed;
