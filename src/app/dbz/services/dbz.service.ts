import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 500,
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 200,
    },
  ];

  addCharacter(character: Character): void {
    //  ...character -> pasa todas las propiedades de character como
    //  name, power de manera individual

    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };

    this.characters.unshift(newCharacter); // add element the first position array
    // this.characters.push(character); // add element the last position array
  }

  deleteCharacterById(id: string): void {
    //console.log( index);
    this.characters.splice(
      this.characters.findIndex((character) => character.id === id),
      1
    );
  }

  constructor() {}
}
