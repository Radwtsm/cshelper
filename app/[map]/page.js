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

const Page = ({ params }) => {
  let inputRef = useRef();

  let backup_data = useContext(TipsContext).filter(
    (el) => el.map.toLowerCase() == params.map.toLowerCase()
  );


  let [filters, setFilters] = useState({
    title: "",
    utility: "",
    side: "T",
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
      <Link href="/">{"BACK <--"}</Link>
      <Typography variant="h2" gutterBottom>
        {params.map.toUpperCase()}
      </Typography>
      <button onClick={switchSide}>SWITCH</button>
      <p className={`${filters.side === "T" ? "brown-300" : "blue-500"}`}>
        {filters.side}
      </p>
      <NadeFilter filters={filters} set={setFilters} />

      <div className="flex flex-row">
        <TextField
          value={filters.title}
          ref={inputRef}
          id="filled-basic"
          onChange={onChange}
          label="Search..."
          variant="filled"
        />
        {filters.title && (
          <Button onClick={() => setFilters({ ...filters, title: "" })}>
            x
          </Button>
        )}
      </div>
      <ul className="my-5 flex flex-col gap-5">
        {backup_data
          .filter(
            (el) =>
              el.title.toLowerCase().includes(filters.title.toLowerCase()) &&
              el.side.toLowerCase() === filters.side.toLowerCase() &&
              el.utility.includes(filters.utility)
          )
          .map((el) => (
            // <Tip key={el.title} el={el} />
            <TipCard el={el}/>
          ))}
      </ul>
    </>
  );
};

export default Page;
