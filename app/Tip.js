import React from "react";
import Box from "@mui/material/Box";
import YouTube from "react-youtube";

const Tip = ({ el }) => {

  function getYoutubeVideoId(url) {
    const regExp = /^.*(?:(?:youtu.be\/|v\/|watch\?v=)|embed\/|shorts\/)(.*?)(?:\?|#|$)/;
    const match = url.match(regExp);
  
    return match && match[1];
  }

  const playerOpts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  }

  return (
    
      <Box key={el.title} component="section" sx={{ p: 2, border: "1px dashed grey", height: '40vw' }}>
        <h3>{el.title}</h3>
        {el.embed_code && <YouTube  videoId={getYoutubeVideoId(el.embed_code)} opts={{height:'100%',width:'100%',}}/>}
      </Box>
   
  );
};

export default Tip;
