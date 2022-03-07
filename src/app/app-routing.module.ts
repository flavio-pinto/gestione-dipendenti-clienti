import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { PortfolioPage } from './pages/portfolio/portfolio.page';
import { CostumerNewPage } from './pages/costumer-new/costumer-new.page';
import { CostumerEditPage } from './pages/costumer-edit/costumer-edit.page';

const routes: Routes = [
  {
    canActivate:[AuthGuard],
    path: 'portfolio',
    component: PortfolioPage,
    /* children:[
      {
        path: ':id',
        component: CostumerEditPage
      }
    ] */
  },
  {
    path: 'edit/:id',
    component: CostumerEditPage
  },
  {
    canActivate:[AuthGuard],
    path: 'costumer-new',
    component: CostumerNewPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
