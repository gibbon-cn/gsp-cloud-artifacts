import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SalesOrderDetailComponent } from './sales-order-detail/sales-order-detail.component';
import { SalesOrderRoutes } from './sales-order.routes';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule,
    DateInputsModule,
    DropDownsModule,
    GridModule,
    InputsModule,
    LayoutModule,
    SalesOrderRoutes
  ],
  declarations: [SalesOrderDetailComponent],
  bootstrap: [SalesOrderDetailComponent]
})
export class SalesOrderModule {
  static entry = SalesOrderDetailComponent;
}
