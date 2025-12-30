import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

export const openCloseAnimation = trigger('openClose', [
  state('open', style({
    height: '*',
    opacity: 1
  })),
  state('closed', style({
    height: '0px',
    opacity: 0,
    overflow: 'hidden'
  })),
  transition('open <=> closed', [
    animate('0.3s ease-in-out')
  ]),
]);
