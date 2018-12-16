import { Injectable, Injector } from '@angular/core';
import { MemoryStorage } from '@farris/devkit';

@Injectable()
export class SalesOrderStorage extends MemoryStorage {
  constructor() {
    super();
  }
}
