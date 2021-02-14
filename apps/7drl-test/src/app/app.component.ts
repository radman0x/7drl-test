import { Component } from '@angular/core';
import { EntityManager, EntityId } from 'rad-ecs';
import { Knowledge, GridPos, Renderable, KnowledgeMap } from '@rad/rl-ecs';
import { ValueMap } from '@rad/rl-utils';

@Component({
  selector: 'rad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '7drl-test';

  em = new EntityManager();

  viewerId: EntityId;

  constructor() {
    const currentEntity = this.em.create(
      new GridPos({ x: 1, y: 1, z: 1 }),
      new Renderable({ image: 'Elemental0-11.png', zOrder: 1 })
    ).id;
    const current: KnowledgeMap = new ValueMap();
    current.set(new GridPos({ x: 0, y: 0, z: 1 }), [currentEntity]);
    this.viewerId = this.em.create(
      new GridPos({ x: 1, y: 2, z: 1 }),
      new Knowledge({ current, history: new ValueMap() })
    ).id;
  }
}
