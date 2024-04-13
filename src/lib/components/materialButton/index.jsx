import React from 'react'
import { Button } from '@mui/material'

const MaterialButton = ({bgColor="green"}) => {
  return (
    <Button sx={{backgroundColor:bgColor}}>Material UI Button with color prop {bgColor}</Button>
  )
}

export default MaterialButton