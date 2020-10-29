import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Main from './screens/Main';
import Friends from './screens/friends/Friends';
import Chats from './screens/Chats';
import Find from './screens/Find';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/find" component={Find} />
          <Route exact path="/chats" component={Chats} />
          <Route exact path="/friends" component={Friends} />
          <Route exact path="/" component={Main} />
        </Switch>
        <NavigationBar />
      </div>
    </Router>
  );
}

export default App;
