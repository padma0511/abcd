import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import "../floating/floating.css"
export default function FloatingActionButtons() {
  return (
    <Box sx={{ position: 'fixed', top: '45%', left: '20px', zIndex: '1000' }}>
      <div className='whatsappicon'>
        <div className='icon6'>
        
      <FontAwesomeIcon icon={faWhatsapp} className='whatsapp' />
      </div>
      </div>
      
      
    </Box>
  );
}