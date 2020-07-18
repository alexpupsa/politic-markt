import { Component, OnInit } from '@angular/core';
import { Transfer } from '../models/transfer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  transfers: Transfer[] = [];

  constructor() { }

  ngOnInit(): void {
    this.transfers.push(new Transfer('Xulescu', 'PSD', 'PNL', 'nostalgic USL'));
    this.transfers.push(new Transfer('Yulescu', 'PNL', 'PSD', 'nostalgic USL'));
    this.transfers.push(new Transfer('Zulescu', 'PSD', 'PNL', 'nostalgic USL'));
  }

}
