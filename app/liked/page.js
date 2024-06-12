'use client'

import React, { useState } from 'react'
import TipCard from '../TipCard'
import { Button, Typography } from '@mui/material'

const page = () => {
  const [likedTips, setLikedTips] = useState(JSON.parse(localStorage.getItem('cs2smokes_fav')))

  function onResetFav(){
    setLikedTips([])
    localStorage.setItem('cs2smokes_fav',JSON.stringify([]))
    
  }

  return (
    <>    
    <Typography sx={{color:'white',my:4}} variant="h5" gutterBottom>
        LIKED TRICKS
      </Typography>
    <div className=" flex flex-col gap-5 my-2">
        {likedTips.length > 0 ? likedTips.map(el=><TipCard key={el.title} el={el}/>) : <p>No elements</p>}
        <Button variant="outlined" onClick={onResetFav}>RESET FAV</Button>
    </div>
    </>

  )
}

export default page