import { Routes } from '@angular/router';
import { TemplateDemoComponent } from './template-demo/template-demo.component';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo.component';
import { CustomFormsComponent as CustomForms } from './custom-forms/custom-forms';
export const routes: Routes = [
  { path: 'template', component: TemplateDemoComponent },
  { path: 'reactive', component: ReactiveDemoComponent },
  { path: 'custom-forms', component: CustomForms },
  { path: '', redirectTo: '/template', pathMatch: 'full' }
];
