import { Component } from '@angular/core';
import { TreeModel, NodeEvent, NodeSelectedEvent } from 'ng2-tree';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tree-script-custody';

  constructor(private route: Router) { }

  public tree: TreeModel = {
    value: 'Programming languages',
    children: [
      {
        id: 1,
        value: 'Tree',
        children: [{ value: 'Value 1' }, { value: 'Value 2' }, { value: 'Value 3' }]
      },
      {
        value: 'Example',
        children: [{ value: 'Value 1' }, { value: 'Value 2' }, { value: 'Value 3' }]
      }
    ]
  };

  public logEvent(e: NodeEvent): void {
    switch (e.node.value) {
      case 'Tree': {
        this.route.navigate(['tree']);
        //statements;
        break;
      }
      case 'Example': {
        this.route.navigate(['example']);
        //statements;
        break;
      }
    }
    console.log(e, "e");
    console.log(e.node, "e.node");
    console.log(e.node.value, "e.node.value");
  }


}
