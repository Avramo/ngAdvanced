import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IceCreamComponent } from './comps/ice-cream/ice-cream.component';
import { ChocolateComponent } from './comps/chocolate/chocolate.component';
import { DataTitleComponent } from './comps/data-title/data-title.component';
import { JsonAppUserComponent } from './comps/json-app-user/json-app-user.component';
import { CanActivateIceCreamService } from './services/guards/can-activate-ice-cream.service';

const routes: Routes = [
  { path: 'chocolate', component: ChocolateComponent },
  { path: 'ice-cream', component: IceCreamComponent ,
    canActivate: [CanActivateIceCreamService]
  },
  { path: 'user/:id', component: JsonAppUserComponent },///////////
  { path: 'data-title', 
    component: DataTitleComponent, 
    data:{title: 'this is the data title'}  
  },

  { path: '', redirectTo: '/chocolate', pathMatch:'full'},
  { path: '**', redirectTo: '/chocolate', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
