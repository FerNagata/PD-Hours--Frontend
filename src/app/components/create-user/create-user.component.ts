import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatDialogActions,
  MatDialogContent,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

import { ICreateEmployee } from '../../model/interface/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-create-user',
  imports: [MatDialogContent, MatDialogActions, FormsModule, MatIcon],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  employeeObj: ICreateEmployee = {};

  employeeService = inject(EmployeeService);
  router = inject(Router);

  squadError: boolean = false;
  errorMessage: string | null = null;
  nameError: boolean = false;

  /**
   * Create a new employee
   * If get status 404 (squad not found) show a warning 
   * If get status 409 (employee name already exist) show a warning 
   * If get status 422 (entity not process) show a warning 
   */
  create() {
    this.employeeService.createEmployee(this.employeeObj).subscribe({
      next: (data: string) => {
        console.log('Employee criado:', this.employeeObj);
        this.router.navigate(['/home'], { queryParams: { tab: 'usuarios' } }).then(() => {
          window.location.reload();
        });
      },
      error: (err) => {
        if (err.status === 404) {
          this.errorMessage = 'Não existe squad com este ID';
          this.squadError = true;
          this.employeeObj.squadId = 'Error';
        } else if (err.status === 409) {
          this.errorMessage = 'Nome de usuário já existente';
          this.nameError = true;
          this.employeeObj.name = 'Error';
        } else if (err.status === 422) {
          this.errorMessage = 'Entidade não processada.';
        } else {
          this.errorMessage = 'Erro ao criar usuário. Tentar novamente mais tarde.';
        }
      }
    });
  }

  /**
   * Clean all warning
   */
  cleanError() {
    if (this.squadError) {
      this.squadError = false;
      this.errorMessage = null;
      this.employeeObj.squadId = '';
    } else if (this.nameError) {
      this.nameError = false;
      this.errorMessage = null;
      this.employeeObj.name = '';
    } else {
      this.errorMessage = null;
    }
  }

}
