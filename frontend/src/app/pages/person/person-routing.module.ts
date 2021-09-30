import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person.component';

const routes: Routes = [{ path: '', component: PersonComponent }];

export const personRouting = RouterModule.forChild(routes);
