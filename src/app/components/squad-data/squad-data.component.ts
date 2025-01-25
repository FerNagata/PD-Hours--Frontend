import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule, DatePipe } from '@angular/common';

import { ISquadMembersData } from '../../model/interface/report';
import { SquadService } from '../../services/squad.service';
import { ReportService } from '../../services/report.service';
import { ISquadData, ISquadDataAverageHours } from '../../model/interface/squad';
import { CreateUserComponent } from '../create-user/create-user.component';

@Component({
  selector: 'app-squad-data',
  imports: [MatTableModule, MatDatepickerModule, FormsModule, MatToolbarModule, CommonModule],
  providers: [DatePipe],
  templateUrl: './squad-data.component.html',
  styleUrl: './squad-data.component.css'
})
export class SquadDataComponent {
  squadId: number = 0;
  squadName: string = '';

  start_date: Date = new Date();
  end_date: Date = new Date();

  squadService = inject(SquadService);
  reportService = inject(ReportService);
  dialog = inject(MatDialog);

  route = inject(ActivatedRoute);
  router = inject(Router);

  squadData: ISquadMembersData[] | null = [];
  displayedColumns: string[] = ['member', 'description', 'spentHours', 'createdAt'];
  totalHours: number = 0;
  averageHoursPerDay: number = 0;

  /**
   *  On component initialization, retrieves the params pass by the route
   */
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.squadId = params['squadId'];
      this.squadName = params['squadName'];
    });
  }


  /**
   * Get all members reports from a period of time 
   * 
   * Get the total amout of hours spent based on the reports
   * 
   * Get the average amout of hours spent based on the reports
   */
  getData() {
    this.reportService.getAllMemberReports(this.squadId, this.start_date, this.end_date).subscribe((data: ISquadMembersData[]) => {
      this.squadData = data;
      this.squadService.getTotalHoursSpent(this.squadId, this.start_date, this.end_date).subscribe((data: ISquadData) => {
        console.log(data)
        this.totalHours = data.totalHours;
      }, error => {
        alert('Erro ao tentar pegar o total de horas gastas');
      });

      this.squadService.getAverageHoursSpent(this.squadId, this.start_date, this.end_date).subscribe((data: ISquadDataAverageHours) => {
        console.log(data)
        this.averageHoursPerDay = data.averageHoursPerDay;
      }, error => {
        alert('Erro ao tentar pegar a média de horas por dia gastas');
      });
    }, error => {
      if (error.status == 404) {
        this.squadData = null
      }
    });
  }

  /**
  * Go back to home page
  */
  goBack(): void {
    this.router.navigate(['/home'], { queryParams: { tab: 'squad' } });
  }

  /**
   * Open dialog to create new employee
   */
  openDialog() {
    this.dialog.open(CreateUserComponent, {
      width: '400px',
    });
  }
}
