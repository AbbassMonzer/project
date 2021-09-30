import { NgModule } from '@angular/core';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import 'hammerjs';
import { KendoComponent } from './components/kendo/kendo.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [KendoComponent],
  imports: [ButtonsModule, ChartsModule, CommonModule],
  exports: [KendoComponent],
})
export class SharedModule {}
