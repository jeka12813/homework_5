import React from "react"
import { CardInner } from "./CardInner"
import {
  CardContent,
  CardsWrapper,
  CardTitle,
  CardWrapper,
  StyledMain,
  Time,
} from "./MainStyle"

export function Card({ image, title, date, time, subtitle, text }) {
  return (
    <CardWrapper>
      <CardTitle>
        <img src={image} alt="logo" />
        {title}
      </CardTitle>
      <CardContent>
        <Time>
          🌟 {date} · {time} 🌝
        </Time>
        <h3> {subtitle}</h3>
        {text}
      </CardContent>
    </CardWrapper>
  )
}

export default function Main() {
  return (
    <StyledMain>
      {CardInner.map((card, i) => (
        <CardsWrapper key={i}>
          <Card key={i} {...card} />
        </CardsWrapper>
      ))}
    </StyledMain>
  )
}
