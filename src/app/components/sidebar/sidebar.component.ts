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

  constructor(private charactersService: CharactersService) { }

  async ngOnInit(): Promise<any> {
    const response = await this.charactersService.getByPage();
    //console.log(results)
    this.arrCharacters = response.results;
  }

}
