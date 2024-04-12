import React from 'react'
import { Box, Button , Typography} from '@mui/material';

const ButtonComponent = ({btnText="Ali ka button", bgColor ="red", textColor="white"}) => {
  return (
    <Box display="flex" flexDirection="column" gap="30px"  alignItems="center">
    <Button sx={{backgroundColor:bgColor, color:textColor}}>Material UI Button with color prop {bgColor} and btn text {btnText}</Button>
    <Typography >Hello fro typography</Typography>
    <p>Component testing</p>
    </Box>

  )
}

export default ButtonComponent