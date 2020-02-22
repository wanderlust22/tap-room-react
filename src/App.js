import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Splash from './components/Splash';
import BeerList from './components/BeerList';
import Employees from './components/Employees';
import Error404 from './components/Error404';
import { Route, HashRouter, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterBeerList : [],
    };
    this.handleAddingBeersToMaster = this.handleAddingBeersToMaster.bind(this);
  }

  handleAddingBeersToMaster(newBeer){
    let newMasterBeerList = this.state.masterBeerList;
    newMasterBeerList.push(newBeer);
    this.setState({masterBeerList: newMasterBeerList});
  }

  render(){
    return (
      <HashRouter>
        <div>
          <Header />
          <NavBar />
            <Switch>
              <Route exact path='/' component={Splash} />
              <Route path='/customers' render={() => <BeerList beerList={this.state.masterBeerList}/>} />
              <Route path='/employees' render={() => <Employees onAddingBeersToMaster={this.handleAddingBeersToMaster}
              beerList={this.state.masterBeerList}/> } />
              <Route component={Error404} />
            </Switch>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
