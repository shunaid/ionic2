import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class postprovider{

    server:String='http://localhost/aapdata-api/login.php/config.php/';

 constructor(public http:Http){

 }  

 postdata(body,file){
    let type="application/json;charset=utf-8";
    let headers=new Headers({"content-type":type});
    let options=new RequestOptions({headers:headers})
    console.log(body, file)
    return this.http.post(this.server+file,JSON.stringify(body),options)
      .map(res=> res.json() );

}

 

}