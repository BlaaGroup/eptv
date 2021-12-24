import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/providers/app.service';
import  *  as  ContentPage  from  '../../providers/content.json';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  content:any;
  constructor(public _AS:AppService) { }

  ngOnInit(): void {
    this.content = (ContentPage  as  any).default;
  }

}
