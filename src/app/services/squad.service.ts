import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ISquad, ISquadData, ISquadDataAverageHours } from '../model/interface/squad';

@Injectable({
  providedIn: 'root'
})
export class SquadService {

  constructor(private http: HttpClient) { }

  apiURL = "http://0.0.0.0:8000";

  /**
   * Send a POST request to create a new squad.
   * @param name - name of the squad.
   * @returns Observable<string> - An observable containing a message about the creation status.
   */
  createSquad(name: string): Observable<string> {
    return this.http.post<string>(this.apiURL + "/squad/create", { "name": name });
  }

  /**
   * Send a GET request to read all squad
   * @returns Observable<ISquad[]> - An observable containing a list of objects
   */
  getAllSquads(): Observable<ISquad[]> {
    return this.http.get<ISquad[]>(this.apiURL + "/squad/read-all");
  }

  /**
  * Sends a GET request to retrieve the total amount of hours this squad has spent within a specified time period.
  * 
  * @param squad_id number - ID of the squad.
  * @param start_date Date - start date of the time period (format: YYYY-MM-DD).
  * @param end_date Date - end date of the time period (format: YYYY-MM-DD).
  * @returns Observable<ISquadData> - An observable containing the squad's total hours spent data.
  */
  getTotalHoursSpent(squad_id: number, start_date: Date, end_date: Date): Observable<ISquadData> {
    return this.http.get<ISquadData>(this.apiURL + "/squad/read-total-spent-hours" + "?squad_id=" + squad_id + "&start_date=" + start_date + "&end_date=" + end_date);
  }

  /**
   * Send a GET request to retrive the average amout of hours per day this squad has spent within a specified time period.
   * @param squad_id - ID of the squad.
   * @param start_date - start date of the time period (format: YYYY-MM-DD).
   * @param end_date - end date of the time period (format: YYYY-MM-DD).
   * @returns Observable<ISquadDataAverageHours> - An observable containing the squad's average amount of hours spent.
   */
  getAverageHoursSpent(squad_id: number, start_date: Date, end_date: Date): Observable<ISquadDataAverageHours> {
    return this.http.get<ISquadDataAverageHours>(this.apiURL + "/squad/read-average-spent-hours" + "?squad_id=" + squad_id + "&start_date=" + start_date + "&end_date=" + end_date);
  }
}
