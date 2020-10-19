import React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import RootDir from "./pages/RootDir"
import "./App.scss"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={RootDir} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
