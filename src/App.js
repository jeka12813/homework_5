import "./App.css"
import { Global, Wrapper } from "./AppStyle"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"

function App() {
  return (
    <div className="App">
      <Global />
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  )
}

export default App
