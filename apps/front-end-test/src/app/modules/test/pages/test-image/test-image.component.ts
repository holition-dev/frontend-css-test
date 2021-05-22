import { Component, Input } from '@angular/core';

@Component({
  selector: 'holition-test-image',
  template: `
    <div class="test__image">
      <img [src]="imageUrl" [alt]="imageAlt" />
      <div class="image__overlay">
        <p class="image__topText">{{ imageTopText }}</p>
        <p class="image__bottomText">{{ imageBottomText }}</p>
      </div>
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
