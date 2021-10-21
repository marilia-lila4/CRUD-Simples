import { HeaderService } from "./../../components/template/header/header.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-debt",
  templateUrl: "debt-crud.component.html",
  styleUrls: ["debt-crud.component.css"],
})
export class DebtCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de Dívidas",
      icon: "storefront",
      routerUrl: "/debts",
    };
  }

  ngOnInit(): void {}

  navigateToDebtCrate(): void {
    this.router.navigate(["/debts/create"]);
  }
}
