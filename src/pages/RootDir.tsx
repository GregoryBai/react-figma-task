import React, { useState, useEffect, useRef } from "react"
import "./RootDir.scss"
import Card from "../components/Card"
import CardData from "../API_DATA/CardData"
import { CardType } from "../types/types"
import Loader from "../components/Loader"

const RootDir: React.FC = () => {
  const [data, setData] = useState<CardType[]>([])

  useEffect(() => {
    // * API-call imitation
    setTimeout(
      () =>
        setData(
          CardData.map((card, i) => ({
            ...card,
            cardClass: "card--default",
            id: i,
          }))
        ),
      2000
    )
  }, [])

  const handleSelect = (id: number, mode: "select" | "deselect"): void => {
    setData((prev) =>
      prev.map((card) => {
        if (card.id === id) {
          console.log(card)
          if (card.cardClass === "card--default" && mode === "select") {
            card.cardClass = "card--selected"
          } else if (
            card.cardClass === "card--selected" &&
            mode === "deselect"
          ) {
            card.cardClass = "card--default"
          }
        }
        return card
      })
    )
  }

  return (
    <main className="RootDir RootDir--container">
      <h2 className="RootDir__header">Ты сегодня покормил кота?</h2>
      <div className="container">
        {data.length ? (
          data.map((card) => (
            <Card
              handleSelect={handleSelect}
              data={card}
              key={card.id + card.flavor}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </main>
  )
}

export default RootDir
