import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Episode } from "../components/interfaces/episode.inteface";

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private httpClient: HttpClient) { }

  getByUrl(url: string): Promise<Episode> {
    return this.httpClient.get<Episode>(url).toPromise()
  }
}
