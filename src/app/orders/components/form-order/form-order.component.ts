import {Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {Order} from "../../../core/models/order";
import {StateOrder} from "../../../core/enums/state-order";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit, OnChanges {

  @Input() init!: Order;
  @Output() submitted = new EventEmitter<Order>();
  public states = StateOrder;
  public formAddOrder!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.formAddOrder = this.fb.group({
      typePresta: [this.init.typePresta],
      client: [this.init.client],
      nbJours: [this.init.nbJours],
      tjmHt: [this.init.tjmHt],
      tva: [this.init.tva],
      state: [this.init.state],
      comment: [this.init.comment],
      id: [this.init.id]
    })
  }


}
