import { Component, Input } from '@angular/core';
import { Route } from '@angular/router';
import { routes } from 'src/app/entities/routing/array.routing';

@Component({
  selector: 'navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent {
  @Input() availablePages!: string[];

  public arrayPath = routes.map((item: Route) => item.path);
}
