import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { VideoBackgroundService } from '../services/video-background.service';
import { VideoBackgroundEvents } from './../enum/video-background-events.enum';
import { VideoBackgroundAssets } from './../interfaces/video-background-assets.interface';
import { VideoBackgroundInput } from './../interfaces/video-background-input.interface';

@Component({
  selector: 'video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoTag', { static: false })
  videoElemRef: ElementRef<HTMLVideoElement>;

  @Input() videoInput: VideoBackgroundInput;
  @Output() videoLoadedEmt: EventEmitter<string> = new EventEmitter();
  @Output() videoFinishedEmt: EventEmitter<string> = new EventEmitter();

  isVisibilitySupported: boolean;
  listenersEnabled: boolean;
  posterClass: string;
  posterUrl: string;
  status: VideoBackgroundEvents;
  videoElem: HTMLVideoElement;
  videoUrl: string;
  visibilityChangeEvent: string;
  visibilityState: string;

  constructor(
    private _ref: ChangeDetectorRef,
    private _videoSrv: VideoBackgroundService
  ) {}

  get isLoading() {
    return this.status === VideoBackgroundEvents.LOADING;
  }

  get isPlaying() {
    return this.status === VideoBackgroundEvents.PLAYING;
  }

  ngAfterViewInit() {
    this.videoElem = this.videoElemRef.nativeElement;
    // console.log("videoElemRef", this.videoElemRef);
    // console.log("videoElemRef.nativeElement", this.videoElemRef.nativeElement);
    this.showPoster();
    this.loadVideoFromDeviceSize();

    this.loadVisibilityFlags();
    this.addVisibilityListener();
  }

  ngOnDestroy() {
    this.removeVisibilityListener();
  }

  setVideoSource(input: VideoBackgroundAssets) {
    this.videoUrl = input.video;
    this.posterUrl = input.poster;
  }

  onLoadMetadata(e: Event, video: HTMLVideoElement) {
    // console.log('onLoadMetadata');
    video.muted = true;
    video.currentTime = 0;
    this.status = VideoBackgroundEvents.LOADED;
    this.videoLoadedEmt.emit(this.status);
    this.play();
  }

  onPlaying(e: Event) {
    // console.log('onPlaying');
    this.hidePoster();
    this.status = VideoBackgroundEvents.PLAYING;
  }

  onCompleteVideo(e: Event) {
    // console.log('onCompleteVideo');
    this.status = VideoBackgroundEvents.FINISH;
    this.videoFinishedEmt.emit(this.status);
    this.play();
  }

  load() {
    // console.log('videoUrl', this.videoUrl);
    this.status = VideoBackgroundEvents.LOADING;
    this._ref.detectChanges();
  }

  play() {
    if (this.videoElem) {
      this.videoElem.currentTime = 0;
      this.status = VideoBackgroundEvents.PLAYING;
      this.videoElem.play();
    }
  }

  stop() {
    if (this.videoElem) {
      this.status = VideoBackgroundEvents.STOPPED;
      this.videoElem.pause();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.loadVideoFromDeviceSize();
  }

  private loadVideoFromDeviceSize() {
    this.setVideoSource(this.videoInput[this._videoSrv.device]);
    this.load();
  }

  private showPoster() {
    this.posterClass = 'show';
    this._ref.detectChanges();
  }

  private hidePoster() {
    this.posterClass = 'hide';
    this._ref.detectChanges();
  }

  private addVisibilityListener() {
    this.listenersEnabled = true;
    if (
      typeof document.addEventListener !== 'undefined' &&
      this.visibilityState !== undefined
    ) {
      this.isVisibilitySupported = true;
      document.addEventListener(
        this.visibilityChangeEvent,
        (e: any) => {
          this.handleVisibilityChange();
        },
        false
      );
    } else {
      this.isVisibilitySupported = false;
    }
  }

  private removeVisibilityListener() {
    document.removeEventListener(
      this.visibilityChangeEvent,
      (e: any) => {
        this.handleVisibilityChange();
      },
      false
    );
  }

  // This flags allows us to know when the app has been put in background while using another app.
  private loadVisibilityFlags() {
    if (typeof document.hidden !== 'undefined') {
      this.visibilityState = 'hidden';
      this.visibilityChangeEvent = 'visibilitychange';
    } else if (typeof document['msHidden'] !== 'undefined') {
      this.visibilityState = 'msHidden';
      this.visibilityChangeEvent = 'msvisibilitychange';
    } else if (typeof document['webkitHidden'] !== 'undefined') {
      this.visibilityState = 'webkitHidden';
      this.visibilityChangeEvent = 'webkitvisibilitychange';
    }
  }

  private handleVisibilityChange() {
    if (document[this.visibilityState]) {
      this.stop();
    } else {
      if (this.isVisibilitySupported) {
        this.play();
      } else {
        document.location.reload();
      }
    }
  }
}
