import {Component, OnDestroy, OnInit} from '@angular/core';
import {VersionService} from "../../services/version.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public version!: number;
  private subsction!: Subscription;
  constructor(private versionService: VersionService,) { }

  ngOnInit(): void {
    this.subsction = this.versionService.numVersion$.subscribe({
      next: (dataVersion:number) => this.version = dataVersion
    })
  }

  /**
   * penser à détruire la souscription car sinon on aura le même nombre souscription que d'instantiation du
   * composant surtout dans le cas où le composant est détruit
   */
  /*ngOnDestroy(): void {
    this.subsction.unsubscribe();
  }*/





}
