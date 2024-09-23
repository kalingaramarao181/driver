import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import User from './Components/User';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route path='/' exact component={User} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
