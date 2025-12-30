import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

export const collapsedExpandedAnimation = trigger('collapse', [
  state('collapsed', style({
    height: '0px',
    overflow: 'hidden',
    opacity: 0
  })),
  state('expanded', style({
    height: '*',
    opacity: 1
  })),
  transition('collapsed <=> expanded', [
    animate('300ms ease-in-out')
  ])
]);
