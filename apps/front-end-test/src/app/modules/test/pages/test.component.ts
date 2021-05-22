import { Component, OnInit } from '@angular/core';
import { GetTestDataService } from '../../../get-test-data.service';

@Component({
  selector: 'holition-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  jsonData: JsonData;

  constructor(private myService: GetTestDataService) {}

  ngOnInit(): void {
    this.myService.getTestData().subscribe((res: JsonData) => {
      this.jsonData = res;
    });
  }
}
// I used the interface of the json data to get intelisense suggestions
interface JsonData {
  data: {
    imageUrl: string;
    imageAlt: string;
    imageTopText: string;
    imageBottomText: string;
    textSize1: string;
    textSize2: string;
    textSize3: string;
  };
}
