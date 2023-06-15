import { NgModule } from '@angular/core';
import { InfiniteMenuComponent } from './infinite-menu.component';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './OtherComponents/MenuItem/menu-item.component';

@NgModule({
  declarations: [
    InfiniteMenuComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InfiniteMenuComponent
  ]
})
export class InfiniteMenuModule { }
