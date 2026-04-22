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
  animations: [buttonHoverAnimation],
})
export class Contact {
  isVisible: boolean = false;
  errors: boolean = false;
  reset: boolean = false;

  contactData = {
    name: '',
    email: '',
    subject: '',
    box: '',
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      try {
        this.sendEmail();
      } catch (error) {
        console.error('Error sending email:', error);
      }
      this.resetForm(ngForm);
      this.sent();
    } else {
      this.checkMail();
      this.checkSubject();
      this.checkName();
      this.checkBox();
    }
  }

  async sendEmail() {
    await fetch('/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.contactData),
    });
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
      box: '',
    };
    this.clearErrors();
  }

  clearErrors() {
    let inputs = document.querySelectorAll('.txt-input');
    inputs.forEach((input) => {
      input.classList.remove('error');
    });
    let labels = document.querySelectorAll('label');
    labels.forEach((label) => {
      label.classList.remove('error');
    });
    let checkbox = document.getElementById('policy') as HTMLInputElement;
    if (checkbox) {
      checkbox.classList.remove('error');
    }
    this.errors = false;
  }

  recheckErrors(name: string) {
    if (this.errors) {
      switch (name) {
        case 'email':
          this.checkMail(true);
          break;
        case 'subject':
          this.checkSubject(true);
          break;
        case 'name':
          this.checkName(true);
          break;
        case 'box':
          this.checkBox();
          break;
      }
    }
  }

  checkSubject(recheck: boolean = false) {
    let subject = document.getElementById('subject') as HTMLInputElement;
    let subjectTitle = document.getElementById(
      'subjectTitle',
    ) as HTMLLabelElement;
    if (subject.value.length < 1) {
      subjectTitle.innerText = this.lang.form.subject[2];
      subjectTitle.classList.add('error');
      subject.classList.add('error');
      this.errors = true;
    } else if (this.reset || recheck) {
      subjectTitle.innerText = this.lang.form.subject[0];
      subjectTitle.classList.remove('error');
      subject.classList.remove('error');
    }
  }

  checkMail(recheck: boolean = false) {
    let email = document.getElementById('email') as HTMLInputElement;
    let emailTitle = document.getElementById('emailTitle') as HTMLLabelElement;
    if (email.value.length < 1) {
      emailTitle.innerText = this.lang.form.email[2];
      emailTitle.classList.add('error');
      email.classList.add('error');
      this.errors = true;
    } else if (email.pattern !== '' && !email.value.match(email.pattern)) {
      emailTitle.innerText = this.lang.form.email[2];
      emailTitle.classList.add('error');
      email.classList.add('error');
      this.errors = true;
    } else if (this.reset || recheck) {
      emailTitle.innerText = this.lang.form.email[0];
      emailTitle.classList.remove('error');
      email.classList.remove('error');
    }
  }

  checkName(recheck: boolean = false) {
    let name = document.getElementById('name') as HTMLInputElement;
    let nameTitle = document.getElementById('nameTitle') as HTMLLabelElement;
    if (name.value.length < 1) {
      nameTitle.innerText = this.lang.form.name[2];
      nameTitle.classList.add('error');
      name.classList.add('error');
      this.errors = true;
    } else if (this.reset || recheck) {
      nameTitle.innerText = this.lang.form.name[0];
      nameTitle.classList.remove('error');
      name.classList.remove('error');
    }
  }

  checkBox() {
    let checkbox = document.getElementById('policy') as HTMLInputElement;
    if (!checkbox.checked) {
      checkbox.classList.add('error');
      this.errors = true;
    } else {
      checkbox.classList.remove('error');
    }
  }

  langDE = langDE;
  langEN = langEN;
  lang = langEN;

  ngOnInit() {
    this.langToggle();
  }

  constructor(private langService: LangService) {}

  langToggle() {
    this.lang = localStorage.getItem('lang') === 'langDE' ? langDE : langEN;
    this.langService.aclickEvent.subscribe((message) => {
      if (App.lang === 'langDE') {
        this.lang = langDE;
      } else {
        this.lang = langEN;
      }
    });
  }

  standardHoverAnimation = false;

  toggleHover() {
    this.standardHoverAnimation = !this.standardHoverAnimation;
  }
}
