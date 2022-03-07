import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CostumerNewPage } from './pages/costumer-new/costumer-new.page';
import { PortfolioPage } from './pages/portfolio/portfolio.page';
import { CostumerEditPage } from './pages/costumer-edit/costumer-edit.page';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CostumerNewPage,
    PortfolioPage,
    CostumerEditPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
