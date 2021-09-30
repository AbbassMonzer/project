import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personRouting } from './person-routing.module';
import { PersonComponent } from './person.component';
import { SharedModule } from 'src/app/shared.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [PersonComponent],
  imports: [SharedModule, CommonModule, personRouting, MatTableModule],
  providers: []
})
export class PersonModule {}

