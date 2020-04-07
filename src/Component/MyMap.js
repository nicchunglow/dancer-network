
import React, { Component } from "react";
import "./MyMap.css";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";
import instance from "../utils/axios";

class NewMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInfoBoxOpen: false,
      myEvent: props.boo,
      coordinates: props.coordinates,
    };
  }

  render() {
    const event = this.state.myEvent;
    return (
      <Marker
        className="marker"
        position={{ lat: event.coordinates.lat, lng: event.coordinates.lng }}
        onClick={() => this.setState({ isInfoBoxOpen: true })}
      >
        {this.state.isInfoBoxOpen && (
          <InfoWindow
            onCloseClick={() => this.setState({ isInfoBoxOpen: false })}
          >
            <div className="marker-text">
              <h4>Event Name : {event.eventName}</h4>
              <h5>Event Date : {event.eventStartDate}</h5>
              <p>Dance Style : {event.danceStyle}</p>
              <p>Address : {event.address}</p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}
class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDanceEvents: [],
    };
  }

  componentDidMount() {
    instance.get("https://dancer-network.herokuapp.com/events").then((res) => {
      this.setState({
        allDanceEvents: res.data,
      });
    });
  }
  render() {
    return (
      <div>
        <GoogleMap defaultZoom={11} defaultCenter={{ lat: 1.35, lng: 103.85 }}>
          {this.state.allDanceEvents.map((event) => (
            <NewMarker
              coordinates={event.coordinates}
              key={event.eventName}
              boo={event}
            ></NewMarker>
          ))}
        </GoogleMap>
      </div>
    );
  }
}

const MapWithScript = withScriptjs(
  withGoogleMap((props) => <MyMap {...props} />)
);

const InitiasedMap = () => (
  <MapWithScript
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_SECRET}`}
    loadingElement={<div style={{ height: "100%" }} />}
    containerElement={<div className="map" />}
    mapElement={<div style={{ height: "100%" }} />}
  />
);

export default InitiasedMap;
