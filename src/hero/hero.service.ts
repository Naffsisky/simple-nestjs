import { Injectable } from '@nestjs/common';
import { Hero } from './interfaces/hero.interface';

@Injectable()
export class HeroService {
  private readonly heroes: Hero[] = [
    {
      id: 0,
      name: 'Aurora',
      gambar: 'ice.jpg',
    },
    {
      id: 1,
      name: 'Akai',
      gambar: 'panda.jpg',
    },
    {
      id: 2,
      name: 'Johnson',
      gambar: 'mobil.jpg',
    },
    {
      id: 3,
      name: 'Franco',
      gambar: 'ndut.jpg',
    },
  ];
  create(hero: Hero) {
    this.heroes.push(hero);
  }

  findAll(): Hero[] {
    return this.heroes;
  }
}
