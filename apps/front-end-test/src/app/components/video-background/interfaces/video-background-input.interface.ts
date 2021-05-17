import { VideoBackgroundAssets } from "./video-background-assets.interface";

export interface VideoBackgroundInput {
  mobile?: VideoBackgroundAssets;
  tablet?: VideoBackgroundAssets;
  laptop?: VideoBackgroundAssets;
  desktop?: VideoBackgroundAssets;
  widescreen?: VideoBackgroundAssets;
}
