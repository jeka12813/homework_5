import styled from "styled-components"

export const StyledHeader = styled.div`
  margin: 10px 0 80px 0;
  border-radius: 14px;
  overflow: hidden;
`

export const StyledHeaderTop = styled.div`
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    10deg,
    rgba(104, 44, 140, 1) 30%,
    rgba(144, 40, 133, 1) 50%,
    rgba(196, 34, 127, 1) 100%
  );
`
export const StyledHeaderBottom = styled.div`
  background-color: #28262b;
  padding: 10px 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
export const SubtitleItem = styled.div`
margin 5px;
padding: 3px 15px;
border-radius:14px;
font-size:14px;
  background-color: #35354f;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 15px;
    margin-right: 10px;
  }
`
