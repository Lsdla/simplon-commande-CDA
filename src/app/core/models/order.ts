import {OrderI} from "../interfaces/order-i";
import {StateOrder} from "../enums/state-order";

export class Order implements OrderI{
  client!: string;
  comment!: string;
  id!: number;
  nbJours = 1;
  state = StateOrder.OPTION;
  tjmHt = 400;
  tva = 20;
  typePresta!: string;

  constructor(obj?: Partial<Order>) {
    if (obj){
      Object.assign(this, obj);
    }
  }

  totalHt(): number {
    return  this.tjmHt * this.nbJours;
  }

  totalTtc(): number {
    return this.tjmHt * (1 + this.tva/100) * this.nbJours;
  }

}
