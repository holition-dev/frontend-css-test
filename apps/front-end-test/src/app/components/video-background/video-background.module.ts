import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { VideoBackgroundComponent } from "./component/video-background.component";

@NgModule({
  declarations: [VideoBackgroundComponent],
  imports: [CommonModule],
  exports: [VideoBackgroundComponent]
})
export class VideoBackgroundModule {}
