import React, { Component } from 'react';
import MapContainer from './MapContainer/map';
import 'leaflet/dist/leaflet.css'


class App extends Component {
  render() {
    return (
      <div>
        <MapContainer/>
      </div>
    );
  }
}

export default App;

