import { Component, OnInit } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';
import { AlertController, ToastController } from '@ionic/angular';
import { async } from 'q';
import { postprovider } from 'src/providers/post-provider';


@Component({
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.page.scss'],
})
export class SmsPage implements OnInit {
  number:String;
  message:String;
  public todomessage=[];

  constructor(private sms:SMS,public altercontroller:AlertController,public toast:ToastController,public provide:postprovider) { }

  ngOnInit() {
  }

  send(){
    console.log("Number"+this.number);
    console.log("Message"+this.message);
    this.sms.send("03103606825", "javeed");
  }

  
async share(){
  const alert = await this.altercontroller.create({
    header: 'Share',
    subHeader: '',
    message: 'You can share data',
    buttons: ['OK']
  });
  await alert.present();
}


 async delete(){
  const alert = await this.altercontroller.create({
    header: 'Delete',
    subHeader: '',
    message: 'You want to delete',
    buttons: ['OK']
  });
  await alert.present();
 }

 async someadd(){
  const alert = await this.altercontroller.create({
    header: 'Message',
    inputs: [
      {
        name: 'Addsomething',
        type: 'text',
        placeholder: 'Enter Message'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          
          text: 'Ok',
          handler: (inputData) => {
            console.log('Confirm Ok');
            let todotext;
            todotext=inputData.Addsomething;
            this.todomessage.push(todotext);

          }
        }
      ],
});
await alert.present();

}




}
