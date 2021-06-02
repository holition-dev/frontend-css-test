import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './pages/landing.component';
import { TitleComponent } from './components/title/title.component';
import { ImageBoxComponent } from './components/image-box/image-box.component';
import { ContentBoxComponent } from './components/content-box/content-box.component';

@NgModule({
  declarations: [LandingComponent, TitleComponent, ImageBoxComponent, ContentBoxComponent],
  imports: [CommonModule, LandingRoutingModule],
  exports: [LandingComponent],
})
export class LandingModule {}
