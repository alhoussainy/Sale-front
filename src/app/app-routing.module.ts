import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VentesComponent} from './views/ventes/ventes.component';
import {VentesCreatorComponent} from './views/ventes-creator/ventes-creator.component';
import {SaleEditComponent} from './views/sale-edit/sale-edit.component';
import {SaleOneComponent} from './views/sale-one/sale-one.component';

const routes: Routes = [
  {
    path: '',
    component: VentesComponent
  },
  {
    path: 'ventes',
    component: VentesComponent
  },
  {
    path: 'new',
    component: VentesCreatorComponent
  },
  {
    path: '/edit/:id',
    component: SaleEditComponent
  },
  {
    path: '/sale/:id',
    component: SaleOneComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
