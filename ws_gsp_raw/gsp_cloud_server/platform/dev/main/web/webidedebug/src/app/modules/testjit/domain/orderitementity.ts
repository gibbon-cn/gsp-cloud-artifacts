import { Entity, NgField, NgObject, EntityList, NgList } from '@farris/devkit';

export class OrderItemEntity extends Entity {
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
    dataField: 'Material'
  })
  Material: any;

  @NgField({
    dataField: 'SaleQuantity'
  })
  SaleQuantity: any;

  @NgField({
    dataField: 'SaleUnit'
  })
  SaleUnit: any;

  @NgField({
    dataField: 'TaxInPrice'
  })
  TaxInPrice: any;

  @NgField({
    dataField: 'DiscountRate'
  })
  DiscountRate: any;

  @NgField({
    dataField: 'FirstDeliveryDate'
  })
  FirstDeliveryDate: any;

}
