import { Component, OnInit } from '@angular/core';
import { SalesOrderViewModel } from './app/viewmodel';

@Component({
  selector: 'app-testjit',
  templateUrl: './component.html'
})
export class testjitComponent implements OnInit {
  constructor(public viewModel: SalesOrderViewModel) {}

  ngOnInit() {
    this.viewModel.formLoad();
  }
}