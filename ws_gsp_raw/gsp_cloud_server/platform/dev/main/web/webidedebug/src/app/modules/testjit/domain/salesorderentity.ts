import { Entity, NgField, NgObject, EntityList, NgList } from '@farris/devkit';
import { OrderItemEntity } from './orderitementity';
import { DeliveryEntity } from './deliveryentity';
import { SalesCompanyEntity } from './salescompanyentity';

export class SalesOrderEntity extends Entity {
  @NgField({
    dataField: 'ID',
    primary: true
  })
  ID: any;

  @NgField({
    dataField: 'Code'
  })
  Code: any;

  @NgField({
    dataField: 'PlaceDate'
  })
  PlaceDate: any;

  @NgField({
    dataField: 'SalesOrg'
  })
  SalesOrg: any;

  @NgField({
    dataField: 'Employee'
  })
  Employee: any;

  @NgField({
    dataField: 'SoldToParty'
  })
  SoldToParty: any;

  @NgField({
    dataField: 'Contact'
  })
  Contact: any;

  @NgField({
    dataField: 'ContactNumber'
  })
  ContactNumber: any;

  @NgField({
    dataField: 'Currency'
  })
  Currency: any;

  @NgField({
    dataField: 'TotalAmount'
  })
  TotalAmount: any;

  @NgField({
    dataField: 'Note'
  })
  Note: any;

  @NgField({
    dataField: 'AuditState'
  })
  AuditState: any;

  @NgList({
    dataField: 'OrderItem',
    type: OrderItemEntity
  })
  OrderItem: EntityList<OrderItemEntity>;

  @NgList({
    dataField: 'Delivery',
    type: DeliveryEntity
  })
  Delivery: EntityList<DeliveryEntity>;

  @NgObject({
    dataField: 'Company',
    type: SalesCompanyEntity
  })
  Company: SalesCompanyEntity;

}
