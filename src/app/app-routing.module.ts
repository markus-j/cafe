import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafesComponent }      from './cafes/cafes.component';
import { CafeDetailComponent }  from './cafe-detail/cafe-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/cafes', pathMatch: 'full' },
  { path: 'cafes', component: CafesComponent },
  { path: 'detail/:id', component: CafeDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }



