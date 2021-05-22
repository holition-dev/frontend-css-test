import { Component, Input } from '@angular/core';

@Component({
  selector: 'holition-test-details',
  template: ` <div class="test__details">
    <p class="details__textSize1">{{ textSize1 }}</p>
    <p class="details__textSize2">{{ textSize2 }}</p>
    <p class="details__textSize3">{{ textSize3 }}</p>
  </div>`,
  styleUrls: ['./test-details.component.scss'],
})
export class TestDetailsComponent {
  @Input() textSize1: string;
  @Input() textSize2: string;
  @Input() textSize3: string;
}
