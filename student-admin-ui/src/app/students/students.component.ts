import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../Models/ui-models/student.models';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
students:Student[]=[];
displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'email', 'mobile', 'profileImgUrl', 'gender','edit'];
dataSource:MatTableDataSource<Student>=new MatTableDataSource<Student>();
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
filterString='';
  constructor(private studentService:StudentsService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      
      (sucsess)=>{
        this.students=sucsess;
        this.dataSource=new MatTableDataSource<Student>(this.students);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort
      },
      (err)=>{

      }
    )

  }
  filterStudents()
  {
    this.dataSource.filter=this.filterString.trim().toLocaleLowerCase()
  }
}
