import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './directives.html',
  styleUrls: ['./directives.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Directives {
  isStaticNoteVisible: boolean = false;
  isNoteVisible: boolean = true;

  monthNameStatic: string = 'Mar';
  monthNameDynamic: string = 'Mar';

  cityList: string[] = ['Manila', 'Cebu', 'Davao', 'Baguio'];

  studentList: any[] = [
    { stud_name: 'D Esquivel', course: 'Web Development', isActive: false },
    { stud_name: 'J Dizon', course: 'Network Administration', isActive: false },
    { stud_name: 'F Alejandro', course: 'Systems Development', isActive: false },
    { stud_name: 'J David', course: 'CyberSecurity', isActive: false },
    { stud_name: 'C Quintana', course: 'Web Development', isActive: true },
  ];

  showNote() {
    this.isNoteVisible = true;
  }

  hideNote() {
    this.isNoteVisible = false;
  }
}
