import { Entity, NgField, NgObject, EntityList, NgList } from '@farris/devkit';

export class SalesCompanyEntity extends Entity {
  @NgField({
    dataField: 'Code'
  })
  Code: any;

  @NgField({
    dataField: 'Name'
  })
  Name: any;

}
