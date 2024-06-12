// 'use client'

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { useCookies } from 'next-client-cookies';

import YouTube from "react-youtube";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function TipCard({ el }) {
  const [expanded, setExpanded] = React.useState(false);
  // const [liked,setLiked] = React.useState(()=> isItLiked(el) ? true : false)
  

  function isItLiked(element) {

  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function onTipLike(el) {

  }

  function getYoutubeVideoId(url) {
    const regExp =
      /^.*(?:(?:youtu.be\/|v\/|watch\?v=)|embed\/|shorts\/)(.*?)(?:\?|#|$)/;
    const match = url.match(regExp);

    return match && match[1];
  }

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const storage = localStorage.getItem("preferiti");
      if (storage) {
        const preferiti = JSON.parse(storage);
        console.log(preferiti)
        // init(preferiti);
      } else {
        localStorage.setItem("preferiti",JSON.stringify([]));
        console.log([])
      }
    }
  }, []);

  return (
    <Card>
      <CardHeader title={el.title} sx={{ fontSize: "1px" }} />

      {el.embed_code && (
        <YouTube
          videoId={getYoutubeVideoId(el.embed_code)}
          opts={{ height: "100%", width: "100%" }}
        />
      )}

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {el.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton onClick={()=> onTipLike(el)} aria-label="add to favorites"> */}
        {/* {liked === false ? <FavoriteBorderIcon/> : <FavoriteIcon />}  */}
        {/* </IconButton> */}
       
      </CardActions>
    </Card>
  );
}
