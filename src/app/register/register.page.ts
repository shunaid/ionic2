import { Component, OnInit } from '@angular/core';
import { postprovider } from '../../providers/post-provider';
import { ToastController, AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  
  username:String="";
  password:String="";

  constructor(public prvdr:postprovider,public toast: ToastController,public router:Router,public alertCtrl:AlertController) {
    
   }

  ngOnInit() {
  }

 
  async submit(){
    console.log("username: "+this.username);
    console.log("password: "+this.password);

    if(this.username == ''){
      const toast = await this.toast.create({
        message: 'user name required ',
        duration: 2000,
      });
      toast.present();


    }else if(this.password == "" ){
      const toast = await this.toast.create({
        message: 'password required ',
        duration: 2000,
      });
      toast.present();


    }else{
      let body={
        username:this.username,
        password:this.password,
        aksi:"add_register",
      };
      this.prvdr.postdata(body,'config.ini.php').subscribe(async (data)=>{
        
        var alterpesan=data.msg;
         if(data.success){
           this.router.navigate(['tabs/tab1']);
          const toast = await this.toast.create({
            message: ' Register successful ',
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

    }

  }


}
