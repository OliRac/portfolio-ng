import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: string[] = ["Python", "C++", "C#", "Java", "Javascript", "Typescript", "HTML/CSS" , "SQL" , "Unity", "Godot", "GLSL"];

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    
  }
}
