import "./App.css";
import VendingMachine from "./VendingMachine";
import { BrowserRouter, Route } from "react-router-dom";
import Cheese from "./routes/Cheese";
import Soda from "./routes/Soda";
import Banana from "./routes/Banana";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/banana">
          <Banana />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/cheese">
          <Cheese />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
