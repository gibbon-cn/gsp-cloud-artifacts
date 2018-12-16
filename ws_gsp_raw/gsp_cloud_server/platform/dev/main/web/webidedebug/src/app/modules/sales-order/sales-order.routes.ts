import { Routes, RouterModule } from '@angular/router';
import { SalesOrderDetailComponent } from './sales-order-detail/sales-order-detail.component';

const routes: Routes = [
  { path: '', component: SalesOrderDetailComponent }
];

export const SalesOrderRoutes = RouterModule.forChild(routes);
