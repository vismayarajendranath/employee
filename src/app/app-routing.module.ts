import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDetailsComponent } from './form-details/form-details.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path:'',component:FormComponent
  },
  {
    path:'emp-details',component:FormDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
