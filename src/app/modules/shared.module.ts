import { NgModule } from '@angular/core';
import { CategoryPipe } from '../pipes/category.pipe';

@NgModule({
  declarations: [CategoryPipe],
  imports: [],
  exports: [CategoryPipe]
})
export class SharedModule { }