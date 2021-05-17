import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class VideoBackgroundService {
  private _devices = {
    MOBILE: "mobile",
    TABLET: "tablet",
    LAPTOP: "laptop",
    DESKTOP: "desktop",
    WIDESCREEN: "widescreen"
  };

  public get device(): string {
    return this.getDevice(window.innerWidth);
  }

  private getDevice = (width: number): string => {
    if (width < 768) {
      return this._devices.MOBILE;
    } else if (width < 1024) {
      return this._devices.TABLET;
    } else if (width < 1366) {
      return this._devices.LAPTOP;
    } else if (width < 1920) {
      return this._devices.DESKTOP;
    } else {
      return this._devices.WIDESCREEN;
    }
  };
}
