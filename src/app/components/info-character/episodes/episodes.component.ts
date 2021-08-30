import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CharactersService } from "src/app/services/characters.service";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  arrEpisodes: string[] = [];

  constructor(private activatedRoute: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe(async params => {
      const character = await this.charactersService.getById(Number(params.idcharacter));
      this.arrEpisodes = character.episode;
      console.log(params);
    })
  }

}
