import { Component } from '@angular/core';
  import { from } from 'rxjs';
import { AlertController, Platform } from '@ionic/angular';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

 

  constructor(public alertCtrl: AlertController ) {

  }

  

  async javeed(){
    const alert = await this.alertCtrl.create({
          header: 'Animal Doctor',
          subHeader: 'DR:',
          message: 'javeed gujar'  ,
          buttons: ['OK']
        
         });
        
          alert.present();
    
  }

}
