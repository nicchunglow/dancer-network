import React, { Component } from "react";
import "./MyMap.css";

import {
  GoogleMap,
  Marker,
  InfoWindow,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
// AIzaSyAWGAzVQOv6pPTV6tfIu5JTOudnwDidvHc  lat={1.28} lng={103.85}
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInfoBoxOpen: false
    };
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
      >
        <GoogleMap defaultZoom={15} defaultCenter={{ lat: 1.28, lng: 103.85 }} >
          <Marker defaultAnimation="Bounce" className="marker" position={{ lat: 1.28, lng: 103.85 }} onClick={() => this.setState({ isInfoBoxOpen: !this.state.isInfoBoxOpen })}>
            { this.state.isInfoBoxOpen && <InfoWindow onCloseClick={() => this.setState({ isInfoBoxOpen: false })}>
              <div>info window</div>
            </InfoWindow>}
          </Marker>
        </GoogleMap>
      </div>
    );
  }
}

const MapWithScript = withScriptjs(
  withGoogleMap(props => <MyMap {...props} />)
);

const InitiasedMap = () => (
  <MapWithScript googleMapURL="https://maps.googleapis.com/maps/api/js?key=RANDOMKEY&v=3.exp"
    loadingElement={<div style={{ height: "100%" }} />}
    containerElement={<div className="map" style={{ height: "400px", width: "100%" }} />}
    mapElement={<div style={{ height: "100%" }} />} />
);

export default InitiasedMap;
