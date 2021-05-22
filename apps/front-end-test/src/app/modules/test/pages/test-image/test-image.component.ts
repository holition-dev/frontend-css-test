import { Component, Input } from '@angular/core';

@Component({
  selector: 'holition-test-image',
  template: `
    <div class="test_image">
      <img [src]="imageUrl" [alt]="imageAlt" />
      <p class="image__topText">{{ imageTopText }}</p>
      <p class="image__bottomText">{{ imageBottomText }}</p>
    </div>
  `,
  styleUrls: ['./test-image.component.scss'],
})
export class TestImageComponent {
  @Input() imageUrl: string;
  @Input() imageAlt: string;
  @Input() imageTopText: string;
  @Input() imageBottomText: string;
}
