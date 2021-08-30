import { Input } from "@angular/core";
import { Component, OnInit } from '@angular/core';
import { EpisodesService } from "src/app/services/episodes.service";
import { Episode } from "../interfaces/episode.inteface";

@Component({
  selector: 'app-card-episodes',
  templateUrl: './card-episodes.component.html',
  styleUrls: ['./card-episodes.component.scss']
})
export class CardEpisodesComponent implements OnInit {

  @Input() url: string = "";
  episode: Episode | undefined;

  constructor(private episodesService: EpisodesService) { }

  async ngOnInit(): Promise<Episode> {
    return this.episode = await this.episodesService.getByUrl(this.url)
    //console.log(this.url)
  }

}
