import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../services/orders.service";
import {Order} from "../../../core/models/order";

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public parentCollection!: Order[];
  public parentHeaders: string[];
  constructor(private ordersService: OrdersService) {
    this.parentHeaders = ["TjmHt", "NbJours", "TVA", "Type Presta", "Client", "State"];
  }

  ngOnInit(): void {
    this.ordersService.collection$.subscribe(
      (data: Order[]) => {
        this.parentCollection = [...data];
        console.log(this.parentCollection = [...data]);
      }
    )
  }

}
