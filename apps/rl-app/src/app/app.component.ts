import { Component } from '@angular/core';
import { EntityManager } from 'rad-ecs';

@Component({
  selector: 'rad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rl-app';

  em = new EntityManager();
}
