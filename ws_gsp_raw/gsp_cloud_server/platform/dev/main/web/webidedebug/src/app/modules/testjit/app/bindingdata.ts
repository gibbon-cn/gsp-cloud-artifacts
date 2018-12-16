import { Injectable, Injector } from '@angular/core';
import { NgBindingData, BindingData } from '@farris/devkit';
import { SalesOrderEntity } from '../domain/salesorderentity';
import { SalesOrderRepository } from '../domain/repository';

@Injectable()
@NgBindingData({
  entity: SalesOrderEntity,
  repository: SalesOrderRepository
})
export class SalesOrderBindingData extends BindingData {
  constructor(public injector: Injector) {
    super(injector);
  }
}