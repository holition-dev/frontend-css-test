import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'holition-test-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss']
})
export class ImageBoxComponent {
  @Input() imageTopText?: string;
  @Input() imageBottomText?: string;
  @Input() imageAlt?: string;
  @Input() imageUrl?: string;
}
