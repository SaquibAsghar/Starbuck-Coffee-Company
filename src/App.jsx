import starbuckLogo from "./assets/starbuck_logo.svg";
import './App.css'

function App() {

  return (
    <>
      <img src={starbuckLogo} width={200} />
      <h1 className="text-3xl font-bold flex justify-center">
        Starbucks Landing Page
      </h1>
    </>
  )
}

export default App
