import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Krillin',
      power: 500,
    },
  ];
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();
  //public onDeleteId = new EventEmitter<number>();
  onDeleteCharacter(index?: string): void {
    if (!index) return;
    this.onDeleteId.emit(index);
    console.log({ index });
    // TODO: Emitir el ID del personaje
  }
}
