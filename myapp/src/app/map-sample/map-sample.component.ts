import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';

// mapbox requirements
import 'mapbox-gl/dist/mapbox-gl.css';
// import mapboxgl from 'mapbox-gl';
const mapboxgl = require('mapbox-gl');
// not quite sure why this fixes it but...
declare var require: any;


@Component({
  selector: 'app-map-sample',
  templateUrl: './map-sample.component.html',
  styleUrls: ['./map-sample.component.scss']
})
export class MapSampleComponent implements OnInit {

  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 49.25;
  lng = -123.06;
  
  constructor() { }

  ngOnInit(): void {

    mapboxgl.accessToken = environment.mapbox.accessToken;
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: this.style, // style URL
      center: [this.lng, this.lat], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
    // Add map controls
    map.addControl(new mapboxgl.NavigationControl());

    // Set options
    var marker = new mapboxgl.Marker({
      color: "#FFFFFF",
      draggable: false
    }).setLngLat([-123.010208, 49.249228])
    .addTo(map);
  }

}
