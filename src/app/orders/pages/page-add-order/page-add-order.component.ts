import { Component, OnInit } from '@angular/core';
import {Order} from "../../../core/models/order";
import {OrdersService} from "../../services/orders.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  public newOrder = new Order();

  constructor(
    private ordersService: OrdersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmitAddOrder(submittedOrder: Order) {
    console.log("Parent", submittedOrder);
    this.ordersService.add(submittedOrder).subscribe(
      () => {
        this.router.navigateByUrl(`/orders`)
        // ou
        // this.router.navigate(['orders'])
      }
    )
  }
}
