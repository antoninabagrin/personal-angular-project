import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClothesItem } from 'src/app/data/models/clothesItem';
import { Produts } from '../../mock-products';
import { Product } from '../models/product';

export class ClothesService {
  private clothes: ClothesItem[] = [
    {
      id: 1,
      imageUrl:
        'https://static.zara.net/photos///2022/I/0/2/p/1608/331/800/2/w/387/1608331800_2_1_1.jpg?ts=1660215650923',
      price: 205.99,
    },
    {
      id: 2,
      imageUrl:
        'https://static.zara.net/photos///2022/I/0/2/p/5869/739/800/2/w/387/5869739800_2_5_1.jpg?ts=1660892320043',
      price: 129.99,
    },
    {
      id: 3,
      imageUrl:
        'https://static.zara.net/photos///2022/I/0/2/p/6987/330/626/2/w/609/6987330626_2_4_1.jpg?ts=1658833492135',
      price: 34.99,
    },
    {
      id: 4,
      imageUrl:
        'https://static.zara.net/photos///2022/I/0/2/p/5910/742/800/2/w/387/5910742800_2_1_1.jpg?ts=1660892278696',
      price: 89.99,
    },
    {
      id: 5,
      imageUrl:
        'https://static.zara.net/photos///2022/I/0/2/p/5986/184/250/2/w/387/5986184250_2_4_1.jpg?ts=1661325976608',
      price: 105.99,
    },
    {
      id: 6,
      imageUrl:
        'https://static.zara.net/photos///2022/I/0/2/p/0975/312/500/2/w/614/0975312500_2_4_1.jpg?ts=1661253774128',
      price: 54.99,
    },
    {
      id: 7,
      imageUrl:
        'https://static.zara.net/photos///2022/I/0/2/p/0975/310/400/2/w/387/0975310400_2_5_1.jpg?ts=1660672901408',
      price: 54.99,
    },
    {
      id: 8,
      imageUrl:
        'https://static.zara.net/photos///2022/I/0/2/p/8211/301/250/2/w/609/8211301250_2_1_1.jpg?ts=1659022834487',
      price: 69.99,
    },
    {
      id: 9,
      imageUrl:
        'https://static.zara.net/photos///2022/I/0/1/p/4799/036/123/2/w/387/4799036123_2_1_1.jpg?ts=1655898815835',
      price: 45.99,
    },
  ];
  favoriteItemChanged = new Subject<ClothesItem[]>();
  favoriteItem: ClothesItem[] = [];
  constructor() {}

  getClothes(): Observable<ClothesItem[]> {
    return of(this.clothes);
  }

  getHero(id: number | string) {
    return this.getClothes().pipe(
      // (+) before `id` turns the string into a number
      map(
        (clothes: ClothesItem[]) =>
          clothes.find((product) => product.id === +id)!
      )
    );
  }

  addtoFavorite(item: ClothesItem) {
    this.favoriteItem.push(item);
    this.favoriteItemChanged.next(this.favoriteItem.slice());
  }

  getFavoriteItems() {
    return this.favoriteItem;
  }

  getProducts(): Observable<Product[]> {
    const products = of(Produts);
    return products;
  }

  getProduct(id: number | string) {
    return this.getProducts().pipe(
      map(
        (products: Product[]) => products.find((product) => product.id === +id)!
      )
    );
  }
}
