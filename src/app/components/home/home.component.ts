import { Component, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';

import { EmployeeComponent } from '../employee/employee.component';
import { SquadComponent } from '../squad/squad.component';
import { CreateReportComponent } from '../create-report/create-report.component';

@Component({
  selector: 'app-home',
  imports: [
    EmployeeComponent,
    SquadComponent,
    MatTabsModule,
    MatToolbarModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedTab: number = 0; // Initializes the default tab as the first one (Squads)
  dialog = inject(MatDialog);
  route = inject(ActivatedRoute);

  /**
   * On component initialization, retrieves the "tab" query parameter from the URL and sets the selected tab accordingly.
   * If the "tab" parameter is "usuarios", it sets the selected tab to 1 (the "Usuários" tab).
   */
  ngOnInit() {
    const tabParam = this.route.snapshot.queryParamMap.get('tab');
    if (tabParam === 'usuarios') {
      this.selectedTab = 1;
    }
  }

  /**
   * Open a dialog to create report
   */
  openDialog() {
    this.dialog.open(CreateReportComponent, {
      width: '400px',
    });
  }
}
