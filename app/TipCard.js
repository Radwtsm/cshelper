"use client";

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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ShareIcon from '@mui/icons-material/Share';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import YouTube from "react-youtube";
import { Copse } from "next/font/google";
import { Skeleton } from "@mui/material";

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
  const [liked, setLiked] = React.useState(() =>
    isItLiked(el) ? true : false
  );
  const [isReady,setIsReady] = React.useState(false)

  const [isCopied,setIsCopied] = React.useState(false)

  function isItLiked(element) {
    let local = JSON.parse(localStorage?.getItem("cs2smokes_fav"));

    let result = local?.find(
      (el_json) => JSON.stringify(el_json) === JSON.stringify(element)
    );

    if (result) {
      // console.log('liked')
      return true;
    } else {
      // console.log('not liked')
      return false;
    }
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

function onVidReady(){
  setIsReady(true)
}

  function onTipLike(el) {
    // console.log('el',el)

    if (!localStorage.getItem("cs2smokes_fav")) {
      localStorage.setItem("cs2smokes_fav", JSON.stringify([]));
    } else {
      let json = JSON.parse(localStorage.getItem("cs2smokes_fav"));
      let isAlreadyPresent = false;

      json.forEach((el_json) => {
        if (JSON.stringify(el_json) === JSON.stringify(el)) {
          isAlreadyPresent = true;
        }
      });

      if (!isAlreadyPresent) {
        json.push(el);
        localStorage.setItem("cs2smokes_fav", JSON.stringify(json));
        setLiked(true);
      } else {
        let filtered = json.filter(
          (json_el) => JSON.stringify(json_el) != JSON.stringify(el)
        );
        localStorage.setItem("cs2smokes_fav", JSON.stringify(filtered));
        setLiked(false);
      }
    }
    // console.log(JSON.parse(localStorage.getItem("cs2smokes_fav")))
  }

  function getYoutubeVideoId(url) {
    const regExp =
      /^.*(?:(?:youtu.be\/|v\/|watch\?v=)|embed\/|shorts\/)(.*?)(?:\?|#|$)/;
    const match = url.match(regExp);

    return match && match[1];
  }

  function copyToClipBoard(el){

    let id = el.title.replaceAll(' ','_').replaceAll('(','_').replaceAll(')','_').toLowerCase()

    console.log('id',id)
    console.log(window.location.href)

    let url = window.location.href + '#' + id
    
    navigator.clipboard.writeText(url)

    // const shareData = {
    //   title: el.title,
    //   text: el.description,
    //   url,
    // };

    // navigator.share(shareData)

    // alert('copiato url!')
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 4000);
  }

  return (

    <Card id={el.title.replaceAll(' ','_').replaceAll('(','_').replaceAll(')','_').toLowerCase()}>
      
      <CardHeader title={el.title} sx={{ fontSize: "1px" }} />

      {el.embed_code && (
        ( <>
        <YouTube
        style={{display: isReady ? 'block' : 'none'}}
          onReady={onVidReady}
          videoId={getYoutubeVideoId(el.embed_code)}
          opts={{ height: '300px', width: "600px" }}
        />
        <Skeleton animation="wave" variant="rectangular" width={600} height={300} sx={{display: isReady ? 'none' : 'block'}} />
        </>)
      )}
            




      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {el.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={() => onTipLike(el)} aria-label="add to favorites">
          {liked === false ? <FavoriteBorderIcon /> : <FavoriteIcon />}
        </IconButton>
        {/* <IconButton onClick={()=>copyToClipBoard(el)} aria-label="add to favorites">
          <ShareIcon/>
        </IconButton> */}
      </CardActions>
    </Card>

  );
}
