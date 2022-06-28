import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Order} from "../../core/models/order";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public collection$!: Observable<Order[]>
  private urlApi = environment.urlApi;

  /*******************************************************
   * Démo sur les observables
   *******************************************************/
  //observable froid

  private observable$ = new Observable((obs) => obs.next(Math.random()));

  //observable chaud:

  //1)- subject
  private subject$ = new Subject<string>();

  //2)-behaviorSubject (garde un état et on peut avoir la valeur à l'extérieur du scope) exemple de discussion
  //de groupe dans un subject si on ajoute quelqu'un à une discussion il ne verra pas ce qui s'est dit avant contrairement
  //au behavior où il aura accès à la dernière valeur transmise.
  private behaviorSubject$ = new BehaviorSubject<string>("data init");

  constructor( private http: HttpClient) {
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`);

    //juste pour voir ce qu'on peut faire avec le subscribe: pour montrer les 3 callbacks
    this.collection$.subscribe(() => {})// à l'ancienne
    this.collection$.subscribe({
      next: () => {},
      error: () => {},
      complete: () => {}
    }) // en utilisant les 3 callback disponible

    //abonnement à l'observable froid:
    this.observable$.subscribe((data) => console.log(`Observer 1 : ${data}`));
    this.observable$.subscribe((data) => console.log(`Observer 2 : ${data}`));

    //abonnement à l'observable chaud:

    //subject
    console.warn('Subscribe subject');

    this.subject$.subscribe((data) => console.log(`Observer subject 1 : ${data}`));
    this.subject$.subscribe((data) => console.log(`Observer subject 2 : ${data}`));

    console.warn('Next subject');
    this.subject$.next('Premier message');

    console.warn('Subscribe subject');
    console.log('Troisième observer');
    this.subject$.subscribe((data) => console.log(`Observer subject 3 : ${data}`));

    console.warn('Next');
    this.subject$.next('Second message');

    //behavior
    console.warn('Start behav');

    console.warn('Subscribe');
    this.behaviorSubject$.subscribe((data) => console.log(`Observer behavsubject 1 : ${data}`));
    this.behaviorSubject$.subscribe((data) => console.log(`Observer behavsubject 2 : ${data}`));

    console.warn('Next');
    this.behaviorSubject$.next('Premier message');
    console.warn(
      this.behaviorSubject$.value
    );

    console.warn('Autre Subscribe');
    this.behaviorSubject$.subscribe((data) => console.log(`Observer behavsubject 3 : ${data}`));

    console.warn('Next');
    this.behaviorSubject$.next('Second message');
  }
}
