import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../services/orders.service";
import {Order} from "../../../core/models/order";
import {Observable, Subject} from "rxjs";
import {StateOrder} from "../../../core/enums/state-order";

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public collection$!: Observable<Order[]>;
  public testSubject$!: Subject<string>;
  public parentCollection!: Order[];
  public parentHeaders: string[];
  public listStateOrder = StateOrder;
  constructor(private ordersService: OrdersService) {
    this.parentHeaders = ["TjmHt", "NbJours", "TVA", "TotalHt", "TotalTtc", "Type Presta", "Client", "State"];
  }

  ngOnInit(): void {
    /*this.ordersService.collection$.subscribe(
      (data: Order[]) => {
        this.parentCollection = [...data];
        console.log(this.parentCollection = [...data]);
      }
    )*/

    this.collection$ = this.ordersService.collection$;

    this.collection$ = this.ordersService.collection$;
    // test
    this.testSubject$ = this.ordersService.subject$;

    setTimeout(() => {
      this.ordersService.subject$.next("Coucou");
    }, 5000);

  }

  /**
   * plus besoin des ces méthodes car on a créé notre propre pipe
   */
  /*calculTotalHt(order: Order){
    let resultHt = order.tjmHt * order.nbJours;
    return resultHt;
  }

  calculTotalTtc(order: Order){
    let resultTtc = order.tjmHt * (1 + order.tva/100) * order.nbJours;
    return resultTtc;
  }*/

  onChangeState(order: Order, selectedState: any) {
    console.log(order, selectedState.target.value);

    this.ordersService.changeState(order, selectedState.target.value).subscribe(
      (updatedOrder: Order) => order.state = updatedOrder.state
    );
  }
}
