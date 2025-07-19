import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  iconsRow1 = [
    { name: 'HTML', icon: 'HTML.svg' },
    { name: 'CSS', icon: 'CSS.svg' },
    { name: 'JavaScript', icon: 'Js.svg' },
    { name: 'Typescript', icon: 'Ts.svg' },
    { name: 'Angular', icon: 'Angular.svg' },
    { name: 'Firebase', icon: 'Firebase.svg' },
    { name: 'Git', icon: 'Git.svg' },
  ];

iconsRow2 = [
  { name: 'Rest-Api', icon: 'Rest-Api.svg' },
    { name: 'Material-Design', icon: 'Material-Design.svg' },
    { name: 'Python', icon: 'Python.svg' },
    { name: 'Linux', icon: 'Linux.svg' },
    { name: 'Docker', icon: 'Docker.svg' },
    { name: 'SQL', icon: 'SQL.svg' },
    { name: 'Shell Scripting', icon: 'Shell-Scripting.svg' },
]

}
