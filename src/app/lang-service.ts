import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LangService {
  @Output() aclickEvent = new EventEmitter<string>();

  ClickEvent(message: string) {
    this.aclickEvent.emit(message);
  }

}
