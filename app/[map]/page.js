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

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GoTopBtn from "../goTopBtn";

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
    const title = e.target.value;
    setFilters({ ...filters, title });
  }

  return (
    <>
      <div className="flex flex-col items-center justify-around ">
      
      <Typography sx={{color:'white',my:4}} variant="h5" gutterBottom>
        {params.map.toUpperCase()}
      </Typography>
      </div>

      <NadeFilter filters={filters} set={setFilters} />
      <GoTopBtn/>
      <div className="flex flex-row">
        <TextField
          value={filters.title}
          ref={inputRef}
          id="filled-basic"
          onChange={onChange}
          label="Search..."
          variant="filled"
          sx={{width: '100%'}}
        />
        {filters.title && (
          <Button variant="outlined" onClick={() => setFilters({ ...filters, title: "" })}>
            x
          </Button>
        )}
      </div>
      <div className=" flex flex-col gap-5 my-2">

          {
            backup_data.length > 0 ? backup_data
            .filter(
              (el) =>
                el.title.toLowerCase().includes(filters.title.toLowerCase()) &&
                el.utility.includes(filters.utility)
            )
            .map((el) => (
              <TipCard key={el.title} el={el}/>
            )) : <p>No elements</p>
          }
      </div>
      

    </>
  );
};

export default Page;
