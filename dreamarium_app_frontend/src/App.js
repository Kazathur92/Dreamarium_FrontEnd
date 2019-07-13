import React, { Component } from 'react';
import './App.css';
import AppTitle from './components/appTitle/appTitle';
import ApplicationViews from './ApplicationViews';
import Login from './components/auth/login';
import NavBar from './components/navBar/navBar';
// import FantasyRealmPage from './components/pages/fantasyRealmPage/fantasyRealmPage';

export default class App extends Component {

  state = {
    players: [],

    // NAV ICONS
    dreamWorldIcon: false,
    dreamZoneIcon: false,
    cityLifeIcon: false,
    fantasyRealmIcon: false,
    cosmicVoyageIcon: false,
    pirateSeasIcon: false,
    horrorLandIcon: false,
    icicleMountainsRealmIcon: false
  }


  componentDidMount() {

  }

  handleStateChange = (event) => {
    const stateToChange = {};
    const nameOfState = event.target.id;
    if (this.state[nameOfState] === true) {
      stateToChange[event.target.id] = false;
      this.setState(stateToChange);
    } else {
      stateToChange[event.target.id] = !this.state[nameOfState];
      let changingSelectionState = new Promise((resolve, reject) => {
        this.setState(stateToChange);
        resolve()
      });
      changingSelectionState.then(() => {

        var arrayOfStates = [
          "dreamWorldIcon",
          "dreamZoneIcon",
          "cityLifeIcon",
          "fantasyRealmIcon",
          "fantasyRealmIcon",
          "cosmicVoyageIcon",
          "pirateSeasIcon",
          "horrorLandIcon",
          "icicleMountainsRealmIcon"
        ]
        arrayOfStates.forEach(stateProperty => {
          if (stateProperty === nameOfState) {
            console.log("hi");
          } else if (stateProperty !== nameOfState) {
            stateToChange[stateProperty] = !this.state[nameOfState];
            this.setState(stateToChange);
          };
        });
      });
    }

  }

  render() {
    return (
      <React.Fragment>
        <AppTitle />
        <NavBar
          // FUNCTIONS
          handleStateChange={this.handleStateChange}

          // STATES
          dreamWorldState={this.state.dreamWorldIcon}
          dreamZoneState={this.state.dreamZoneIcon}
          cityLifeState={this.state.cityLifeIcon}
          fantasyRealmState={this.state.fantasyRealmIcon}
          cosmicVoyageState={this.state.cosmicVoyageIcon}
          horrorLandState={this.state.horrorLandIcon}
          pirateSeasState={this.state.pirateSeasIcon}

        />
        {/* <Login /> */}
        <ApplicationViews
          // FUNCTIONS
          handleStateChange={this.handleStateChange}

          // STATES
          dreamWorldState={this.state.dreamWorldIcon}
          dreamZoneState={this.state.dreamZoneIcon}
          cityLifeState={this.state.cityLifeIcon}
          fantasyRealmState={this.state.fantasyRealmIcon}
          cosmicVoyageState={this.state.cosmicVoyageIcon}
          horrorLandState={this.state.horrorLandIcon}
          pirateSeasState={this.state.pirateSeasIcon}
        />
      </React.Fragment>
    )
  }


}
