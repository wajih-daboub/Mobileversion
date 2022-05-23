import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ContactService } from '../services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  nom;
  email;
  telephone;
  message;

  loading:any;
  constructor( private router:Router,private loadingcrtl:LoadingController, private contactService:ContactService) { }
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
  ajouterContact(){
   
    let object = {nom:this.nom,email:this.email,telephone:this.telephone,message:this.message}
    console.log("object values :",object)
    this.contactService.contactadd(object).subscribe((data)=>{
      console.log(data)
      console.log("add succesfully")
   
    },err=>{
      console.log("error not added",err)
    })
    //this.commandeService.addCommande(this.newCommande);
  }
  }


