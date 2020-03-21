/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "./MyMap.css";
import DanceEventInfo from "../utils/DanceEventInfo";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";

class NewMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInfoBoxOpen: false,
      myEvent: props.boo,
    };
  }

  render() {
    const event = this.state.myEvent;
    return (
      <Marker
        className="marker"
        position={{ lat: event.Latitude, lng: event.Longitude }}
        onClick={() => this.setState({ isInfoBoxOpen: true })}>

        { this.state.isInfoBoxOpen &&
              <InfoWindow onCloseClick={() => this.setState({ isInfoBoxOpen: false })}>
                <h4>Event name : {event.eventName}
                Dance Style : {event.danceStyle}
                Date : {event.date}
                Country : {event.country}
                </h4>
              </InfoWindow>}
      </Marker>

    );
  }
}
class MyMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>
        <GoogleMap
          defaultZoom={3}
          defaultCenter={{ lat: 1.28, lng: 103.85 }} >
          {DanceEventInfo.map((event) =>
            <NewMarker
              key={event.id}
              boo={event}>

            </NewMarker>
          )}
        </GoogleMap>
      </div>
    );
  }
}

const MapWithScript = withScriptjs(
  withGoogleMap(props => <MyMap {...props} />)
);

const InitiasedMap = () => (
  <MapWithScript googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_SECRET}`}
    loadingElement={<div style={{ height: "100%" }} />}
    containerElement={<div className="map"/>}
    mapElement={<div style={{ height: "100%" }} />} />
);

export default InitiasedMap;
