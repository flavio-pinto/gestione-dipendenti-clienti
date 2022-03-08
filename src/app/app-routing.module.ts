import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { PortfolioPage } from './pages/portfolio/portfolio.page';
import { CostumerNewPage } from './pages/costumer-new/costumer-new.page';
import { CostumerEditPage } from './pages/costumer-edit/costumer-edit.page';
import { DetailPage } from './pages/detail/detail.page';

const routes: Routes = [
  {
    canActivate:[AuthGuard],
    path: 'portfolio',
    component: PortfolioPage
  },
  {
    canActivate:[AuthGuard],
    path: 'edit/:id',
    component: CostumerEditPage
  },
  {
    canActivate:[AuthGuard],
    path: 'detail/:id',
    component: DetailPage
  },
  {
    canActivate:[AuthGuard],
    path: 'costumer-new',
    component: CostumerNewPage
  },
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
