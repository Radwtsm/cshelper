"use client";

import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { createContext, useContext } from "react";

// import { useContext } from 'react';
import { TipsContext } from "../TipsContext";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { blue, orange } from "@mui/material/colors";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import NadeFilter from "../NadeFilter";
import Link from "next/link";
import Tip from "../Tip";
import TipCard from "../TipCard";
import { AccountCircle, Cancel } from "@mui/icons-material";
import CancelIcon from '@mui/icons-material/Cancel';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GoTopBtn from "../goTopBtn";
import { InputAdornment } from "@mui/material";
import { useMemo } from "react";

import {Alert} from "@mui/material";



const Page = ({ params }) => {
  let inputRef = useRef();

  let backup_data = useContext(TipsContext).filter(
    (el) => el.map.toLowerCase() == params.map.toLowerCase()
  );
  

  let [filters, setFilters] = useState({
    title: "",
    utility: "",
    side: "",
  });

  function switchSide() {
    let side;

    if (filters.side === "T") {
      side = "CT";
    } else {
      side = "T";
    }

    setFilters({ ...filters, side });
  }

  function onChange(e) {
    // const title = e.target.value;
    setFilters({ ...filters, title:e.target.value });
  }

  // ...



const tipCards = useMemo(() => {
  return backup_data
    .filter(
      (el) =>
        el.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        el.utility.includes(filters.utility)
    )
    .map((el) => <TipCard key={el.title} el={el} />);
}, [backup_data, filters]);


  


  return (
    <>
      <div className="flex flex-col items-center justify-around ">
      
      <Typography sx={{color:'white',my:4}} variant="h5" gutterBottom>
        {params.map.toUpperCase()}
      </Typography>
      </div>

      <div className="flex flex-row items-center justify-around gap-2">
      
      <GoTopBtn/>
      <div className="flex flex-row">
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <TextField
          
          value={filters.title}
          ref={inputRef}
          id="filled-basic"
          onChange={onChange}
          label="Search..."
          // variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CancelIcon onClick={() => setFilters({ ...filters, title: "" })} sx={{ color: 'action.active', mr: 1, my: 0.5, visibility: filters.title ? 'visible' : 'hidden' }} />
              </InputAdornment>
            ),
          }}
          sx={{width: '100%'}}
        />

      </Box>
      </div>
      <NadeFilter filters={filters} set={setFilters} />
      </div>
      <div className=" flex flex-col gap-5 my-2">
          {/* prende tutti i tips associati alla mappa + filtrati */}
          {tipCards.length > 0 ? tipCards : <Alert severity="error">{'Non è stato trovato nessun elemento'}</Alert>}

      </div>
      

    </>
  );
};

export default Page;
