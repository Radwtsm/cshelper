import React from 'react'
import { Button } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


export default function NadeFilter({filters, set}) {
  const [value, setValue] = React.useState('');

  const handleChange = (event, newAlignment) => {
    if (!newAlignment) {
      set({...filters, utility:''})
      setValue('')
    } else {
      setValue(newAlignment);

      set({...filters,utility:newAlignment})
    }


    // console.log(newAlignment)
  };

  function resetNades(){
    set({...filters, utility:''})
    setValue('')
  }

  return (
    
    <ToggleButtonGroup
      color="primary"
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      className='my-5 flex flex-row'
    >
      <div>
      <ToggleButton value="smoke">Smoke</ToggleButton>
      <ToggleButton value="flash">Flash</ToggleButton>
      <ToggleButton value="he">HE</ToggleButton>
      </div>
      {value && <Button variant='outlined' onClick={resetNades}>x</Button>}
      
    </ToggleButtonGroup>
  );
}