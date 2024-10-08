import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import User from './Components/User';
import Header from './Components/Header';
import Login from './Components/Login';
import MapContainer from './Components/Maps'; // Import your MapContainer component
import QrCodeGenerator from './Components/UpiPayments';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import DriverHomePage from './Components/DriverHome';
import Carousel from './Components/Carousel';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Carousel} />
        <Route path='/login' exact component={Login} />
        <Route path='/maps' exact component={MapContainer} />
        <Route path='/upi' exact component={QrCodeGenerator} />
        <Route path='/home' exact component={Home} />
        <Route path='/about' exact component={AboutUs} />
        <Route path='/services' exact component={Services} />
        <Route path='/driver-home' exact component={DriverHomePage} />
        <Route path='/carousel' exact component={Carousel} />
        <Route path='/admin' exact component={User} />
      </Switch>
    </BrowserRouter>  
  );
}

export default App;
