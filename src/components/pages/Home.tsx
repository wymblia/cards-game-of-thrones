import { Box, TextField, Button, Typography } from "@mui/material"
import { Fragment } from "react"
import Navbar from "../Navbar"

interface HomeProps {
  name: string
  onClick: (valueOnClick: any) => void
  onChange: (valueOnChange: any) => void
}

export default function Home(props: HomeProps) {
  return (
    <Fragment>
      <Navbar name={props.name} />

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="92vh"
      >
        <Typography align="center" variant="h1">
          Game Of Thrones
        </Typography>
        <TextField
          id="standard-basic"
          label="Digite seu nome"
          variant="standard"
          margin="normal"
          onChange={(e) => props.onChange?.(e.target.value)}
        />

        <Button variant="outlined" onClick={props.onClick}>
          Ver cartas
        </Button>
      </Box>
    </Fragment>
  )
}
