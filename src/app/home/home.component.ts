import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transfer } from '../models/transfer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  transfers: Transfer[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const httpHeaders = new HttpHeaders({
      'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    this.http.get('assets/transferuri.json', { headers: httpHeaders }).subscribe((response: Transfer[]) => {
      this.transfers = response;
    })
  }
}
