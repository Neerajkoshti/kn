import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from '../../../services/message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  displayedColumns: string[] = ['contactName', 'otp', 'timeDate'];
  dataSource = new MatTableDataSource();
  ngOnInit(): void {
    this.messageService.getAll().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  formateDateTime(date: any) {
    return new Date(date).toLocaleString();
  }
}
