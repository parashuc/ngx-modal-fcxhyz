import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { SomeComponent } from './some/some.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(SomeComponent,  {
      initialState: {
        title: 'Modal title',
        data: {}
      }
    });
  }
}
