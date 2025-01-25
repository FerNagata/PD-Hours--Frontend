import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { IEmployee } from '../../model/interface/employee';
import { EmployeeService } from '../../services/employee.service';
import { CreateUserComponent } from '../create-user/create-user.component';

@Component({
  selector: 'app-employee',
  imports: [MatTableModule, CreateUserComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employeesList: IEmployee[] = [];
  displayedColumns: string[] = ['id', 'name', 'estimatedHours', 'squadId'];

  employeeService = inject(EmployeeService);
  dialog = inject(MatDialog);

  /**
   *  On component initialization, retrieves all employee.
   */
  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe((data: IEmployee[]) => {
      this.employeesList = data;
    }, error => {
      if(error.status != 404){
        alert('Erro ao tentar pegar os funcionários');
      }
    });
  }

  /**
   * Open dialog to create a new employee
   */
  openDialog() {
    this.dialog.open(CreateUserComponent, {
      width: '400px',
    });
  }
}
