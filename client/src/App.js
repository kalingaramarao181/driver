import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import MapContainer from './Components/Maps'; // Import your MapContainer component
import QrCodeGenerator from './Components/UpiPayments';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import DriverHomePage from './Components/DriverHome';
import Carousel from './Components/Carousel';
import AdminSecure from './Components/AdminSecure';
import CustomerLogin from './Components/CustomerLogin';
import Driver from './Components/Driver';
import Secure from './Components/Secure';
import Customer from './Components/Customer';
import SelectLocationDetails from './Components/SelectLocationDetails';
import Security from './Components/Security';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Carousel} />
        <Route path='/login' exact component={Login} />
        <Route path='/maps' exact component={MapContainer} />
        <Route path='/upi' exact component={QrCodeGenerator} />
        {/* <Route path='/home' exact component={Home} /> */}
        <Route path='/about' exact component={AboutUs} />
        <Route path='/services' exact component={Services} />
        <Route path='/driver-home' exact component={DriverHomePage} />
        <Route path='/home' exact component={Carousel} />
        <AdminSecure path='/driver' exact component={Driver} />
        <Secure path='/customer' exact component={Customer} />
        <Route path='/login-c' exact component={CustomerLogin} />
        <Route path='/n' exact component={SelectLocationDetails} />
        <Route path='/security' exact component={Security} />

      </Switch>
    </BrowserRouter>  
  );
}

export default App;
