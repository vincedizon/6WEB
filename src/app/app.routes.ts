import { Routes } from '@angular/router';
import { TemplateDemoComponent } from './template-demo/template-demo.component';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo.component';

export const routes: Routes = [
  { path: 'template', component: TemplateDemoComponent },
  { path: 'reactive', component: ReactiveDemoComponent },
  { path: '', redirectTo: '/template', pathMatch: 'full' }
];
