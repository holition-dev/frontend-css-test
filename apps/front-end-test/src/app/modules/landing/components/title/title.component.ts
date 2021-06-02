import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'holition-test-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() title!: string;
}
