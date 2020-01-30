import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MyMap extends Component {
  static defaultProps = {
    center: {
      lat: 1.28,
      lng: 103.84,
    },
    zoom: 15,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        style={{
          height: "100vh",
          width: "45%",
          margin: "25px",
          float: "right",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "randomKey",
            language: "en",
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
        >
          <AnyReactComponent lat={1.28} lng={103.85} text="here" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MyMap;
