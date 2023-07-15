import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { RouterModule } from '@angular/router';
import { routes } from '../entities/routing/array.routing';
import { SubHeaderComponent } from './sub-header/sub-header.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavigationMenuComponent, SubHeaderComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), FormsModule],
  exports: [NavigationMenuComponent, SubHeaderComponent],
})
export class SharedModule {}
