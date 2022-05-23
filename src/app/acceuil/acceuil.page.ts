import { Component, AfterViewInit } from '@angular/core';
import * as L   from 'leaflet';
import 'leaflet-routing-machine';
import {Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements AfterViewInit {
  map: L.Map;
   loading:any;
  constructor( private router:Router,private loadingcrtl:LoadingController) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.presentLoading();
    

  }
  async presentLoading(){
    this.loading= await this.loadingcrtl.create({
      spinner:"dots",
      
      duration:1500,
      message:'Veuillez patienter',
    });
    return await this.loading.present();
  }
   private initMap():void{

this.map= L.map('mapid').setView([36.8065,10.1815], 7);
const tiles = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3']
});
tiles.addTo(this.map);
     var greenIcon = L.icon({
      iconUrl: 'assets/mylocation.png',
     
      iconSize:     [35, 35], // size of the icon
     
      iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
     
  });
  var test = L.icon({
    iconUrl: 'assets/recyclage.png',
   
    iconSize:     [35, 35], // size of the icon
   
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
   
  });
if (!navigator.geolocation) {
    console.log('location is not supported');
}
navigator.geolocation.getCurrentPosition((position) => {
    const coords = position.coords;
    const latLong : [number, number]=[coords.latitude, coords.longitude];
    console.log(
      `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
    );
    let marker = L.marker([coords.latitude, coords.longitude],{icon:greenIcon}).addTo(this.map);
  
let popup = L.popup()
.setLatLng([coords.latitude, coords.longitude])
.setContent('Votre position actuel')
.openOn(this.map);
  
});
var recy = L.icon({

  iconUrl: 'assets/recyclage.png',
   
  iconSize:     [35, 35], // size of the icon
   
  iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
   
});
var p = L.icon({

  iconUrl: 'assets/productive.png',
   
  iconSize:     [35, 35], // size of the icon
   
  iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
   
});
var t = L.icon({

  iconUrl: 'assets/transport.png',
   
  iconSize:     [35, 35], // size of the icon
   
  iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
   
});
  
  var greenIcon = L.icon({
    iconUrl: 'assets/mylocation.png',
   
    iconSize:     [35, 35], // size of the icon
   
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
   
  });
  let marker1 = L.marker([37.07948364339938,9.420727781260458],{icon:recy}).addTo(this.map);
  let marker2 = L.marker([35.55858364339938,10.420727781260458],{icon:recy}).addTo(this.map);
  let marker3 = L.marker([37.07948364339938,9.420727781260458],{icon:recy}).addTo(this.map);
   let marker4 = L.marker([35.53802325781237,8.77588856923824],{icon:t}).addTo(this.map);
   let marker5 = L.marker([36.874745740799504,9.058786518457032],{icon:t}).addTo(this.map);
   let marker6 = L.marker([33.71854610945448,9.454294330956952],{icon:t}).addTo(this.map);
   let marker7 = L.marker([32.86998865949188,10.877023823144532],{icon:p}).addTo(this.map);
   let marker8 = L.marker([36.07871444168195,8.789621479394452],{icon:p}).addTo(this.map);
   let marker9 = L.marker([33.050317000971376,8.558908588769452],{icon:p}).addTo(this.map);
   let marker10 = L.marker([36.17078263957778,10.129953510644452],{icon:recy}).addTo(this.map);
   let marker11 = L.marker([32.869411941127574,11.107736713769452],{icon:t}).addTo(this.map);
   let marker12 = L.marker([35.87200118487967,10.107980854394452],{icon:p}).addTo(this.map);
   let marker13 = L.marker([34.4456251409675,8.778635151269452],{icon:t}).addTo(this.map);
  this.map.on('click',<LeafletMouseEvent>(e)=>{
    console.log(e);
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong : [number, number]=[coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let marker = L.marker((latLong),{icon:greenIcon}).addTo(this.map);
    
  L.Routing.control({
      waypoints: [
        L.latLng(e.latlng.lat,e.latlng.lng),
      L.latLng(latLong),
       
      ],
  
    }).addTo(this.map);
  });
  });
  this.watchPosition();
  
  }
  
  
  watchPosition() {
  let desLat = 0;
  let desLon = 0;
  let id = navigator.geolocation.watchPosition(
    (position) => {
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      if (position.coords.latitude === desLat) {
        navigator.geolocation.clearWatch(id);
      }
    },
    (err) => {
      console.log(err);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
    


  }}