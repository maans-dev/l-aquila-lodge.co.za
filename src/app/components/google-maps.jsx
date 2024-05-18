import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default function SimpleMap(){
    const defaultProps = {
        center: {
          lat: 33.4864184,
          lng: 27.0794522
        },
        zoom: 11
      };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent
          lat={3.4864184}
          lng={27.0794522}
          text="My Marker"
        /> */}
      </GoogleMapReact>
    </div>
  );
}