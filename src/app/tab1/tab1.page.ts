import { Component } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { postprovider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';
import { ToastController,AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  username:String;
  password:String;

  constructor(public router:Router,public prvdr:postprovider,public storage:Storage,public toast:ToastController,public alertCtrl:AlertController) {}

  async login(){
    console.log('username :'+this.username);
    console.log('password :'+this.password);
     if(this.username !='' && this.password !=''){

      let body={
        username:this.username,
        password:this.password,
        aksi:'tab1'
      };
      this.prvdr.postdata(body,'config.ini.php').subscribe(async (data)=>{
        var alterpesan=data.msg;
         if(data.success){
           this.router.navigate(['tabs/tab2']);
          const toast = await this.toast.create({
            message: ' login successful ',
            duration: 2000,
          });
          toast.present();
        }else{
          const toast = await this.toast.create({
            message: alterpesan,
            duration: 2000,
          });
          toast.present();
        }
      });

    } else{
      const toast = await this.toast.create({
        message: 'username or password invalid',
        duration: 2000,
      });
      toast.present();
    }

  }


  async registerpage(){
    this.router.navigate(['register'])
    
  }

}


