import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetTestDataService {
  constructor(private httpService: HttpClient) {}

  getTestData() {
    return this.httpService.get('/assets/json/data.json');
  }
}
