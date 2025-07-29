import GeneralInfo from "./components/GeneralInfo";
import { Education } from "./components/Education";
import "./styles/style.css";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
    <div className="container">
      <h1>CV Application</h1>
       <GeneralInfo/>
       <Education/>
       <Experience/>
    </div>
    </>
  )
}

export default App
