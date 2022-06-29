import { Component, OnInit } from '@angular/core';
import {VersionService} from "../../services/version.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private versionService: VersionService) { }

  ngOnInit(): void {
  }

  public onClickVersion(): void {
    this.versionService.incrementVersion();
  }
}
