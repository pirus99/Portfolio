import { Component } from '@angular/core';
import { LangService } from '../../lang-service';
import { App } from '../../app';
import * as langDE from './de.json';
import * as langEN from './en.json';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { buttonHoverAnimation } from '../animation-module';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  animations: [buttonHoverAnimation]
})
export class Contact {
  isVisible = false;

  contactData = {
    name: '',
    email: '',
    subject: '',
    box: ''
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log('Contact form submitted:', this.contactData);
      this.resetForm(ngForm);
      this.sent();
    } else {
      this.checkMail();
      this.checkSubject();
      this.checkName();
      this.checkBox();
    }
  }

  sent() {
    let sentMessage = document.getElementById('sentMessage') as HTMLDivElement;
    if (sentMessage) {
      sentMessage.classList.remove('sent-message');
      setTimeout(() => {
        sentMessage.classList.add('sent-message');
      }, 3000);
    }
  }

  reset = false;

  resetForm(ngForm: NgForm) {
    this.reset = true;
    this.checkMail();
    this.checkSubject();
    this.checkName();
    this.checkBox();
    ngForm.resetForm();
    this.contactData = {
      name: '',
      email: '',
      subject: '',
      box: ''
    };
    this.clearErrors();
  }

  clearErrors() {
    let inputs = document.querySelectorAll('.txt-input');
    inputs.forEach((input) => {
      input.classList.remove('error');
    });
    let checkbox = document.getElementById('policy') as HTMLInputElement;
    if (checkbox) {
      checkbox.classList.remove('error');
    }
  }

  checkSubject() {
    let subject = document.getElementById('subject') as HTMLInputElement;
    if (subject.value.length < 1) {
      subject.placeholder = this.lang.form.subject[2];
      subject.classList.add('error');
    } else if (this.reset) {
      subject.placeholder = this.lang.form.subject[1];
      subject.classList.add('error');
    }
  }

  checkMail() {
    let email = document.getElementById('email') as HTMLInputElement;
    if (email.value.length < 1) {
      email.placeholder = this.lang.form.email[2];
      email.classList.add('error');
    } else if (email.pattern !== '' && !email.value.match(email.pattern)) {
      email.value = '';
      email.placeholder = this.lang.form.email[2];
      email.classList.add('error');
    } else if (this.reset) {
      email.placeholder = this.lang.form.email[1];
      email.classList.add('error');
    }
  }

  checkName() {
    let name = document.getElementById('name') as HTMLInputElement;
    if (name.value.length < 1) {
      name.placeholder = this.lang.form.name[2];
      name.classList.add('error');
    } else if (this.reset) {
      name.placeholder = this.lang.form.name[1];
      name.classList.add('error');
    }
  }

  checkBox() {
    let checkbox = document.getElementById('policy') as HTMLInputElement;
    if (!checkbox.checked) {
      checkbox.classList.add('error');
    }
  }

  langDE = langDE;
  langEN = langEN;
  lang = langEN;

  ngOnInit() {
    this.langToggle();
  }

  constructor(private langService: LangService) { }

  langToggle() {
    this.langService.aclickEvent.subscribe((message) => {
      if (App.lang === 'langDE') {
        this.lang = langDE;
      } else {
        this.lang = langEN;
      }
    })
  }

  standardHoverAnimation = false;

  toggleHover() {
    this.standardHoverAnimation = !this.standardHoverAnimation;
  }
}
