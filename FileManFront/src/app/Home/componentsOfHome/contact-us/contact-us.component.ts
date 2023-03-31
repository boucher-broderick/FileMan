import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms'
import { Message } from 'primeng/api';
import { HomeServiceService } from '../../home.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  FormData!: FormGroup;
  contactForm = new FormGroup({
  firstName:  new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required),
  email: new FormControl('', [ Validators.required, Validators.email ]),
  message: new FormControl('', Validators.required)
  });
  msgs: Message[] = [];
  constructor(private contact: HomeServiceService) { }

  ngOnInit() {

  }


  onSubmit(FormData: FormGroup) {

    var success: boolean = true;
    if(success){
      this.msgs = [];
      this.msgs.push({severity:'success', summary:'Success Message', detail:'Submitted'});
      this.contactForm.reset();
    }
    else{
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Error Message', detail:'Submission  failed'});
    }
    setTimeout(() => {
      this.clear();
    }, 1500);

  }

  clear() {
    this.msgs = [];
}
}