// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Index from './Components/Pages/Index';
import IndexV2 from './Components/Pages/IndexV2';
import GWC from './Components/Pages/GWC';
import Events from './Components/Pages/Events';
import Officers from './Components/Pages/Officers';
import Contact from './Components/Pages/Contact';
import './App.css';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/indexV2' component={IndexV2} />
          <Route path='/girls-who-code' component={GWC} />
          <Route path='/events' component={Events} />
          <Route path='/officers' component={Officers} />
          <Route path='/contact-us' component={Contact} />
        </Switch>
      </Router>
  );
}

export default App;
