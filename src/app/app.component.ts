import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from './providers/app.service';
import  *  as  ContentPage  from  './providers/content.json';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  content:any;
 
  constructor (public _AS:AppService){

  }
  title = 'ETPV';
  ngOnInit():void{
    this.content = (ContentPage  as  any).default;
    console.log(this.content)
  
  }
  
}
