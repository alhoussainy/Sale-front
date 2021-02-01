import {Vendeur} from "./vendeur";


export class Ventes {

  private _id: string;
  private _saleDate: Date;
  private _items:Array<any>;
  private _storeLocation: string;
  private _customer: Vendeur;
  private _couponUsed: boolean;
  private _purchaseMethod: string;


  constructor( saleDate: Date, items: Array<any>, storeLocation: string, customer: Vendeur, couponUsed: boolean, purchaseMethod: string, id?: string) {
      if (id) {
      this._id = id;
    }
    this._saleDate = saleDate;
    this._items = items;
    this._storeLocation = storeLocation;
    this._customer = customer;
    this._couponUsed = couponUsed;
    this._purchaseMethod = purchaseMethod;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get saleDate(): Date {
    return this._saleDate;
  }

  set saleDate(value: Date) {
    this._saleDate = value;
  }

  get items(): Array<any> {
    return this._items;
  }

  set items(value: Array<any>) {
    this._items = value;
  }

  get storeLocation(): string {
    return this._storeLocation;
  }

  set storeLocation(value: string) {
    this._storeLocation = value;
  }

  get customer(): Vendeur {
    return this._customer;
  }

  set customer(value: Vendeur) {
    this._customer = value;
  }

  get couponUsed(): boolean {
    return this._couponUsed;
  }

  set couponUsed(value: boolean) {
    this._couponUsed = value;
  }

  get purchaseMethod(): string {
    return this._purchaseMethod;
  }

  set purchaseMethod(value: string) {
    this._purchaseMethod = value;
  }


  static formJson(data: any): Ventes {
    return new Ventes(
      data.saleDate,
      data.items,
      data.storeLocation,
      Vendeur.formJson(data.customer),
      data.couponUsed,
      data.purchaseMethod,
      data._id
     );
  }

}
