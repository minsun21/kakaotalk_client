import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './header/Header';
import Main from './main/Main';
import Friends from './friends/Friends';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/friends" component={Friends} />
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
