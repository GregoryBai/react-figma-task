import React, { useState, useEffect } from "react"
import "./RootDir.scss"
import Card from "../components/Card"
import CardData from "../API_DATA/CardData"
import { CardType } from "../types/types"
import Loader from "../components/Loader"

const RootDir: React.FC = () => {
  const [data, setData] = useState<CardType[]>([])
  useEffect(() => {
    setTimeout(() => setData(CardData), 200)
  }, [])

  return (
    <main className="RootDir RootDir--container">
      <h2 className="RootDir__header">Ты сегодня покормил кота?</h2>
      <div className="container">
        {data.length ? (
          data.map((card, i) => <Card data={card} key={i} />)
        ) : (
          <Loader />
        )}
      </div>
    </main>
  )
}
export default RootDir
