import { DebtCrudComponent } from "./views/debt-crud/debt-crud.component";
import { HomeComponent } from "./views/home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DebtCreateComponent } from "./components/debt/debt-create/debt-create.component";
import { DebtUpdateComponent } from "./components/debt/debt-update/debt-update.component";
import { DebtDeleteComponent } from "./components/debt/debt-delete/debt-delete.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "debts",
    component: DebtCrudComponent,
  },
  {
    path: "debts/create",
    component: DebtCreateComponent,
  },
  {
    path: "debts/update/:id",
    component: DebtUpdateComponent,
  },
  {
    path: "debts/delete/:id",
    component: DebtDeleteComponent,
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
