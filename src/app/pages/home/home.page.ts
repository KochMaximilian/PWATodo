import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items: Array<any>;

  constructor(
    private router: Router,
    public itemService: ItemService
  ){}

  
  // after initializing the app
  ngOnInit(){
    this.items = this.itemService.getItems();
  }

}


