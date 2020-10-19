import React from "react"
import "./Card.scss"
import { CardType } from "../types/types"

interface Props {
  data: CardType
}

const Card: React.FC<Props> = (props) => {
  const {
    title,
    slogan,
    flavor,
    portionSize,
    portionSizeText,
    miceSize,
    miceSizeText,
    portionWeight,
    portionUnit,
  } = props.data

  return (
    <div className="card__container">
      <div className="card__outerCorner" />
      <div className="card card--selected">
        <div className="card__innerCorner" />
        <p className="card__slogan">{slogan}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__flavor">{flavor}</p>
        <p className="card__bodyText">
          <span className="bodyText__portionSize">{portionSize || ""}</span>
          &nbsp;
          <span className="bodyText__portionSizeText">{portionSizeText}</span>
          &nbsp;
          <span className="bodyTExt__miceSize">{miceSize || ""}</span>
          &nbsp;
          <span className="bodyText__miceSizeText">{miceSizeText}</span>
          &nbsp;
        </p>
        <div className="card__portion">
          <p className="portion__weight">{portionWeight}</p>
          <p className="portion__unit">{portionUnit}</p>
        </div>
      </div>
      <p className="bottom__text">
        Чего сидишь? Порадуй котэ,{" "}
        <a href="#" className="text__link">
          купи
        </a>
        <span className="text__period">.</span>
      </p>
    </div>
  )
}

export default Card
