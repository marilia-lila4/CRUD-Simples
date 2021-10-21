import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { DebtService } from "./../debt.service";
import { Debt } from "./../debt.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-debt-delete",
  templateUrl: "debt-delete.component.html",
  styleUrls: ["debt-delete.component.css"],
})
export class DebtDeleteComponent implements OnInit {
  debt: Debt;
  idDebt: string;

  constructor(
    private debtService: DebtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idDebt = +this.route.snapshot.paramMap.get("id");
    this.debtService.readByIdDebt(idDebt).subscribe((debt) => {
      this.debt = debt;
    });
  }

  deleteDebt(): void {
    this.debtService.deleteDebt(this.debt.id).subscribe(() => {
      this.debtService.showMessage("Dívida paga com sucesso!");
    });
    this.router.navigate(["/debts"]);
  }

  cancel(): void {
    this.router.navigate(["/debts"]);
  }
}
