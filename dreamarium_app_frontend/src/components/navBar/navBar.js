import React, { Component } from 'react';
import './navBar.css'



export default class NavBar extends Component {

  state = {
    fantasyRealmIcon: false
  }

  componentDidMount () {

  }



  render() {
    return(
      <React.Fragment>
      <div className="navBarDiv">
        <nav>
          <div className="sideBarIconsDiv">
          <span>
          <i id="dreamWorldIcon" className="dreamWorldIcon fas fa-globe-americas" onClick={ (event) => {this.props.handleStateChange(event)}} ></i>
          </span>
          <span>
          <i id="dreamZoneIcon" className="dreamZoneIcon fas fa-tree" onClick={ (event) => {this.props.handleStateChange(event)}} ></i>
          </span>
          <span>
          <i id="cityLifeIcon" className="cityLifeIcon fas fa-building" onClick={ (event) => {this.props.handleStateChange(event)}} ></i>
          </span>
          <span>
          <i id="fantasyRealmIcon" className="fantasyRealmIcon fas fa-chess-rook" onClick={ (event) => {this.props.handleStateChange(event)}} ></i>
          </span>
          <span>
          <i id="horrorLandIcon" className="horrorLandIcon fas fa-ghost" onClick={ (event) => {this.props.handleStateChange(event)}} ></i>
          </span>
          <span>
          <i id="cosmicVoyageIcon" className="cosmicVoyageIcon fas fa-user-astronaut" onClick={ (event) => {this.props.handleStateChange(event)}} ></i>
          </span>
          <span>
          <i id="pirateSeasIcon" className="pirateSeasIcon fas fa-anchor" onClick={ (event) => {this.props.handleStateChange(event)}} ></i>
          </span>
          <span>
          <i id="icicleMountainsIcon" className="icicleMountainsIcon fas fa-snowflake" onClick={ (event) => {this.props.handleStateChange(event)}} ></i>
          </span>
          <span>
          <i id="smolderVolcanoIcon" className="smolderVolcanoIcon fas fa-burn" onClick={ (event) => {this.props.handleStateChange(event)}} ></i>
          </span>
          <span>
          <i id="westernCanyonsIcon" className="westernCanyonsIcon fas fa-campground" onClick={ (event) => {this.props.handleStateChange(event)}} ></i>
          </span>
          <span>
          <i id="pharaoglyphicTombsIcon" className="pharaoglyphicTombsIcon fas fa-ankh" onClick={ (event) => {this.props.handleStateChange(event)}} ></i>
          </span>
          <span>
          <i id="abyssIcon" className="abyssIcon fas fa-fish" onClick={ (event) => {this.props.handleStateChange(event)}} ></i>
          </span>
          <span>
          <i id="afterworldIcon" className="afterworldIcon fas fa-gopuram" onClick={ (event) => {this.props.handleStateChange(event)}} ></i>
          </span>
          </div>
        </nav>


        {/* <span className="icon Icons">
                            <i className="fas fa-ankh IconTimes"></i>
                            <i className="fas fa-skull-crossbones IconTimes"></i>
                            <i className="fas fa-snowflake IconTimes"></i>
                            <i className="fas fa-burn IconTimes"></i>
                            <i className="fas fa-dharmachakra IconTimes"></i>
                            <i className="fas fa-fish IconTimes"></i>
                            <i className="fas fa-campground IconTimes"></i>
                        </span> */}

      </div>
      </React.Fragment>
    )
  }

}