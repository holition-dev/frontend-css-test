import { Component, Input } from '@angular/core';

@Component({
  selector: 'holition-test-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.scss']
})
export class ContentBoxComponent {
  @Input() textSize1?: string;
  @Input() textSize2?: string;
  @Input() textSize3?: string;
}
