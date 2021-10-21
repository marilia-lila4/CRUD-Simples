import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";
import { AppRoutingModule } from "./app-routing.module";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { HomeComponent } from "./views/home/home.component";
import { DebtCrudComponent } from "./views/debt-crud/debt-crud.component";
import { RedDirective } from "./directives/red.directive";
import { ForDirective } from "./directives/for.directive";
import { DebtCreateComponent } from "./components/debt/debt-create/debt-create.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { DebtReadComponent } from "./components/debt/debt-read/debt-read.component";
import { DebtRead2Component } from "./components/debt/debt-read2/debt-read2.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";

// Colocar formato de dinheito de acordo com o BR - Inicio
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { DebtUpdateComponent } from './components/debt/debt-update/debt-update.component';
import { DebtDeleteComponent } from './components/debt/debt-delete/debt-delete.component';

registerLocaleData(localePt);
// Colocar formato de dinheito de acordo com o BR - Fim

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    DebtCrudComponent,
    RedDirective,
    ForDirective,
    DebtCreateComponent,
    DebtReadComponent,
    DebtRead2Component,
    DebtUpdateComponent,
    DebtDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  // Colocar formato de dinheito de acordo com o BR - Inicio
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
  ],
  // Colocar formato de dinheito de acordo com o BR - fim
  bootstrap: [AppComponent],
})
export class AppModule {}
