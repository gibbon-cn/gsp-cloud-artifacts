import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, TaskExecutionContext } from '@farris/devkit';
import { SaleOrderListService as SaleOrderListService1 } from '../../service/service';

@Injectable()
@NgCommandHandler({
  commandName: 'formLoad'
})
export class FormLoadHandler extends CommandHandler {
  constructor(
    public _SaleOrderListService1: SaleOrderListService1
  ) {
    super();
  }

  schedule() {
    this.addTask('loadData', (lastResult: any, context: TaskExecutionContext) => {
     this._SaleOrderListService1.load();
    });
  }

}

@Injectable()
@NgCommandHandler({
  commandName: 'remove'
})
export class RemoveHandler extends CommandHandler {
  constructor(
    public _SaleOrderListService1: SaleOrderListService1
  ) {
    super();
  }

  schedule() {
    this.addTask('remove', (lastResult: any, context: TaskExecutionContext) => {
     this._SaleOrderListService1.remove();
    });
  }

}

@Injectable()
@NgCommandHandler({
  commandName: 'route'
})
export class RouteHandler extends CommandHandler {
  constructor(
    public _SaleOrderListService1: SaleOrderListService1
  ) {
    super();
  }

  schedule() {
    this.addTask('route', (lastResult: any, context: TaskExecutionContext) => {
      this._SaleOrderListService1.route(
        context.command.params.action
      );
    });
  }

}

@Injectable()
@NgCommandHandler({
  commandName: 'search'
})
export class SearchHandler extends CommandHandler {
  constructor(
    public _SaleOrderListService1: SaleOrderListService1
  ) {
    super();
  }

  schedule() {
    this.addTask('loadData', (lastResult: any, context: TaskExecutionContext) => {
     this._SaleOrderListService1.search();
    });
  }

}
