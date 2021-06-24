import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';


import 'mapbox-gl/dist/mapbox-gl.css';

// import mapboxgl from 'mapbox-gl';
const mapboxgl = require('mapbox-gl');


declare var require: any
// import * as mapboxgl from 'mapbox-gl';

// import { Map } from "mapbox-gl/dist/mapbox-gl"
// import * as mapboxgl from "mapbox-gl/dist/mapbox-gl"


@Component({
  selector: 'app-map-sample',
  templateUrl: './map-sample.component.html',
  styleUrls: ['./map-sample.component.scss']
})
export class MapSampleComponent implements OnInit {

  // map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;
  
  constructor() { }

  ngOnInit(): void {

    // mapboxgl.accessToken = environment.mapbox.accessToken;
    mapboxgl.accessToken = 'pk.eyJ1IjoiaW12aW5jZW50IiwiYSI6ImNrcWI2ejdqZzBnZzYybnQ5anR0YmVzNHUifQ.WlcjU8wkH_k-eEw7DeqoOA';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
    // Add map controls
    // this.map.addControl(new mapboxgl.NavigationControl());
  }

}
