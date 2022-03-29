import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataStudentComponent } from './students/data-student/data-student.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:"",component:StudentsComponent},
  {path:"students",component:StudentsComponent},
  {path:"students/:id",component:DataStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
