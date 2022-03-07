import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ModificaClientePage } from './pages/modifica-cliente/modifica-cliente.page';
import { PortfolioPage } from './pages/portfolio/portfolio.page';
import { CostumerNewPage } from './pages/costumer-new/costumer-new.page';

const routes: Routes = [
  {
    canActivate:[AuthGuard],
    path: 'portfolio',
    component: PortfolioPage
  },
  {
    canActivate:[AuthGuard],
    path: 'costumer-new',
    component: CostumerNewPage
  },
  {
    canActivate:[AuthGuard],
    path: 'modifica-cliente',
    component: ModificaClientePage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
