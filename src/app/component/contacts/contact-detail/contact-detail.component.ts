import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContactService } from '../../../../services/contact.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageService } from '../../../../services/message.service';
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
})
export class ContactDetailComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private activeRoutes: ActivatedRoute,
    public snackBar: MatSnackBar,
    private messageService: MessageService
  ) {}
  contact: any;
  otp: number = 0;
  ngOnInit(): void {
    this.activeRoutes.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.contactService
          .getOne(paramMap.get('id'))
          .subscribe((resp: any) => {
            this.contact = resp[0];
          });
      }
    });
  }
  // generate 6 digit random number
  otpGenerator() {
    this.otp = Math.floor(100000 + Math.random() * 900000);
  }
  sendOtp() {
    if (this.contact.phone.length !== 10) {
      this.handleError('Invalid Phone Number');
    } else {
      this.messageService
        .sendOtp({
          number: this.contact.phone,
          otp: this.otp,
        })
        .subscribe((data) => {});
      // create sent message entry in db
      this.messageService
        .create({
          contactName: `${this.contact.firstName} ${this.contact.lastName}`,
          timeDate: new Date(),
          otp: this.otp,
        })
        .subscribe(() => {
          this.snackBar.open('OTP Sent', '', {
            duration: 2000,
          });
        });
    }
  }
  handleError(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 2000,
    });
  }
}
