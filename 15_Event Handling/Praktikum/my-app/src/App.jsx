import { useEffect } from "react"
import Body from "./components/body"
import Navbar from "./components/navbar"
import Title from "./components/title"
import Table from "./components/table"
function App() {

  return (
    <div className="App">

      <Navbar />
      <Title />
      <Body />
      <Table />
    </div>
  )
}

export default App
