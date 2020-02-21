import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Splash from './components/Splash';
import Customers from './components/Customers';
import Employees from './components/Employees';
import { Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        <NavBar />
          <div>
            <Route exact path='/' component={Splash} />
            <Route path='/customers' component={Customers} />
            <Route path='/employees' component={Employees} />
          </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
