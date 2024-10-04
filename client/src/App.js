import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import User from './Components/User';
import Header from './Components/Header';
import Login from './Components/Login';
import MapContainer from './Components/Maps'; // Import your MapContainer component
import QrCodeGenerator from './Components/UpiPayments';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={User} />
        <Route path='/login' exact component={Login} />
        <Route path='/maps' exact component={MapContainer} />
        <Route path='/upi' exact component={QrCodeGenerator} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
