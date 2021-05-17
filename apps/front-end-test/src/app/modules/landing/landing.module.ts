import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './pages/landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, LandingRoutingModule],
  exports: [LandingComponent],
})
export class LandingModule {}
