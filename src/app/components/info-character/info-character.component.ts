import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CharactersService } from "src/app/services/characters.service";
import { Character } from "../interfaces/character.interface";

@Component({
  selector: 'app-info-character',
  templateUrl: './info-character.component.html',
  styleUrls: ['./info-character.component.scss']
})
export class InfoCharacterComponent implements OnInit {

  character: Character | undefined;

  constructor(private activatedRoute: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( async params => {
      this.character = await this.charactersService.getById(Number(params.idcharacter));
      //console.log(params.idcharacter)
    })
  }

}
