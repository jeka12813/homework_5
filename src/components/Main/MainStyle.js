import styled from "styled-components"
export const StyledMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`
export const CardsWrapper = styled.div`
  width: 30%;
  @media screen and (max-width: 1023px) {
    width: 49%;
  }

  @media screen and (max-width: 599px) {
    width: 90%;
  }
`
export const CardWrapper = styled.div`
  text-align: start;
  border-radius: 14px;
  overflow: hidden;
`

export const CardTitle = styled.div`
  align-items: center;
  background-color: #434343;
  padding: 20px;
  display: flex;
  font-size: 20px;

  img {
    max-width: 100px;
    display: block;
    margin-right: 10px;
  }
`
export const CardContent = styled.div`
  background-color: #28262b;
  padding: 20px;
  min-height: 200px;

  h3 {
    margin-bottom: 5px;
  }
`

export const Time = styled.div`
  margin-bottom: 5px;
  font-size: 13px;
`
