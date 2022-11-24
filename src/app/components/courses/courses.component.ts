import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['_id','name','category'];

  constructor(
      private coursesService: CoursesService,
      private dialog: MatDialog) { 
    this.courses$ = this.coursesService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar a lista de cursos.');
        return of([])
      })
    );
  }

  onError(msgError: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: msgError
    });
  }

  ngOnInit(): void {
  }

}
