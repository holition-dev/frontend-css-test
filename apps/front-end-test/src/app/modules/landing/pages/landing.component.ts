import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { Observable, Subscription } from 'rxjs';
import { JSONData } from '../../../data.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'holition-test-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  title = 'front-end-test';
  JSONData: JSONData;

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((res: JSONData) => {
      this.JSONData = res;
    });
  }

}
