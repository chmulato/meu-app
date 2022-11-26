import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from '../components/courses/courses.component';
import { CoursesListComponent } from '../components/courses-list/courses-list.component';
import { AppMaterialModule } from './material.module';
import { SharedModule } from './shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
