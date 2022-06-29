import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemplatesModule} from "../templates/templates.module";
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import {RouterLink, RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    BtnComponent,
    TableLightComponent,
    TotalPipe,
    StateDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TemplatesModule,
    BtnComponent,
    TableLightComponent,
    TotalPipe,
    StateDirective,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
