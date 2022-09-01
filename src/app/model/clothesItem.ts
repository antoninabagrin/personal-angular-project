export class ClothesItem {
  public id: number | string;
  public imageUrl: string;
  public price: number;

  constructor(id: number | string, imageUrl: string, price: number) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.price = price;
  }
}
