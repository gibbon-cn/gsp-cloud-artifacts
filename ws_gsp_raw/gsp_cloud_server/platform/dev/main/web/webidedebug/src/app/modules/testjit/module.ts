import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { CommandModule } from '@farris/devkit';
import { KendoBindingModule } from '@farris/kendo-binding';
import { RestfulService } from '@farris/devkit';
import { FlexLayoutMoudle } from '@farris/ui';
import { testjitRoutingModule } from './routing';
import { SaleOrderListService } from './service/service';
import { testjitComponent } from './component';
import { SalesOrderForm } from './app/form';
import { SalesOrderViewModel } from './app/viewmodel';
import { SalesOrderBindingData } from './app/bindingdata';
import { SalesOrderStorage } from './domain/storage';
import { SalesOrderRepository } from './domain/repository';
import { FormLoadHandler } from './app/handler/commandhandler';
import { RemoveHandler } from './app/handler/commandhandler';
import { RouteHandler } from './app/handler/commandhandler';
import { SearchHandler } from './app/handler/commandhandler';

@NgModule({
  declarations: [
    testjitComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    DateInputsModule,
    DropDownsModule,
    ButtonsModule,
    InputsModule,
    LayoutModule,
    KendoBindingModule,
    testjitRoutingModule,
    FlexLayoutMoudle,
    CommandModule.setup([FormLoadHandler, RemoveHandler, RouteHandler, SearchHandler], [])
  ],
  providers: [
    RestfulService,
    SaleOrderListService,
    SalesOrderStorage,
    SalesOrderRepository,
    SalesOrderBindingData,
    SalesOrderForm,
    SalesOrderViewModel,
    FormLoadHandler,
    RemoveHandler,
    RouteHandler,
    SearchHandler
  ]
})
export class testjitModule {
  constructor() {}
}
