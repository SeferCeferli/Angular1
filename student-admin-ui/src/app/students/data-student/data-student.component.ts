import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/Models/ui-models/student.models';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-data-student',
  templateUrl: './data-student.component.html',
  styleUrls: ['./data-student.component.css']
})
export class DataStudentComponent implements OnInit {
  studentId: string | null | undefined;
  students: Student = {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    mobile: 0,
    genderId: '',
    profileImgUrl: '',
    gender: {
      id: '',
      description: '',
    },
    adress: {
      id: '',
      physicalAdress: '',
      postalAdress: '',
    },
  };
  constructor(
    private readonly studentService: StudentsService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.studentId = params.get('id');
      this.studentService.getStudent(this.studentId).subscribe(
        (sucsess) => {
          debugger;
          this.students = sucsess;
        },
        (err) => {}
      );
    });
  }
}

