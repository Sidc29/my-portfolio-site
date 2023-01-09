import React from 'react';
import { Box } from "@mui/material";

export default function Toggler({ darkMode, handleClick }) {
   // const transition = 'all 250ms ease'

   return (
      <Box fontSize={'1.5rem'} sx={{ cursor: 'pointer' }}>
         {
            darkMode ?
               <span onClick={handleClick} aria-label="Full Moon" role="img"><i class="fa-solid fa-sun"></i></span>
               :
               <span onClick={handleClick} aria-label="New Moon" role="img"><i class="fa-solid fa-moon"></i></span>
         }
      </Box>
   )
}