import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

import { IStudent } from '../interfaces/iStudents';
import { StudentService } from '../services/student.service'; 


@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit, OnDestroy {
  studentsList: IStudent[];
  studentServiceSubscription: Subscription;

  constructor(private studentService: StudentService, private router: Router) {
  }

  ngOnInit(): void {
    this.studentServiceSubscription = this.studentService.getAllStudents()
      .subscribe((data: IStudent[]) => {
        this.studentsList = data;
        console.log(this.studentsList);
      });

  }

  ngOnDestroy() {
    console.log('Destroying ...');
    this.studentServiceSubscription.unsubscribe()
  }

}
