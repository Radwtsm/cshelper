'use client'

import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { createContext, useContext } from 'react'

// import { useContext } from 'react';
import {TipsContext} from "../TipsContext"
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { blue, orange } from '@mui/material/colors';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import NadeFilter from '../NadeFilter';
import Link from 'next/link';

const page = () => {
    let inputRef = useRef()

    let backup_data = useContext(TipsContext).filter((el)=>el.map == 'mirage')

    let [filtered,setFiltered] = useState(backup_data)

    let [filters, setFilters] = useState({
        title:'',
        utility:'',
        side:'T',

    })


    function switchSide(){
        let side;

        if (filters.side === 'T') {
             side = 'CT'
        } else {
            side = 'T'
        }
        
        setFilters({...filters, side})
    }

    function onChange (e) {
        const title = e.target.value
        setFilters({...filters, title})
    }

    // function resetNades(){
    //     setFilters({...filters, utility:''})

    // }

    return (
        <>  
        <Link href="/">{'BACK <--'}</Link>
            <Typography variant="h2" gutterBottom>
       MIRAGE
         </Typography>
            <button onClick={switchSide}>SWITCH</button>
            <p>{filters.side}</p>
            <NadeFilter filters={filters} set={setFilters}/>
            {/* <Button onClick={}>x</Button> */}

            <TextField value={filters.title} ref={inputRef} id="filled-basic" onChange={onChange} label="Search..." variant="filled" />
            <Button onClick={()=>setFilters({...filters,title:''})}>x</Button>
            <ul className='my-5'>
            {backup_data.filter(el=> el.title.toLowerCase().includes(filters.title.toLowerCase()) && el.side.toLowerCase() === filters.side.toLowerCase() && el.utility.includes(filters.utility)).map(el=><li key={el.title}><Box  component="section" sx={{ p: 2, border: '1px dashed grey' }}><h3>{el.title}</h3></Box></li>)}
            </ul>
        </>
    )

    
}

export default page;