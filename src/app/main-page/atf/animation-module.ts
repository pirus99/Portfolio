import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';


// Export your animation as a constant to use in components
export const buttonHoverAnimation = trigger('buttonHover', [
  state('normal', style({
    transform: 'scale(1) translate(0, 0)',
    boxShadow: '2px 4px 2px white',
    backgroundColor: '',
  })),
  state('hover', style({ 
    transform: 'scale(1) translate(2px, 4px)',
    backgroundColor: '#e77e60'
  })),
  transition('normal => hover', [
    animate('25ms ease-in-out')
  ]),
  transition('hover => normal', [ 
    animate('250ms ease-in-out')
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
