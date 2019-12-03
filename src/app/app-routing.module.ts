import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IceCreamComponent } from './comps/ice-cream/ice-cream.component';
import { ChocolateComponent } from './comps/chocolate/chocolate.component';
import { DataTitleComponent } from './comps/data-title/data-title.component';
import { JsonAppUserComponent } from './comps/json-app-user/json-app-user.component';
import { CanActivateIceCreamService } from './services/guards/can-activate-ice-cream.service';
import { LoginComponent } from './comps/login/login.component';
import { AmshinovComponent } from './comps/chassidim/amshinov/amshinov.component';
import { BreslevComponent } from './comps/chassidim/breslev/breslev.component';
import { SlonimComponent } from './comps/chassidim/slonim/slonim.component';
import { StolinComponent } from './comps/chassidim/stolin/stolin.component';
import { ChassidimMenuComponent } from './comps/chassidim/chassidim-menu/chassidim-menu.component';
import { PipeExampleComponent } from './comps/pipe-example/pipe-example.component';
import { ReactiveFormsComponent } from './comps/reactive-forms/reactive-forms.component';
import { ContactUsFormComponent } from './comps/contact-us-form/contact-us-form.component';
import { PracticePipesComponent } from './comps/practice-pipes/practice-pipes.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'chocolate', component: ChocolateComponent },
  { path: 'ice-cream', component: IceCreamComponent ,
    canActivate: [CanActivateIceCreamService]
  },
  { path: 'user/:id', component: JsonAppUserComponent },
  { path: 'data-title', 
    component: DataTitleComponent, 
    data:{title: 'this is the data title'}  
  },

  { path: 'chassidim-menu', component: ChassidimMenuComponent ,
      children: [
        { path: 'amshinov', component: AmshinovComponent },
        { path: 'breslev', component: BreslevComponent },
        { path: 'slonim', component: SlonimComponent },
        { path: 'stolin', component: StolinComponent },
        { path: '', redirectTo: 'stolin', pathMatch:'full'},
        { path: '**', redirectTo: 'stolin', pathMatch:'full'},
      ]
  },

  { path: 'pipe-example', component: PipeExampleComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'contact-us-form', component: ContactUsFormComponent },
  { path: 'practice-pipes', component: PracticePipesComponent },
    

  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path: '**', redirectTo: '/chocolate', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
