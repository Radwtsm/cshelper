'use client'

import React, { useEffect, useState } from 'react'
import TipCard from '../TipCard'
import { Button, Typography } from '@mui/material'
import {Alert} from '@mui/material'
import AlertDialog from '../ResetLiked'

const Page = () => {
  const [likedTips, setLikedTips] = useState(global?.window != undefined ? JSON.parse(localStorage.getItem('cs2smokes_fav')) : [])

  function onResetFav(){
    setLikedTips([])
    global?.window != undefined ? localStorage.setItem('cs2smokes_fav',JSON.stringify([])) : null
    
    
  }

//   useEffect(,)

  return (
    <>    
    <div className='flex flex-row justify-between items-center'>
    <Typography sx={{color:'white',my:4}} variant="h5" gutterBottom>
        LIKED TRICKS
    </Typography>
    {/* <Button  variant="contained" color="error" onClick={onResetFav}>RESET FAV</Button> */}
    <AlertDialog onaccept={onResetFav}/>
    </div>
    <div className=" flex flex-col gap-5 my-2">
        {likedTips.length > 0 ? likedTips.map(el=><TipCard key={el.title} el={el}/>) : <Alert severity="info">{'Comincia ad aggiungere elementi mettendo like'}</Alert>}
        
    </div>
    </>

  )
}

export default Page