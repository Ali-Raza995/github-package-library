import React from 'react'
import { Box , Typography} from '@mui/material';

const ButtonComponent = ({btnText="Ali ka button", bgColor ="red", textColor="white"}) => {
  return (
    <Box display="flex" flexDirection="column" gap="30px"  alignItems="center">
    <button sx={{backgroundColor:bgColor, color:textColor}}>Simple button UI Button with color prop {bgColor} and btn text {btnText}</button>
    <Typography >Hello fro typography</Typography>
    <p>Component testing</p>
    </Box>

  )
}

export default ButtonComponent