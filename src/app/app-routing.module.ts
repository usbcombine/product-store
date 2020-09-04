import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ProductListComponent },
  { path: 'add', component: ProductItemComponent },
  { path: 'edit/:uuid', component: ProductItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
