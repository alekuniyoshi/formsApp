import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  templateMenu: MenuItem[] = [
    {
      text: 'Basics',
      path: './template/basics'
    },
    {
      text: 'Dinamics',
      path: './template/dinamics'
    },
    {
      text: 'Switchs',
      path: './template/switchs'
    }
  ]

  reactiveMenu: MenuItem[] = [
    {
      text: 'Basics',
      path: './reactive/basics'
    },
    {
      text: 'Dinamics',
      path: './reactive/dinamics'
    },
    {
      text: 'Switchs',
      path: './reactive/switchs'
    }
  ]

}
