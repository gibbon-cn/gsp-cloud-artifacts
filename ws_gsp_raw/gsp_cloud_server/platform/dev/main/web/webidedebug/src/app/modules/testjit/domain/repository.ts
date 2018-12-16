import { Injectable, Injector } from '@angular/core';
import { NgRepository, Repository } from '@farris/devkit';
import { SalesOrderEntity } from './salesorderentity';
import { SalesOrderStorage } from './storage';

@Injectable()
@NgRepository({
  from: SalesOrderStorage,
  entityType: SalesOrderEntity
})
export class SalesOrderRepository extends Repository<SalesOrderEntity> {
  constructor(injector: Injector) {
    super(injector);
  }
}
