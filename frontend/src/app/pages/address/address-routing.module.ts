import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address.component';

const routes: Routes = [{ path: '', component: AddressComponent }];

export const addressRouting = RouterModule.forChild(routes);
