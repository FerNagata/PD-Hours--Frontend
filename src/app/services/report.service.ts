import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICreateReport, ISquadMembersData } from '../model/interface/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  apiURL = "http://0.0.0.0:8000";

  /**
   * Send a POST request to create a new report.
   * @param report ICreateReport - data of the report
   * @returns Observable<string> - An observable containing a message about the creation status.
   */
  createReport(report: ICreateReport): Observable<ICreateReport> {
    return this.http.post<ICreateReport>(this.apiURL + "/report/create", report);
  }

  /**
   * Sends a GET request to retrieve all reports from employee within a specified squad id and time period.
   * @param squad_id number - ID of the squad.
   * @param start_date Date - start date of the time period (format: YYYY-MM-DD).
   * @param end_date Date - end date of the time period (format: YYYY-MM-DD).
   * @returns Observable<ISquadMembersData[]> - An observable containing a list with all squad members data.
   */
  getAllMemberReports(squad_id: number, start_date: Date, end_date: Date): Observable<ISquadMembersData[]> {
    return this.http.get<ISquadMembersData[]>(this.apiURL + "/report/read-all-reports-from-squad/" + squad_id + "?squad_id=" + squad_id + "&start_date=" + start_date + "&end_date=" + end_date);
  }
}
