import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CharactersService } from "src/app/services/characters.service";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  character: Character | undefined;

  constructor(private activatedRoute: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe(async params => {
      //params.idcharacter
      try {
        this.character = await this.charactersService.getById(Number(params.idcharacter))
        //console.log(this.character);
      } catch (err) {
        console.log(err);
      }
    })
  }

}
