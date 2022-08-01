import {
  Box,
  Button,
  createTheme,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  FormControlLabel
} from "@mui/material"
import React, { useContext } from "react"
import { Fragment, Key, useState } from "react"
import { CardContext } from "../context/CardContext"
import MenuIcon from "@mui/icons-material/Menu"

interface NavbarProps {
  name?: string
  title?: string
}

export default function Home(props: NavbarProps) {
  const { stepTwoVisible } = useContext(CardContext)

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Box display="flex" justifyContent="space-between" flexDirection="row" minHeight="8vh">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
            {stepTwoVisible ? <Button color="inherit">{props.name}</Button> : null}
          </Box>
        </AppBar>
      </Box>
    </Fragment>
  )
}
