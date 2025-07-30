import GeneralInfo from "./components/GeneralInfo";
import { Education } from "./components/Education";
import "./styles/style.css";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
     <h1>CV Application</h1>
    <div className="container">
      <div className="app">
        <GeneralInfo/>
        <Education/>
        <Experience/>
      </div>
    </div>
    </>
  )
}

export default App
