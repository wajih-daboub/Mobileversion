import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { SocieteService } from '../services/societe.service';
@Component({
  selector: 'app-creercompter',
  templateUrl: './creercompter.page.html',
  styleUrls: ['./creercompter.page.scss'],
})
export class CreercompterPage implements OnInit {
  loading:any;
  nom;
  matricule;
  email;
  password;
  telephone;
  adresse;
  typeauto;
  typeact;
  constructor( private router:Router,private loadingcrtl:LoadingController, private societeService:SocieteService) { }
  
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
  ajouterSociete(){
   
    let object = {username:this.nom,matricule:this.matricule,email:this.email,password:this.password,adresse:this.adresse,telephone:this.telephone,typeact:this.typeact,typeaut:this.typeauto}
    console.log("object values :",object)
    this.societeService.societeadd(object).subscribe((data)=>{
      console.log(data)
      console.log("add succesfully")
   
    },err=>{
      console.log("error not added",err)
    })
    //this.commandeService.addCommande(this.newCommande);
  }
  }

