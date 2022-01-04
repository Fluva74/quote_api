
import Home from "./components/Home.jsx"
import Warning from "./components/Warning.jsx"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
 
  return (
    <Router>
      <div className="pages">
        <Switch>
          <Route exact path="/">
            <Warning />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
      </div>
     
    </Router>
    
  );
}

export default App;
