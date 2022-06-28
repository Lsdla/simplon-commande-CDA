import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../../core/models/order";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public collection$!: Observable<Order[]>
  private urlApi = environment.urlApi;
  constructor( private http: HttpClient) {
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`);

    //juste pour voir ce qu'on peut faire avec le subscribe: pour montrer les 3 callbacks
    this.collection$.subscribe(() => {})// à l'ancienne
    this.collection$.subscribe({
      next: () => {},
      error: () => {},
      complete: () => {}
    }) // en utilisant les 3 callback disponible
  }
}
