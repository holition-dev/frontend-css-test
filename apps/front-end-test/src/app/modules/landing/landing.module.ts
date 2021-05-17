import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VideoBackgroundModule } from '../../components/video-background/video-background.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './pages/landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, VideoBackgroundModule, LandingRoutingModule],
  exports: [LandingComponent],
})
export class LandingModule {}
