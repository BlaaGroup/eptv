import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/providers/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(public _AS:AppService) { }

  ngOnInit(): void {
  }

}
