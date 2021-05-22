import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './pages/test.component';
import { TestImageComponent } from './pages/test-image/test-image.component';

@NgModule({
  declarations: [TestComponent, TestImageComponent],
  imports: [CommonModule, TestRoutingModule],
  exports: [TestComponent],
})
export class TestModule {}
