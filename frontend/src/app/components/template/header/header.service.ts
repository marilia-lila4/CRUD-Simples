import { HeaderData } from "./header-data.model";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderData>({
    title: "Início",
    icon: "home",
    routerUrl: "",
  });

  constructor() {}

  // Para obter informações. Esse método sempre retorna um valor.
  get headerData(): HeaderData {
    return this._headerData.value;
  }

  // Para definir valores. Esse método geralmente não retorna valores.
  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
