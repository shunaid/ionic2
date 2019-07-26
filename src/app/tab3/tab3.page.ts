import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ImagePicker, ImagePickerOptions  } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  images:any=[];
  myphoto:any;

  constructor(private menu: MenuController, public img:ImagePicker,
     public file:File,public navcntrl:NavController,private cmr:Camera,public router:Router ) {

    }

  
  //  pickMultipulImages(){
  //    var options:ImagePickerOptions={
  //      maximumImagesCount:5,
  //      width:100,
  //      height:100,
  //    }
  //    this.img.getPictures(options).then((results)=>{
  //      for(var interval=0;interval<results.length;interval++){
  //        let filename=results[interval].substring(results[interval].lastIndexOf('/')+1);
  //        let path=results[interval].substring(results[interval].lastIndexOf('/')+1);
  //        this.file.readAsDataURL(path,filename).then((base64String)=>{
  //          this.images.push(base64String);
  //        });
  //      }

  //    });
  //  }

  takephoto(){
      const options: CameraOptions = {
        quality: 70,
        destinationType: this.cmr.DestinationType.FILE_URI,
        encodingType: this.cmr.EncodingType.JPEG,
        mediaType: this.cmr.MediaType.PICTURE
      }
      
      this.cmr.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64 (DATA_URL):
       this.myphoto = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
       // Handle error
      });
    }

    smssend(){
     this.router.navigate(['sms']);
    }

}
