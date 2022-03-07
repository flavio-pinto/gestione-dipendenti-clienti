import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ModificaClientePage } from './pages/modifica-cliente/modifica-cliente.page';
import { NuovoClientePage } from './pages/nuovo-cliente/nuovo-cliente.page';
import { PortfolioPage } from './pages/portfolio/portfolio.page';

const routes: Routes = [
  {
    canActivate:[AuthGuard],
    path: 'portfolio',
    component: PortfolioPage
  },
  {
    canActivate:[AuthGuard],
    path: 'nuovo-cliente',
    component: NuovoClientePage
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
