import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-actualite3',
  templateUrl: './actualite3.page.html',
  styleUrls: ['./actualite3.page.scss'],
})
export class Actualite3Page implements OnInit {
  loading:any;
  constructor( private router:Router,private loadingcrtl:LoadingController) { }
 
  
  ngOnInit() {
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
  
}
