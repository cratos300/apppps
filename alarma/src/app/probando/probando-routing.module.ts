import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProbandoPage } from './probando.page';

const routes: Routes = [
  
    {path:'',component: ProbandoPage},
    {path:'e',component: ProbandoPage},
  
    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProbandoPageRoutingModule {}
