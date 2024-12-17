//Components
import FirstComponent from "./components/firstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
import Challenge from "./components/Challenge";
// Styles //CSS
import "./App.css";
import NewChallenge from "./components/NewChallenge";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
      <NewChallenge />
    </div>
  );
}

export default App;
