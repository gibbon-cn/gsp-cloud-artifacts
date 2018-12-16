import { Entity, NgField, NgObject, EntityList, NgList } from '@farris/devkit';

export class DeliveryEntity extends Entity {
  @NgField({
    dataField: 'ID',
    primary: true
  })
  ID: any;

  @NgField({
    dataField: 'ParentID'
  })
  ParentID: any;

  @NgField({
    dataField: 'Address'
  })
  Address: any;

  @NgField({
    dataField: 'Name'
  })
  Name: any;

}
