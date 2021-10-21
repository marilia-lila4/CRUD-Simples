import { Debt } from "./../debt.model";
import { ActivatedRoute, Router } from "@angular/router";
import { DebtService } from "./../debt.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-debt-update",
  templateUrl: "debt-update.component.html",
  styleUrls: ["debt-update.component.css"],
})
export class DebtUpdateComponent implements OnInit {
  debt: Debt;
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

  updateDebt(): void {
    this.debtService.updateDebt(this.debt).subscribe(() => {
      this.debtService.showMessage("Dívida atualizada com Sucesso!");
      this.router.navigate(["/debts"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/debts"]);
  }
}
