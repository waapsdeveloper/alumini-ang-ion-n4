import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-endorsements',
  templateUrl: './skills-endorsements.component.html',
  styleUrls: ['./skills-endorsements.component.scss'],
})
export class SkillsEndorsementsComponent  implements OnInit {

  @Input('skills') skills: any[] = []
  constructor() { }

  ngOnInit() {}

}
