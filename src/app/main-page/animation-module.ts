import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

export const buttonHoverAnimation = trigger('buttonHover', [
  state('normal', style({
    transform: 'translate(0, 0)',
    boxShadow: '2px 4px 2px white',
    backgroundColor: 'transparent',
  })),
  state('hover', style({
    transform: 'translate(2px, 4px)',
    backgroundColor: '#e77e60'
  })),
  transition('normal => hover', [
    animate('200ms ease-in-out') 
  ]),
  transition('hover => normal', [
    animate('300ms ease-in-out') 
  ])
]);

export const buttonHoverAnimationBlack = trigger('buttonHoverBlack', [
  state('normal', style({
    transform: 'translate(0, 0)',
    boxShadow: '2px 4px 2px black',
    backgroundColor: 'transparent',
  })),
  state('hover', style({
    transform: 'translate(2px, 4px)',
    backgroundColor: '#e77e60'
  })),
  transition('normal => hover', [
    animate('200ms ease-in-out') 
  ]),
  transition('hover => normal', [
    animate('300ms ease-in-out') 
  ])
]);

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: []
})
export class AnimationModule { 

}
