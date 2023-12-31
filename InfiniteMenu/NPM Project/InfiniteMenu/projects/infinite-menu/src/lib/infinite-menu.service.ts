import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class InfiniteMenuService {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  static LoadedIcons: any = {};

  public GetFluentUiIconsSvgName(iconName: string) {
    let finalName: string = "https://rohanpatel4846.github.io/FluentIconsV1/Icons/" + iconName + ".svg";
    let uniq = 'icon-' + iconName;
    if (!InfiniteMenuService.LoadedIcons[uniq]) {
      InfiniteMenuService.LoadedIcons[uniq] = " ";

      var xhr = new XMLHttpRequest();
      var url = finalName;
      xhr.open("GET", url, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          InfiniteMenuService.LoadedIcons[uniq] = this.sanitizer.bypassSecurityTrustHtml(xhr.responseText);
        }
      }
      xhr.send();
    }
    return InfiniteMenuService.LoadedIcons[uniq];
  }
}

export interface MenuData {
  Title: string,
  Children: Array<MenuData>,
  MenuLoc?:number,
  IsOpen?:boolean,
  CustomData?:any,
  Id?:string,
  Icon?: string,
  IconType?: IconType,
  OpenSubOnAnyClick?: boolean
}

export interface RGBModel{
  r:number,
  g:number,
  b:number
}

export enum IconType {
  SVG,
  FluentIcons,
  Image
}

export interface MenuStyles{
  Location:number,
  BackgroundColor?:string,
  TextColor?:string,
  PaddingLeft?:string,
  OnHoverBackgroundColor?:string,
  OnHoverTextColor?:string,
}
