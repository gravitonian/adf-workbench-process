import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { AuthenticationService } from 'ng2-alfresco-core';

/* Data for a menu item */
export class MenuItem {
  path: string;   /* The URL path to the page */
  title: string;  /* The Title of the page */
  icon?: string;  /* An optional icon for the page title */
}

@Injectable()
export class AppMenuService {
  // Make it possible to send an event about menu changed, so we can talk between components
  menuChanged = new Subject<any>();

  /* Keep track of which menu item is currently being active/selected */
  activeMenuItem$: Observable<MenuItem>;

  constructor(private router: Router,
              private titleService: Title,
              private authService: AuthenticationService) {
    this.activeMenuItem$ = this.router.events
      .filter(e => e instanceof NavigationEnd)
      .map(_ => this.router.routerState.root)
      .map(route => {
        const active = this.lastRouteWithMenuItem(route.root);

        if (active && active.title) {
          this.titleService.setTitle(active.title);
        }

        return active;
      });
  }

  /**
   * Get the MenuItem array that should be displayed.
   * @returns {MenuItem[]}
   */
  getMenuItems(): MenuItem[] {
    return this.router.config
      .filter(route =>
        route.data &&
        route.data.title &&
        !route.data.hidden &&
        this.isNotLoginRouteOrLoginRouteAndNotLoggedIn(route.data) &&
        this.isNotEcmRouteOrEcmRouteAndNoAuth(route.data) &&
        this.isNotBpmRouteOrBpmRouteAndNoAuth(route.data))
      .map(route => {
            if (!route.data.title) {
              throw new Error('Missing title for toolbar menu route ' + route.path);
            }
            return {
              path: route.path,
              title: route.data.title,
              icon: route.data.icon
            };
      });
  }

  fireMenuChanged() {
    this.menuChanged.next(null);
  }

  private isNotLoginRouteOrLoginRouteAndNotLoggedIn(data: any): boolean {
    return !data.isLogin || data.isLogin && !this.authService.isLoggedIn();
  }

  private isNotEcmRouteOrEcmRouteAndNoAuth(data: any): boolean {
    return  !data.needEcmAuth || data.needEcmAuth && this.authService.isEcmLoggedIn();
  }

  private isNotBpmRouteOrBpmRouteAndNoAuth(data: any): boolean {
    return !data.needBpmAuth || data.needBpmAuth && this.authService.isBpmLoggedIn();
  }

  private lastRouteWithMenuItem(route: ActivatedRoute): MenuItem {
    let lastMenu;

    do {
      lastMenu = this.extractMenu(route) || lastMenu;
    }
    while ((route = route.firstChild));

    return lastMenu;
  }

  private extractMenu(route: ActivatedRoute): MenuItem {
    const cfg = route.routeConfig;

    return cfg && cfg.data && cfg.data.title
      ? {path: cfg.path, title: cfg.data.title, icon: cfg.data.icon}
      : undefined;
  }
}
