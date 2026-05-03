import { Component } from '@angular/core';

@Component({
  selector: 'app-peel',
  imports: [],
  templateUrl: './peel.html',
  styleUrl: './peel.scss',
})
export class Peel {
  peelMobile = 'none';
  peel = 'none';
  peelTrig = false;

  peelHandler() {
    this.peelDesk();
    this.peelMobi();
  }

  peelDesk() {
    if (this.peel === 'none' && !this.peelTrig) {
      const peelDefault = document.getElementById('peelDefault');
      if (peelDefault) {
        peelDefault.style.opacity = '1';
        peelDefault.style.zIndex = '10';
      }
    } else if (this.peel === 'start') {
      const peelDefault = document.getElementById('peelDefault');
      if (peelDefault) {
        peelDefault.style.opacity = '0';
        peelDefault.style.zIndex = '4';
      }
    } else {
      const peelHover = document.getElementById('peelHover');
      if (peelHover) {
        peelHover.style.opacity = '0';
        peelHover.style.zIndex = '4';
        this.peelTrig = true;
      }
    }
  }

  peelMobi() {
    if (this.peelMobile === 'none' && !this.peelTrig) {
      const peelDefault = document.getElementById('peelDefaultMobi');
      if (peelDefault) {
        peelDefault.style.opacity = '1';
        peelDefault.style.zIndex = '10';
      }
    } else {
      const peelDefault = document.getElementById('peelDefaultMobi');
      if (peelDefault) {
        peelDefault.style.opacity = '0';
        peelDefault.style.zIndex = '4';
      }
      setTimeout(() => {
        const peelHover = document.getElementById('peelHoverMobi');
        if (peelHover) {
          peelHover.style.opacity = '0';
          peelHover.style.zIndex = '4';
          this.peelTrig = true;
        }
      }, 100);
    }
  }
}
