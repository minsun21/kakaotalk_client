import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Main from './screens/Main';
import Friends from './screens/Friends';
import Chats from './screens/Chats';
import Find from './screens/Find';
import More from './screens/More';
import Setting from './screens/Setting';
import NavigationBar from './components/NavigationBar';
import Chat from './screens/Chat';

import { useState } from "react";

function App() {

  return (
    <Router>
      <div>
        <Header />
        <div className="main-screen">
          <Switch>
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/setting" component={Setting} />
            <Route exact path="/more" component={More} />
            <Route exact path="/find" component={Find} />
            <Route exact path="/chats" component={Chats} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/" component={Main} />
          </Switch>
        </div>
        <NavigationBar />
      </div>
    </Router>
  );
}

export default App;
