import { Injectable, Injector } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm, Form, NgFormControl, NgChildForm, NgChildFormArray } from '@farris/devkit';
import { SalesOrderBindingData } from './bindingdata';

@Injectable()
@NgForm({
  bindingData: SalesOrderBindingData
})
export class SalesOrderForm extends Form {
  constructor(injector: Injector) {
    super(injector);
  }

  @NgFormControl({
    name: 'begin'
  })
  begin: FormControl;

  @NgFormControl({
    name: 'end'
  })
  end: FormControl;

}

