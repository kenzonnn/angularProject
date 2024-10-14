import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AproposRoutingModule } from './apropos-routing.module';
import { AproposComponent } from './apropos/apropos.component';


@NgModule({
  declarations: [
    AproposComponent
  ],
  imports: [
    CommonModule, // pour importer l hajet li par defaut aand angular lkol , directives , l pipe ..
    AproposRoutingModule
  ]
})
export class AproposModule { }
