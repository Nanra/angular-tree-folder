import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'tree',
        component: TreeComponent
      },
      {
        path: 'example',
        component: ExampleComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
