import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { CommandeService } from '../services/commande.service';
@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {
  loading:any;
  gouvernorat;
  typeDechet;
  sousTypeDechet;
  activite;
  societe;
  poids;

  constructor( private router:Router,private loadingcrtl:LoadingController, private commandeService:CommandeService) { }
  
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
  ajouterCommande(){
   
    let object = {gouvernorat:this.gouvernorat,typeDechet:this.typeDechet,sousTypeDechet:this.sousTypeDechet,activite:this.activite,societe:this.societe,poids:this.poids}
    console.log("object values :",object)
    this.commandeService.commandeeadd(object).subscribe((data)=>{
      console.log(data)
      console.log("add succesfully")
   
    },err=>{
      console.log("error not added",err)
    })
    //this.commandeService.addCommande(this.newCommande);
  }
  }
  
