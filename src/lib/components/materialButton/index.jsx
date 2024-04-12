import React from 'react'
import { Button } from '@mui/material'

const MaterialButton = ({bgColor="green"}) => {
  return (
    <Button sx={{backgroundClip:bgColor}}>MaterialButton</Button>
  )
}

export default MaterialButton