import { Component } from '@angular/core';
import { EntityManager } from 'rad-ecs';
import { Renderable } from 'libs/rl-ecs/src/lib/components/renderable.model';
import { GridPos } from 'libs/rl-ecs/src/lib/components/position.model';

@Component({
  selector: 'rad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rl-app';

  em = new EntityManager();

  constructor() {
    this.em.createEntity(
      new Renderable({ image: 'Elemental0-11.png', zOrder: 100 }),
      new GridPos({ x: 3, y: 3, z: 3 })
    );
  }
}
