'use client'

import React, { useEffect, useState } from 'react'
import TipCard from '../TipCard'
import { Button, Typography } from '@mui/material'

const Page = () => {
  const [likedTips, setLikedTips] = useState(global?.window != undefined ? JSON.parse(localStorage.getItem('cs2smokes_fav')) : [])

  function onResetFav(){
    setLikedTips([])
    global?.window != undefined ? localStorage.setItem('cs2smokes_fav',JSON.stringify([])) : null
    
    
  }

//   useEffect(,)

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

export default Page