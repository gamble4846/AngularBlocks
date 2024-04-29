import { NgModule } from '@angular/core';
import { InfiniteMenuComponent } from './infinite-menu.component';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './OtherComponents/MenuItem/menu-item.component';
import { CdkMenuModule } from '@angular/cdk/menu';

@NgModule({
  declarations: [InfiniteMenuComponent, MenuItemComponent],
  imports: [CommonModule, CdkMenuModule],
  exports: [InfiniteMenuComponent],
})
export class InfiniteMenuModule {}
