import { Pipe, PipeTransform } from '@angular/core';
import {Order} from "../../core/models/order";

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(item: any, isTtc?: boolean): number {
    if (isTtc){
      //return order.tjmHt * (1 + order.tva/100) * order.nbJours
      return item.totalTtc();
    }
    //return order.tjmHt * order.nbJours;
    return item.totalHt()
  }

}
