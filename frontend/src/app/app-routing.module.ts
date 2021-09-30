import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/person/person.module').then((m) => m.PersonModule),
  },
  {
    path: 'person',
    loadChildren: () =>
      import('./pages/person/person.module').then((m) => m.PersonModule),
  },
  {
    path: 'address',
    loadChildren: () =>
      import('./pages/address/address.module').then((m) => m.AddressModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
