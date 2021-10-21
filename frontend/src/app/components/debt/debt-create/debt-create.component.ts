import { Debt } from "./../debt.model";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { DebtService } from "../debt.service";

@Component({
  selector: "app-debt-create",
  templateUrl: "debt-create.component.html",
  styleUrls: ["debt-create.component.css"],
})
export class DebtCreateComponent implements OnInit {
  debt: Debt = {
    name: "",
    price: null,
  };

  constructor(private debtService: DebtService, private router: Router) {}

  ngOnInit(): void {}

  createDebt(): void {
    this.debtService.createDebt(this.debt).subscribe(() => {
      this.debtService.showMessage("Dívida criada com sucesso!");
      this.router.navigate(["/debts"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/debts"]);
  }
}
