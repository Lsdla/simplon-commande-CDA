import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Order} from "../../../core/models/order";
import {StateOrder} from "../../../core/enums/state-order";

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {

  @Input() init!: Order;
  @Output() submitted = new EventEmitter<Order>();
  public states = StateOrder;

  constructor() { }

  ngOnInit(): void {
  }

}
