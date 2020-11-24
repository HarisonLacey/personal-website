import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./Views/Landing"

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Landing} exact />
      </Switch>
    </div>
  );
}

export default App;
