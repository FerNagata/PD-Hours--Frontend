import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ISquad } from '../../model/interface/squad';
import { SquadService } from '../../services/squad.service';
import { CreateSquadComponent } from '../create-squad/create-squad.component';
import { SquadDataComponent } from '../squad-data/squad-data.component';

@Component({
  selector: 'app-squad',
  imports: [MatTableModule, SquadDataComponent],
  templateUrl: './squad.component.html',
  styleUrl: './squad.component.css',
})
export class SquadComponent {

  displayedColumns: string[] = ['id', 'name', 'action'];
  squadsList: ISquad[] = [];
  showSquadDetails: boolean = false;

  squadService = inject(SquadService);
  dialog = inject(MatDialog);
  router = inject(Router);

  /**
   *  On component initialization, retrieves all squads.
   */
  ngOnInit(): void {
    this.squadService.getAllSquads().subscribe((data: ISquad[]) => {
      this.squadsList = data;
    }, error => {
      if (error.status != 404) {
        alert('Parece que houve um erro interno, por favor tentar novamente mais tarde.')
      }
    });
  }

  /**
   * Open dialog to create new squd
   */
  openDialog() {
    this.dialog.open(CreateSquadComponent, {
      width: '400px',
    });
  }

  /**
   * Redirect page to squad-data
   * @param squadId number - ID of the squad
   * @param squadName string - Name of the squad
   */
  openSquadDetails(squadId: number, squadName: string) {
    this.showSquadDetails = true;
    this.router.navigate(['/squad-data'], { queryParams: { squadId: squadId, squadName: squadName } });
  }

}
