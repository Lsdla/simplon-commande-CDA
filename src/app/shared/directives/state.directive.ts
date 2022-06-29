import {Directive, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges{

  //le nom de l'input doit avoir absolument le même nom que le selector
  @Input() appState!: string;

  @HostBinding('class') tdClassName!: string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.appState);
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
  }

}
