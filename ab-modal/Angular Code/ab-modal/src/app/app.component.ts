import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ab-modal';
  showModal:boolean = false;
  showModal2:boolean = false;

  showGsModal(){
    this.showModal = true;
  }

  hideModal(event:any){
    console.log(event);
    if(event){
      this.showModal = false;
    }
  }

  showGsModal2(){
    this.showModal2 = true;
  }

  hideModal2(event:any){
    if(event){
      this.showModal2 = false;
    }
  }
}
