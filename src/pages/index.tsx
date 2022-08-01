import React, { Fragment, useContext, useEffect, useState } from "react"
import axios from "axios"
import { CardContext } from "../context/CardContext"
import Home from "../components/pages/Home"
import Cards from "../components/pages/Cards"
import { Alert, Stack } from "@mui/material"
import Swal from "sweetalert2"

export default function App() {
  const { name, setName, stepOneVisible, displayStep2 } = useContext(CardContext)
  const [charactersList, setCharactersList] = React.useState<any[]>([])
  const [cardsOnDisplay, setCardsOnDisplay] = React.useState<any[]>([])
  const [clickCounter, setClickCounter] = useState(0)

  useEffect(() => {
    axios.get(`https://thronesapi.com/api/v2/Characters`).then((response) => {
      const { data } = response
      setCharactersList(data)
    })
  }, [])

  const getRandom = (charactersList: any[], shuffledCharactersList: number) =>
    charactersList
      .slice()
      .sort(() => 0.5 - Math.random())
      .slice(0, shuffledCharactersList)

  function addCards(charactersList: any[], number: number) {
    getRandom(charactersList, number).map((character) => {
      setCardsOnDisplay((cardsOnDisplay) => [
        ...cardsOnDisplay,
        {
          name: character.firstName + " " + character.lastName,
          description: character.title,
          image: character.imageUrl,
          id: Math.floor(Math.random() * character.lastName.length)
        }
      ])
    })
  }

  function nextPage() {
    name
      ? (addCards(charactersList, 5), displayStep2())
      : Swal.fire({
          title: "Digite seu nome!",
          text: "Por favor, digite seu nome para poder ver as cartas.",
          confirmButtonText: "Ok",
          icon: "warning"
        })
  }

  function newCard() {
    setClickCounter(clickCounter + 1)
    addCards(charactersList, 1)
  }

  function shuffleCards() {
    setCardsOnDisplay(getRandom(cardsOnDisplay, cardsOnDisplay.length))
  }

  return stepOneVisible ? (
    <Home onChange={setName} onClick={nextPage} name={name} />
  ) : (
    <Cards
      name={name}
      cardsOnDisplay={cardsOnDisplay}
      clickCounter={clickCounter > 2}
      newCard={newCard}
      shuffleCards={shuffleCards}
    />
  )
}
