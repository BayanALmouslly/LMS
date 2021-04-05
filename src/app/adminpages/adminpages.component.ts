import { Component, OnInit } from '@angular/core';
import { admin_MENU_ITEMS } from './admin-menu';

@Component({
  selector: 'ngx-adminpages',
  templateUrl: './adminpages.component.html',
  styleUrls: ['./adminpages.component.scss']
})
export class AdminpagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menu = admin_MENU_ITEMS;
}
