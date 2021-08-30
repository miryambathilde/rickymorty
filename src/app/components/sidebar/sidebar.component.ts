import { Component, OnInit } from '@angular/core';
import { CharactersService } from "src/app/services/characters.service";
import { Character } from "../interfaces/character.interface";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  arrCharacters: Character[] = [];
  next: string = '';
  prev: string = '';

  constructor(private charactersService: CharactersService) {}

  async ngOnInit(): Promise<any> {
    const response = await this.charactersService.getByPage();
    this.next = response.info.next;
    this.prev = response.info.prev;
    //console.log(results)
    this.arrCharacters = response.results;
  }

  async prevPage() {
    const response = await this.charactersService.getByPage(this.prev);
    this.next = response.info.next;
    this.prev = response.info.prev;
    this.arrCharacters = response.results;
  }

  async nextPage() {
    const response = await this.charactersService.getByPage(this.next);
    this.next = response.info.next;
    this.prev = response.info.prev;
    this.arrCharacters = response.results;
  }
}
