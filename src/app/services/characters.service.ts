import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  baseUrl: string = 'https://rickandmortyapi.com/api/character/';

  constructor(private httpClient: HttpClient) {}

  getByPage(url: string = this.baseUrl): Promise<any> {
    return this.httpClient.get<any>(url).toPromise();
  }
}
