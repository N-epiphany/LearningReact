// App.js
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/welcome";
import Hello from "./components/Hello";
function App() {
  return (
    <div className="App">
      {/* <Greet></Greet> // if there is nothing in between the component then close it as self closing tag */}
      {/* <Greet />
      <Welcome /> */}
      {/* <Hello /> */}
      <Greet name="Bruce" heroname="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroname="SuperMan">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroname="Wonder Women" />

      <Welcome name="Clark" heroname="SuperMan" />
    </div>
  );
}

export default App;
