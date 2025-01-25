import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

import { SquadService } from '../../services/squad.service';

@Component({
  selector: 'app-create-squad',
  imports: [MatDialogContent, MatDialogActions, FormsModule, MatIcon],
  templateUrl: './create-squad.component.html',
  styleUrl: './create-squad.component.css'
})
export class CreateSquadComponent {
  name: string = '';

  squadService = inject(SquadService);
  router = inject(Router);

  nameError: boolean = false;
  errorMessage: string | null = null;

  /**
   * Create a squad using squadService
   * If get status 404 (squad not found) show a warning 
   * If get status 422 (name can't be '') show a warning 
   * If get another error status show a default warning 
   */
  create() {
    this.squadService.createSquad(this.name).subscribe({
      next: (data: string) => {
        console.log('Report criado:', this.name);
        this.router.navigate(['/home'], { queryParams: { tab: 'squads' } }).then(() => {
          window.location.reload();
        });
      },
      error: (err) => {
        if (err.status === 409) { //squad não encontrada
          this.errorMessage = 'Nome da squad já existente';
          this.nameError = true;
          this.name = 'Error';
        } else if (err.status === 422) { // name vazio
          this.errorMessage = 'Este nome não pode ser validade, por favor tente outro.';
          this.nameError = true;
          this.name = 'Error';
        } else {
          this.errorMessage = 'Erro ao criar usuário. Tentar novamente mais tarde.';
        }
      }
    });
  }
}
