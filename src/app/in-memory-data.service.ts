import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Mihai' },
      { id: 2, name: 'Anasasia' },
      { id: 3, name: 'Vasile' },
      { id: 4, name: 'Andrei' },
      { id: 5, name: 'Lilia' },
      { id: 6, name: 'Georgeta' },
      { id: 7, name: 'Marcel' },
      { id: 8, name: 'Mihai' },
      { id: 9, name: 'Ana' },
      { id: 10, name: 'Ana Maria' },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
