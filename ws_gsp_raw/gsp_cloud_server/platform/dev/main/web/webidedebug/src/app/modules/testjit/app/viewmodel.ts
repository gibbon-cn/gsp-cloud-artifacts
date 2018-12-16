import { Injectable, Injector } from '@angular/core';
import { NgViewModel, ViewModel, NgCommand } from '@farris/devkit';
import { SalesOrderBindingData } from './bindingdata';
import { SalesOrderForm } from './form';

@Injectable()
@NgViewModel({
  binding: SalesOrderBindingData,
  form: SalesOrderForm,
  stateMachine: null
})
export class SalesOrderViewModel extends ViewModel {
  constructor(injector: Injector) {
    super(injector);
  }

  @NgCommand({
    name: 'formLoad'
  })
  public formLoad() {}

  @NgCommand({
    name: 'search'
  })
  public search() {}

  @NgCommand({
    name: 'route',
    params: {
      action: 'add'
    }
  })
  public add() {}

  @NgCommand({
    name: 'route',
    params: {
      action: 'edit'
    }
  })
  public edit() {}

  @NgCommand({
    name: 'route',
    params: {
      action: 'view'
    }
  })
  public view() {}

  @NgCommand({
    name: 'remove'
  })
  public remove() {}

}

