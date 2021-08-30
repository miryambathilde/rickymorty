import { Input } from "@angular/core";
import { Component, OnInit } from '@angular/core';
import { LocationsService } from "src/app/services/locations.service";
import { Location } from "../interfaces/location.interface";


@Component({
  selector: 'app-card-location',
  templateUrl: './card-location.component.html',
  styleUrls: ['./card-location.component.scss']
})
export class CardLocationComponent implements OnInit {

  @Input() url: string = "";
  localizacion: Location | undefined;

  constructor(private locationsService: LocationsService) { }

  ngOnInit() {}

  async ngOnChanges(): Promise<any> {
    if (this.url !== null) {
      try {
        this.localizacion = await this.locationsService.getByUrl(this.url);
      } catch (err: any) {
        console.log(err)
      }
    }
  }
}
