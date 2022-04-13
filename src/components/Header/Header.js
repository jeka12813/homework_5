import React from "react"
import {
  StyledHeader,
  StyledHeaderBottom,
  StyledHeaderTop,
  SubtitleItem,
} from "./HeaderStyle"
import { Subtitle } from "./Subtitle"

export function HeaderTop() {
  return (
    <StyledHeaderTop>
      <h1>Fronted stuff</h1>
      <p>Различные руководства и знания по веб-разработке</p>
    </StyledHeaderTop>
  )
}

export function HeaderBottom() {
  return (
    <StyledHeaderBottom>
      {Subtitle.map(({ img, text }) => (
        <SubtitleItem key={text}>
          <img src={img} alt="img" />
          {text}
        </SubtitleItem>
      ))}
    </StyledHeaderBottom>
  )
}

export default function Header() {
  return (
    <StyledHeader>
      <HeaderTop />
      <HeaderBottom />
    </StyledHeader>
  )
}
