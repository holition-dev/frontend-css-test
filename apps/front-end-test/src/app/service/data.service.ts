import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JSONData } from '../data.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private httpService: HttpClient) {}

  getData(): Observable<JSONData> {
    return this.httpService.get<JSONData>('/assets/json/data.json', {});
  }
}
