import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSkillsComponent } from './profile-skills.component';



@NgModule({
  declarations: [ProfileSkillsComponent],
  imports: [
    CommonModule
  ],
  exports:[ProfileSkillsComponent]
})
export class ProfileSkillsModule { }
