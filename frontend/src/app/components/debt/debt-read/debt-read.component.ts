import { DebtService } from "./../debt.service";
import { Debt } from "./../debt.model";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-debt-read",
  templateUrl: "debt-read.component.html",
  styleUrls: ["debt-read.component.css"],
})
export class DebtReadComponent implements OnInit {
  debts: Debt[];
  displayedColumns = ["id", "name", "price", "action"];

  constructor(private debtService: DebtService) {}

  ngOnInit(): void {
    this.readDebts();
  }

  readDebts(): void {
    this.debtService.readDebt().subscribe((debts) => {
      this.debts = debts;
    });
  }
}
