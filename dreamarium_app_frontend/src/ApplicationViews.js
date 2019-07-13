import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium';
import { slideInDown, flipInX, headShake, fadeIn, flipInY } from 'react-animations'
import DreamZonePage from './components/pages/dreamZonePage/dreamZonePage';
import DreamWorldPage from './components/pages/dreamWorldPage/dreamWorldPage';
import FantasyRealmPage from './components/pages/fantasyRealmPage/fantasyRealmPage';
import CosmicVoyagePage from './components/pages/cosmicVoyagePage/cosmicVoyagePage';
import HorrorLandPage from './components/pages/horrorLandPage/horrorLandPage';
import PirateSeasPage from './components/pages/pirateSeasPage/pirateSeasPage';
import CityLifePage from './components/pages/cityLifePage/cityLifePage';
import './App.css';

// ANIMATIONS
const fadeInAnimation = {
  fadeIn: {
    animation: "1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn")
  }
}


export default class ApplicationViews extends Component {

  state = {

  }

  componentDidMount () {

  }



  render() {
    let dreamWorldPage = "";
    let dreamZonePage = "";
    let cityLifePage = "";
    let fantasyRealmPage = "";
    let cosmicVoyagePage = "";
    let pirateSeasPage = "";
    let icicleMountainsPage = "";
    let horrorLandPage = "";
    let dreamWorldState = this.props.dreamWorldState;
    let dreamZoneState = this.props.dreamZoneState;
    let cityLifeState = this.props.cityLifeState;
    let fantasyRealmState = this.props.fantasyRealmState
    let cosmicVoyageState = this.props.cosmicVoyageState;
    let pirateSeasState = this.props.pirateSeasState;
    let icicleMountainsState = this.props.icicleMountainsState;
    let horrorLandState = this.props.horrorLandState;

    // DREAMWORLD PAGE
    if ( dreamWorldState
      && dreamZoneState === false
      && cityLifeState === false
      && fantasyRealmState === false
      && cosmicVoyageState === false
      && horrorLandState === false
      && pirateSeasState === false ) {
      return (
        <StyleRoot>
          <div style={fadeInAnimation.fadeIn}>
            <DreamWorldPage />
          </div>
        </StyleRoot>
      )
    } else {
      dreamWorldPage = null;
    }

    // DREAMZONE PAGE
    if ( dreamZoneState
      && dreamWorldState === false
      && horrorLandState === false
      && cityLifeState === false
      && fantasyRealmState === false
      && cosmicVoyageState === false
      && pirateSeasState === false ) {
      return (
        <StyleRoot>
          <div style={fadeInAnimation.fadeIn}>
            <DreamZonePage />
          </div>
        </StyleRoot>
      )
    } else {
      dreamZonePage = null;
    }

    // CITY LIFE PAGE
    if ( cityLifeState
      && fantasyRealmState === false
      && horrorLandState === false
      && dreamZoneState === false
      && dreamWorldState === false
      && cosmicVoyageState === false
      && pirateSeasState === false ) {
      return (
        <StyleRoot>
          <div style={fadeInAnimation.fadeIn}>
          <CityLifePage />
          </div>
        </StyleRoot>
      )
    } else {
      cityLifePage = null;
    }

    // FANTASY REALM PAGE
    if ( fantasyRealmState
      && horrorLandState === false
      && dreamZoneState === false
      && dreamWorldState === false
      && cityLifeState === false
      && cosmicVoyageState === false
      && pirateSeasState === false
      ) {
      return (
        <StyleRoot>
          <div style={fadeInAnimation.fadeIn}>
            <FantasyRealmPage />
          </div>
        </StyleRoot>
      )
    } else {
      fantasyRealmPage = null;
    }

    // COSMIC VOYAGE PAGE
    if ( cosmicVoyageState
      && fantasyRealmState === false
      && horrorLandState === false
      && dreamZoneState === false
      && dreamWorldState === false
      && cityLifeState === false
      && pirateSeasState === false ) {
      return (
        <StyleRoot>
          <div style={fadeInAnimation.fadeIn}>
            <CosmicVoyagePage />
          </div>
        </StyleRoot>
      )
    } else {
      cosmicVoyagePage = null;
    }

    // HORROR LAND PAGE
    if ( horrorLandState
      && fantasyRealmState === false
      && dreamZoneState === false
      && dreamWorldState === false
      && cityLifeState === false
      && cosmicVoyageState === false
      && pirateSeasState === false ) {
      return (
        <StyleRoot>
          <div style={fadeInAnimation.fadeIn}>
            <HorrorLandPage />
          </div>
        </StyleRoot>
      )
    } else {
      horrorLandPage = null;
    }

    // PIRATE SEAS PAGE
    if ( pirateSeasState
      && fantasyRealmState === false
      && horrorLandState === false
      && dreamZoneState === false
      && dreamWorldState === false
      && cityLifeState === false
      && cosmicVoyageState === false ) {
      return (
        <StyleRoot>
          <div style={fadeInAnimation.fadeIn}>
            <PirateSeasPage />
          </div>
        </StyleRoot>
      )
    } else {
      pirateSeasPage = null;
    }



    return(
      <React.Fragment>
      <div className="appItself">
      {dreamWorldPage}
      {dreamZonePage}
      {cityLifePage}
      {fantasyRealmPage}
      {cosmicVoyagePage}
      {horrorLandPage}
      {pirateSeasPage}
      </div>
      </React.Fragment>
    )
  }

}

