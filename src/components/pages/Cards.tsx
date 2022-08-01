import { Box, Button, ButtonGroup } from "@mui/material"
import React from "react"
import { Fragment, Key } from "react"
import CharacterCard from "../CharactersCards"
import Navbar from "../Navbar"

interface CardsProps {
  name: string
  cardsOnDisplay: any[]
  clickCounter: boolean
  newCard: (valueNewCard: any) => void
  shuffleCards: (valueShuffleCards: any) => void
}

export default function Cards(props: CardsProps) {
  return (
    <Fragment>
      <Navbar name={props.name} />

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        flexWrap="wrap"
      >
        {props.cardsOnDisplay?.map(
          (
            option: { name: string; description: string; image: string; id: number },
            index: Key
          ) => (
            <CharacterCard
              name={option.name}
              key={index}
              description={option.description}
              image={option.image}
              punctuation={option.id}
            />
          )
        )}
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        minHeight="10vh"
      >
        <ButtonGroup size="large" aria-label="large button group">
          <Button key="one" onClick={props.newCard} disabled={props.clickCounter}>
            Puxar uma nova carta
          </Button>
          <Button key="two" onClick={props.shuffleCards}>
            Embaralhar cartas
          </Button>{" "}
        </ButtonGroup>
      </Box>
    </Fragment>
  )
}
