import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
    {
      path: '',
      component: LayoutComponent, // The layout component wraps child routes
      children: [
        { path: '', component: LayoutComponent }, // Default route
        { path: 'layout', component: LayoutComponent }, // About page
      ],
    },
  ];
