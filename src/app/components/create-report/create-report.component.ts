import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

import { ICreateReport } from '../../model/interface/report';
import { ReportService } from '../../services/report.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-create-report',
  imports: [MatDialogContent, MatDialogActions, FormsModule, MatIcon],
  templateUrl: './create-report.component.html',
  styleUrl: './create-report.component.css'
})
export class CreateReportComponent {

  reportObj: ICreateReport = {};

  reportService = inject(ReportService);
  router = inject(Router);
  dialogRef = inject(MatDialogRef<HomeComponent>);

  idError: boolean = false;
  errorMessage: string | null = null;


  /**
  * Create a squad using reportService
  * If get status 409 (squad not found) show a warning 
  * If get another error status show a default warning 
  */
  create() {
    this.reportService.createReport(this.reportObj).subscribe({
      next: (data: ICreateReport) => {
        console.log('Report criado:', this.reportObj);
        this.dialogRef.close();
      },
      error: (err) => {
        if (err.status === 409) { //squad não encontrada
          this.errorMessage = 'Não existe squad com este ID';
          this.idError = true;
          this.reportObj.employeeId = 'Error';
        } else {
          this.errorMessage = 'Erro ao criar usuário. Tentar novamente mais tarde.';
        }
      }
    });
  }
}
