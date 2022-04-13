import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{ 
  background-color:rgb(48,49,53);  
  color:white;
}
`

export const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`
