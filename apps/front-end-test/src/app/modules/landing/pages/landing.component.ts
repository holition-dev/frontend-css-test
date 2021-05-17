import { Component, OnInit } from '@angular/core';
import { VideoBackgroundInput } from '../../../components/video-background/interfaces/video-background-input.interface';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  title = 'front-end-test';
  videoInput: VideoBackgroundInput;

  constructor() {
    this.videoInput = {
      mobile: {
        video: './assets/videos/hello.mp4',
      },
    };
    console.log(this.title);
  }

  public ngOnInit(): void {}
}
