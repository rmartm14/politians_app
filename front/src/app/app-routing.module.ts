import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTableComponent } from './main-table/main-table.component';
import { PoliticianCreateComponent } from './politician-create/politician-create.component';
import { PoliticianEditComponent } from './politician-edit/politician-edit.component';
import { PoliticianInfoComponent } from './politician-info/politician-info.component';

const routes: Routes = [
  {path: "", component:MainTableComponent},
  {path: "info", component:PoliticianInfoComponent},
  {path: "create", component:PoliticianCreateComponent},
  {path: "edit", component:PoliticianEditComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
