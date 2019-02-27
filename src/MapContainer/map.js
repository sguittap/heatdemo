import React, {Component} from 'react';
import './styles.css';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import '../App.css';


const ReactHeatmap = require('react-heatmap');
const data = [{ x: 40, y: 40, value: 3}, { x: 50, y: 50, value: 2},];

export default class MapContainer extends Component{
  state = {
    //durham, NC
    data:[],
    lat: 35.9940,
    lng: -78.8986,
    zoom: 5,
  }
  
  componentDidMount(){
    this.getData();

    navigator.geolocation.getCurrentPosition((position) => {
      console.log('this is your position -->',{position})
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        zoom: 13
      })
    });
  };

  getData = () =>{
    fetch("http://localhost:3001/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map className="map" center={position} zoom={this.state.zoom}>
      <div style={{width: 1000, height: 1000}}>
        <ReactHeatmap max={1} data={data} />
      </div>
        
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            This is you!
          </Popup>
        </Marker>
      </Map>
    )
  }
}




