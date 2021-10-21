import { Debt } from "./debt.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EMPTY, Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DebtService {
  baseUrl = "http://localhost:3001/debts";

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  createDebt(debt: Debt): Observable<Debt> {
    return this.httpClient.post<Debt>(this.baseUrl, debt).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readDebt(): Observable<Debt[]> {
    return this.httpClient.get<Debt[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readByIdDebt(id: number): Observable<Debt> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Debt>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateDebt(debt: Debt): Observable<Debt> {
    const url = `${this.baseUrl}/${debt.id}`;
    return this.httpClient.put<Debt>(url, debt).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  deleteDebt(id: number): Observable<Debt> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<Debt>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Falta rodar o serviço", true);
    return EMPTY;
  }
}
